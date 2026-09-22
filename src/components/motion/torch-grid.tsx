"use client";

import { useEffect, useRef } from "react";

/**
 * A second, bronze-tinted blueprint grid revealed in a small radius around the
 * pointer — the drawing surface lighting up under the hand.
 *
 * Coordinates are written straight to CSS custom properties inside a single
 * rAF, so moving the pointer never triggers a React render. Skipped entirely on
 * touch, where there is no hover, and under reduced motion.
 */
export function TorchGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const host = layer?.parentElement;
    if (!layer || !host) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        layer.style.setProperty("--px", `${x}px`);
        layer.style.setProperty("--py", `${y}px`);
        layer.style.setProperty("--torch", "1");
      });
    };

    const onLeave = () => layer.style.setProperty("--torch", "0");

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} aria-hidden className={`torch-grid absolute inset-0 ${className ?? ""}`} />;
}
