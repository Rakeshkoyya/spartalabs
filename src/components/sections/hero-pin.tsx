"use client";

import { useEffect, useRef } from "react";

/**
 * Pins the hero so the next section can slide over it — but never before the
 * visitor has seen all of it. On a short screen the hero is taller than the
 * viewport, so it sticks at a negative offset (viewport height minus its own
 * height): it scrolls normally until its bottom edge, buttons included, is in
 * view, and only then holds while the sheet rises.
 */
export function HeroPin({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const offset = Math.min(0, window.innerHeight - el.offsetHeight);
      el.style.setProperty("--pin-top", `${offset}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="hero-pin">
      {children}
    </div>
  );
}
