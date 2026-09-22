import { Container } from "./container";
import { Kicker } from "./kicker";

/**
 * Inner-page opener. Shorter than the home hero and without the metrics strip —
 * the proof already landed on the way in.
 */
export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-hairline">
      <div aria-hidden className="blueprint-grid veil-hero pointer-events-none absolute inset-0" />
      <Container className="relative pt-[8.5rem] pb-16 md:pt-[10rem] md:pb-20">
        <div className="max-w-[48rem]">
          <Kicker>{kicker}</Kicker>
          <h1 className="text-h1 mt-5 font-display font-bold">{title}</h1>
          {lede ? <p className="text-lede mt-5 max-w-[60ch] text-muted">{lede}</p> : null}
          {children}
        </div>
      </Container>
    </div>
  );
}
