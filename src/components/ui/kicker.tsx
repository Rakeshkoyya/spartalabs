import { cn } from "@/lib/utils";

/**
 * The brochure's section eyebrow: Outfit, widely tracked, in the accent blue
 * (cyan on navy). Every section and card tag uses it.
 *
 * With `animate`, the label locks in first and its optional trailing rule is
 * drawn — the first beat of the Formation sequence.
 */
export function Kicker({
  children,
  rule = false,
  animate = false,
  className,
}: {
  children: React.ReactNode;
  /** A trailing hairline, for places where the label heads a list. */
  rule?: boolean;
  /** Opt in where the kicker opens a section; off for decorative uses. */
  animate?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-label text-accent font-label flex items-center gap-3 font-medium tracking-[0.2em] uppercase",
        className,
      )}
    >
      {animate ? <span data-lock="">{children}</span> : children}
      {rule ? (
        <span
          aria-hidden
          {...(animate ? { "data-draw": "" } : {})}
          className="bg-hairline h-px min-w-6 flex-1"
        />
      ) : null}
    </span>
  );
}
