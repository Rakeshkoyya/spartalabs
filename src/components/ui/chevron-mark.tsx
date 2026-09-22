import { cn } from "@/lib/utils";

/**
 * The formation mark: a double chevron. Used as list bullet, card anchor and
 * logo glyph. Deliberately not a shield, helmet or column — that line is what
 * separates the brand from costume.
 */
export function ChevronMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 13 15"
      fill="none"
      aria-hidden="true"
      className={cn("h-[15px] w-[13px] shrink-0", className)}
    >
      <path
        d="M1 1.2 6.5 7.5 1 13.8M6.5 1.2 12 7.5 6.5 13.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  );
}
