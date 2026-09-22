import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Kicker } from "./kicker";

export function Section({
  id,
  label,
  className,
  children,
}: {
  id?: string;
  /** Names this section on the spine. Omit to keep it off the rail. */
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-spine-label={label} className={cn("section-y scroll-mt-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Uniform section rhythm, and the canonical Formation sequence: the rule draws,
 * the label locks, the heading is wiped in behind a passing edge, the lede
 * follows. Irregular spacing between sections is the clearest tell that a page
 * was assembled rather than designed.
 */
export function SectionHeader({
  kicker,
  title,
  lede,
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-[760px] flex-col gap-3.5", className)}>
      <Kicker animate>{kicker}</Kicker>
      <h2
        data-wipe=""
        style={{ "--m-delay": "140ms" } as React.CSSProperties}
        className="text-h2 font-semibold"
      >
        {title}
      </h2>
      {lede ? (
        <p
          data-lock=""
          style={{ "--m-delay": "260ms" } as React.CSSProperties}
          className="text-lede text-muted max-w-[62ch]"
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
