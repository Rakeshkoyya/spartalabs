import { FlowLines } from "@/components/brand/flow-lines";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Kicker } from "./kicker";

type Tone = "paper" | "surface" | "navy";

/**
 * Pages alternate paper and navy the way the brochure alternates its spreads.
 * `navy` scopes the dark tokens to this band, so everything inside it — type,
 * cards, even the logo — switches without a single conditional class.
 *
 * Navy bands open out to full bleed as they scroll in (`band-open`), and a
 * `sheet` rides up over whatever came before it with rounded shoulders — the
 * two section transitions in motion.css.
 */
export function Section({
  id,
  label,
  tone = "paper",
  flow = false,
  sheet = false,
  className,
  children,
}: {
  id?: string;
  /** Names the section landmark for assistive tech. */
  label?: string;
  tone?: Tone;
  /** The sweeping line texture along the bottom edge. */
  flow?: boolean;
  /** Slides over the section before it (used directly after the pinned hero). */
  sheet?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        // `clip`, not `hidden`: a hidden overflow is a scroll container, and
        // that would pin the sticky columns and the process stack to nothing.
        "section-y relative scroll-mt-20 overflow-clip",
        tone === "navy" && "band-tint band-open",
        tone === "surface" && "bg-surface",
        tone === "paper" && "bg-page",
        sheet && "sheet",
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
  index,
  title,
  highlight,
  lede,
  align = "left",
  size = "h2",
  className,
}: {
  kicker: string;
  /** Chapter number, e.g. "03". */
  index?: string;
  title: React.ReactNode;
  highlight?: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  /** `h1` sets the heading one step larger, for a section's statement line. */
  size?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-[820px] flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Kicker animate index={index} className={cn(index && "w-full")}>
        {kicker}
      </Kicker>
      <h2
        data-wipe=""
        style={{ "--m-delay": "140ms" } as React.CSSProperties}
        className={cn("font-semibold", size === "h1" ? "text-h1" : "text-h2")}
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
