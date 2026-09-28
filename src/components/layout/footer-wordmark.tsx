"use client";

import { useRef } from "react";

/**
 * The footer sign-off: the name set huge, filled with a crest-blue gradient
 * that fades into the page edge, cropped by the bottom of the viewport.
 *
 * On hover a light follows the pointer and lights the letters in bright crest
 * blue while the word lifts; on scroll it rises out of the bottom edge
 * (motion.css, "WORDMARK"). Decorative — the name is already in the logo and
 * the copyright line — so it is hidden from assistive tech.
 */
export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.pointerType === "touch") return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  };

  return (
    <div
      ref={ref}
      aria-hidden
      onPointerMove={onPointerMove}
      className="wordmark-wrap overflow-clip"
    >
      <p className="wordmark font-display text-center leading-none font-semibold whitespace-nowrap select-none">
        Sparta Labs
      </p>
    </div>
  );
}
