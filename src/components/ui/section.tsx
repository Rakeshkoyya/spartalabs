import { FlowLines } from "@/components/brand/flow-lines";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Kicker } from "./kicker";

type Tone = "paper" | "surface" | "navy";

/**
 * Pages alternate paper and navy the way the brochure alternates its spreads.
 * `navy` scopes the dark tokens to this band, so everything inside it — type,
 * cards, even the logo — switches without a single conditional class.
 */
export function Section({
  id,
  label,
  tone = "paper",
  flow = false,
  className,
  children,
}: {
  id?: string;
  /** Names this section on the spine. Omit to keep it off the rail. */
  label?: string;
  tone?: Tone;
  /** The sweeping line texture along the bottom edge. */
  flow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-spine-label={label}
      className={cn(
        "section-y relative scroll-mt-24 overflow-hidden",
        tone === "navy" && "band-dark",
        tone === "surface" && "bg-surface",
        tone === "paper" && "bg-page",
        className,
      )}
    >
      {flow ? <FlowLines className="bottom-0 h-[42%] min-h-56" /> : null}
      <Container className="relative">{children}</Container>
    </section>
  );
}

/**
 * Uniform section rhythm, and the canonical Formation sequence: the label
 * locks, the heading is wiped in behind a passing edge, the lede follows.
 * Pass the accent half of a two-part heading as `highlight`, as the brochure
 * does ("Business first. / Software second.").
 */
export function SectionHeader({
  kicker,
  title,
  highlight,
  lede,
  align = "left",
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  highlight?: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-[780px] flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Kicker animate>{kicker}</Kicker>
      <h2
        data-wipe=""
        style={{ "--m-delay": "140ms" } as React.CSSProperties}
        className="text-h2 font-semibold"
      >
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-accent-core on-dark:text-accent-bright">{highlight}</span>
          </>
        ) : null}
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
