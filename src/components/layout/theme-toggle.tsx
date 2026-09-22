"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Icon state is driven by CSS off the `.dark` class rather than React state,
 * so there is no hydration mismatch and no wrong-icon flash on first paint.
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
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
      className={`border-hairline-strong text-muted hover:border-accent hover:text-accent grid size-9 place-items-center rounded-full border transition-colors duration-200 ${className ?? ""}`}
    >
      <Moon aria-hidden className="size-4 [.dark_&]:hidden" />
      <Sun aria-hidden className="hidden size-4 [.dark_&]:block" />
    </button>
  );
}
