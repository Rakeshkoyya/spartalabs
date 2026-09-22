import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Kicker } from "./kicker";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("section-y scroll-mt-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Uniform section rhythm. Irregular spacing between sections is the single
 * clearest tell that a page was assembled rather than designed.
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
      <Kicker>{kicker}</Kicker>
      <h2 className="text-h2 font-semibold">{title}</h2>
      {lede ? <p className="text-lede max-w-[62ch] text-muted">{lede}</p> : null}
    </div>
  );
}
