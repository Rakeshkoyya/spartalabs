import { cn } from "@/lib/utils";

/**
 * The brochure's section eyebrow: Outfit, widely tracked, in the accent blue
 * (cyan on navy). Every section and card tag uses it.
 *
 * With `index`, it reads as a chapter mark — a mono numeral, the label and a
 * hairline running out to the edge — which is how the home page's sections
 * are numbered. With `animate`, the label locks in first and the rule is
 * drawn: the first beat of the Formation sequence.
 */
export function Kicker({
  children,
  index,
  rule = false,
  animate = false,
  className,
}: {
  children: React.ReactNode;
  /** A chapter number such as "01". Implies the trailing rule. */
  index?: string;
  /** A trailing hairline, for places where the label heads a list. */
  rule?: boolean;
  /** Opt in where the kicker opens a section; off for decorative uses. */
  animate?: boolean;
  className?: string;
}) {
  const label = (
    <>
      {index ? (
        <span className="text-muted font-mono text-[0.8125rem] font-medium tracking-normal">
          {index}
        </span>
      ) : null}
      <span>{children}</span>
    </>
  );

  return (
    <span
      className={cn(
        "text-label text-accent font-label flex items-center gap-3 font-medium tracking-[0.2em] uppercase",
        className,
      )}
    >
      {animate ? (
        <span data-lock="" className="flex items-center gap-3">
          {label}
        </span>
      ) : (
        label
      )}
      {rule || index ? (
        <span
          aria-hidden
          {...(animate ? { "data-draw": "" } : {})}
          className="bg-hairline-strong h-px min-w-6 flex-1"
        />
      ) : null}
    </span>
  );
}
