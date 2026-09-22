import { cn } from "@/lib/utils";

/**
 * Mono spec label. One of the four signature devices — every section eyebrow and
 * card tag uses it, which is what gives the site its verbal texture.
 */
export function Kicker({
  children,
  rule = true,
  className,
}: {
  children: React.ReactNode;
  /** The trailing hairline. Off inside cards, where it would fight the border. */
  rule?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-label flex items-center gap-2.5 font-mono font-medium tracking-[0.15em] text-accent uppercase",
        className,
      )}
    >
      {children}
      {rule ? <span aria-hidden className="h-px min-w-6 flex-1 bg-hairline" /> : null}
    </span>
  );
}
