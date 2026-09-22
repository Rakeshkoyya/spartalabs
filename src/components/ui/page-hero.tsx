import { TorchGrid } from "@/components/motion/torch-grid";
import { Container } from "./container";
import { Kicker } from "./kicker";

/**
 * Inner-page opener. Shorter than the home hero and without the metrics strip —
 * the proof already landed on the way in.
 *
 * Uses `data-enter` rather than the scroll observer: this content is above the
 * fold on arrival and should start drawing at first paint, not after hydration.
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
    <div className="border-hairline relative overflow-hidden border-b">
      <div aria-hidden className="blueprint-grid veil-hero pointer-events-none absolute inset-0" />
      <TorchGrid className="veil-hero pointer-events-none" />
      <Container className="relative pt-[8.5rem] pb-16 md:pt-[10rem] md:pb-20">
        <div className="max-w-[48rem]">
          <span data-enter="lock">
            <Kicker>{kicker}</Kicker>
          </span>
          <h1
            data-enter="wipe"
            style={{ "--enter-delay": "110ms" } as React.CSSProperties}
            className="text-h1 font-display mt-5 font-bold"
          >
            {title}
          </h1>
          {lede ? (
            <p
              data-enter="lock"
              style={{ "--enter-delay": "260ms" } as React.CSSProperties}
              className="text-lede text-muted mt-5 max-w-[60ch]"
            >
              {lede}
            </p>
          ) : null}
          {children ? (
            <div data-enter="lock" style={{ "--enter-delay": "360ms" } as React.CSSProperties}>
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
