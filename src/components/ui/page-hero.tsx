import Image from "next/image";
import { FlowLines } from "@/components/brand/flow-lines";
import { Container } from "./container";
import { Kicker } from "./kicker";

/**
 * Inner-page opener, set like the brochure's navy spreads: flow lines along
 * the foot, the helmet mark standing off the right edge.
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
    <div className="band-dark relative overflow-hidden">
      <FlowLines className="bottom-0 h-[55%] min-h-48" />
      <Image
        src="/brand/logo-mark-white.png"
        alt=""
        aria-hidden
        width={600}
        height={693}
        priority
        className="pointer-events-none absolute top-24 -right-16 hidden w-[min(26vw,340px)] opacity-[0.14] md:block"
      />
      <Container className="relative pt-[8.5rem] pb-16 md:pt-[10rem] md:pb-24">
        <div className="max-w-[50rem]">
          <span data-enter="lock">
            <Kicker>{kicker}</Kicker>
          </span>
          <h1
            data-enter="wipe"
            style={{ "--enter-delay": "110ms" } as React.CSSProperties}
            className="text-h1 font-display mt-5 font-semibold text-white"
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
