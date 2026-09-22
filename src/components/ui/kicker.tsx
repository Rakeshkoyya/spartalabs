import { cn } from "@/lib/utils";

/**
 * Mono spec label. One of the four signature devices — every section eyebrow and
 * card tag uses it, which is what gives the site its verbal texture.
 *
 * Its trailing rule carries `data-draw`, so it is the first beat of the
 * Formation sequence: the line is drawn, then the heading locks to it.
 */
export function Kicker({
  children,
  rule = true,
  animate = false,
  className,
}: {
  children: React.ReactNode;
  /** The trailing hairline. Off inside cards, where it would fight the border. */
  rule?: boolean;
  /** Opt in where the kicker opens a section; off for decorative uses. */
  animate?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-label text-accent flex items-center gap-2.5 font-mono font-medium tracking-[0.15em] uppercase",
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
