"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Icon state is driven by CSS off the `.light` class rather than React state,
 * so there is no hydration mismatch and no wrong-icon flash on first paint.
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("light") ? "dark" : "light";
    root.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("sl-theme", next);
    } catch {
      /* Private mode or blocked storage — the choice just won't persist. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch colour theme"
      className={`border-hairline-strong text-muted hover:border-accent-core hover:text-accent grid size-9 place-items-center rounded-[var(--radius-control)] border transition-colors duration-200 ${className ?? ""}`}
    >
      <Moon aria-hidden className="size-4 [.light_&]:hidden" />
      <Sun aria-hidden className="hidden size-4 [.light_&]:block" />
    </button>
  );
}
