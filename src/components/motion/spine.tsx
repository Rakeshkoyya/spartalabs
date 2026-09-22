"use client";

import { useEffect, useState } from "react";

type Notch = { id: string; label: string; ratio: number };

/**
 * The spine: a fixed hairline down the left gutter, filled to scroll position
 * and notched at every section, with the current one named.
 *
 * It is the site's one literal reading of the brand — the line being held — and
 * it earns its place by being useful: where you are in the page, how much is
 * left, and what you are looking at. It needs real gutter space, so it appears
 * only above 1400px and is hidden from assistive tech, which already has
 * landmarks and headings for the same job.
 */
export function Spine() {
  const [notches, setNotches] = useState<Notch[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setNotches([]);
        return;
      }
      const found = Array.from(document.querySelectorAll<HTMLElement>("[data-spine-label]")).map(
        (el, index) => ({
          id: el.id || `spine-${index}`,
          label: el.dataset.spineLabel ?? "",
          ratio: Math.min(1, Math.max(0, (el.offsetTop - window.innerHeight * 0.3) / scrollable)),
        }),
      );
      setNotches(found);
    };

    measure();
    window.addEventListener("resize", measure);

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        setProgress(Math.min(1, Math.max(0, ratio)));

        const marker = window.scrollY + window.innerHeight * 0.35;
        let current: string | null = null;
        for (const el of document.querySelectorAll<HTMLElement>("[data-spine-label]")) {
          if (el.offsetTop <= marker) current = el.id || null;
        }
        setActiveId(current);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (notches.length === 0) return null;

  const active = notches.find((notch) => notch.id === activeId);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-7 z-40 hidden h-screen w-px min-[1400px]:block"
    >
      <div className="bg-hairline absolute inset-0" />
      <div
        className="bg-accent-core absolute top-0 left-0 w-px origin-top transition-[height] duration-150 ease-linear"
        style={{ height: `${progress * 100}%` }}
      />

      {notches.map((notch) => {
        const isActive = notch.id === activeId;
        return (
          <span
            key={notch.id}
            style={{ top: `${notch.ratio * 100}%` }}
            className={`absolute h-px transition-[width,background-color] duration-300 ease-[var(--ease-out-expo)] ${
              isActive ? "bg-accent -left-1.5 w-4" : "bg-hairline-strong -left-0.5 w-2"
            }`}
          />
        );
      })}

      {active ? (
        <span
          key={active.id}
          className="text-label text-muted absolute bottom-20 left-3 font-mono tracking-[0.18em] uppercase [writing-mode:vertical-rl]"
        >
          {active.label}
        </span>
      ) : null}
    </div>
  );
}
