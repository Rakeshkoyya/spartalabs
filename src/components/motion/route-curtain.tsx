"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type State = "idle" | "cover" | "reveal";

/** Matches `--dur-slow` in motion.css: the cover must finish before the route swaps. */
const COVER_MS = 420;
/** Matches the reveal transition in motion.css. */
const REVEAL_MS = 560;
/** If a navigation never lands (offline, same URL), lift the curtain anyway. */
const SAFETY_MS = 2600;

/**
 * Page transition for the whole site. A crest-blue panel rises over the page,
 * the route changes behind it, and it lifts off the top to reveal the new one.
 *
 * It listens in the capture phase so it runs before Next's `<Link>`, which
 * skips its own navigation for a click that is already `defaultPrevented`.
 * Anything that is not a plain same-origin page link — new tabs, modified
 * clicks, downloads, files, hash jumps on the same page — is left alone, and
 * under reduced motion nothing is intercepted at all.
 */
export function RouteCurtain() {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<State>("idle");
  const target = useRef<string | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pushTimer = 0;

    const onClick = (event: MouseEvent) => {
      if (reduce.matches || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      // Static files (the brochure PDF) are not routes.
      if (/\.[a-z0-9]{2,5}$/i.test(url.pathname)) return;

      event.preventDefault();
      target.current = url.pathname;
      document.documentElement.classList.add("is-routing");
      setState("cover");
      window.clearTimeout(pushTimer);
      pushTimer = window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, COVER_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(pushTimer);
    };
  }, [router]);

  // The new route has committed: lift the curtain.
  useEffect(() => {
    if (state !== "cover") return;
    const lift = () => {
      target.current = null;
      document.documentElement.classList.remove("is-routing");
      setState("reveal");
    };
    if (target.current !== null && pathname === target.current) {
      const frame = requestAnimationFrame(lift);
      return () => cancelAnimationFrame(frame);
    }
    const safety = window.setTimeout(lift, SAFETY_MS);
    return () => window.clearTimeout(safety);
  }, [pathname, state]);

  useEffect(() => {
    if (state !== "reveal") return;
    const done = window.setTimeout(() => setState("idle"), REVEAL_MS + 40);
    return () => window.clearTimeout(done);
  }, [state]);

  return (
    <div aria-hidden className="curtain" data-state={state}>
      <Image
        src="/brand/logo-mark-white.png"
        alt=""
        width={600}
        height={693}
        className="curtain-mark h-auto"
      />
    </div>
  );
}
