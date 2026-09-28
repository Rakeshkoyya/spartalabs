import Image from "next/image";
import { FlowLines } from "@/components/brand/flow-lines";
import { RiseText } from "@/components/motion/rise-text";
import { Container } from "./container";
import { Kicker } from "./kicker";

/**
 * Inner-page opener, set like the brochure's navy spreads: flow lines along
 * the foot, and a quiet echo of the home hero's hub — the crest inside its
 * rings — standing off the right edge.
 *
 * Uses `data-enter` rather than the scroll observer: this content is above the
 * fold on arrival and should start moving at first paint, not after
 * hydration. String titles rise word by word like the home headline.
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
    <div className="band-tint relative overflow-clip">
      <FlowLines className="bottom-0 h-[55%] min-h-48" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-[14%] hidden aspect-square w-[min(46vw,620px)] -translate-y-[42%] md:block"
      >
        <span className="orbit-ring" style={ring("0%", 200, "rgb(77 187 255 / 0.14)")} />
        <span
          className="orbit-ring border-dashed"
          style={ring("14%", 280, "rgb(77 187 255 / 0.14)")}
        />
        <span className="orbit-ring" style={ring("28%", 360, "rgb(77 187 255 / 0.22)")} />
        {/* Opacity lives on the wrapper: the crest's entrance keyframe ends at 1. */}
        <div className="absolute inset-[34%] grid place-items-center opacity-[0.22] dark:opacity-[0.3]">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={600}
            height={693}
            priority
            sizes="220px"
            className="orbit-crest h-auto w-full"
          />
        </div>
      </div>

      <Container className="relative pt-[8.5rem] pb-20 md:pt-[11rem] md:pb-28">
        <div className="max-w-[52rem]">
          <span data-enter="lock">
            <Kicker>{kicker}</Kicker>
          </span>
          <h1 className="text-h1 font-display mt-6 max-w-[20ch] font-semibold text-ink">
            {typeof title === "string" ? <RiseText delay={60} parts={[{ text: title }]} /> : title}
          </h1>
          {lede ? (
            <p
              data-enter="lock"
              style={{ "--enter-delay": "360ms" } as React.CSSProperties}
              className="text-lede text-muted mt-6 max-w-[60ch]"
            >
              {lede}
            </p>
          ) : null}
          {children ? (
            <div data-enter="lock" style={{ "--enter-delay": "460ms" } as React.CSSProperties}>
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}

function ring(inset: string, delay: number, color: string) {
  return {
    "--inset": inset,
    "--enter-delay": `${delay}ms`,
    "--ring": color,
  } as React.CSSProperties;
}
