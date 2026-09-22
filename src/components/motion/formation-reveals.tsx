"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEALABLE = "[data-draw],[data-wipe],[data-lock]";
const ANIMATED = "[data-draw],[data-wipe],[data-lock],[data-enter]";

/**
 * Drives the Formation reveals for the whole page.
 *
 * This deliberately does not use IntersectionObserver. An earlier version did,
 * mounted from the route template, and it silently failed to arm the incoming
 * page's headings on a client-side navigation — leaving four permanently
 * invisible `h2`s on /approach. A direct rect check against the viewport is
 * predictable, re-runs on every route change, and costs nothing: the pending
 * list only shrinks, and the listener detaches once it empties.
 *
 * Content is never left hidden. Under reduced motion everything reveals at
 * once, and with JavaScript off the `html.js` gate means the base styles never
 * apply at all.
 */
export function FormationReveals() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let pending: HTMLElement[] = [];

    /**
     * Clearing the animation the moment it ends matters more than it looks: a
     * retained clip-path crops hover lifts and shadows, and a retained
     * transform turns the element into a containing block for anything fixed
     * inside it.
     */
    const settle = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches?.(ANIMATED)) target.classList.add("is-done");
    };

    const sweep = () => {
      frame = 0;
      const limit = window.innerHeight * 0.94;
      pending = pending.filter((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= limit || rect.bottom <= 0) return true;
        el.classList.add("is-in");
        return false;
      });
      if (pending.length === 0) detach();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };

    function detach() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }

    const start = () => {
      pending = Array.from(document.querySelectorAll<HTMLElement>(REVEALABLE)).filter(
        (el) => !el.classList.contains("is-in"),
      );
      if (pending.length === 0) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        for (const el of pending) el.classList.add("is-in", "is-done");
        pending = [];
        return;
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      sweep();
    };

    document.addEventListener("animationend", settle, true);
    // One frame's grace so the incoming route's layout has settled.
    const init = requestAnimationFrame(start);

    return () => {
      cancelAnimationFrame(init);
      cancelAnimationFrame(frame);
      detach();
      document.removeEventListener("animationend", settle, true);
    };
  }, [pathname]);

  return null;
}
