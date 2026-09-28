import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleX } from "lucide-react";
import { painPoints } from "@/content/home";
import { industries } from "@/content/industries";
import { heroMetrics } from "@/content/metrics";
import { industryIcons } from "@/components/brand/icons";
import { CountUp } from "@/components/motion/count-up";
import { Kicker } from "@/components/ui/kicker";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const STATEMENT = [
  { text: "Most software asks your business to change.", accent: false },
  { text: "We build it the other way round.", accent: true },
];

/**
 * Brochure page two, and the sheet that slides up over the pinned hero. It
 * opens on the numbers, then the manifesto — lit word by word as it crosses
 * the viewport — then the pains we hear and where we have delivered.
 */
export function Problem() {
  const words = STATEMENT.flatMap((part) =>
    part.text.split(" ").map((word) => ({ word, accent: part.accent })),
  );

  return (
    <Section id="about" label="Who we are" sheet className="topo">
      <MetricsStrip />

      <div className="mt-20 md:mt-28">
        <Kicker animate index="01" className="w-full">
          Who we are
        </Kicker>
        <h2 className="illuminate text-h1 mt-8 max-w-[18ch] font-semibold">
          {words.map(({ word, accent }, index) => (
            <span
              key={`${word}-${index}`}
              className={cn("lit", accent && "text-accent-core on-dark:text-accent-bright")}
              style={{ "--p": index / (words.length - 1) } as React.CSSProperties}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div data-lock="" className="flex flex-col gap-5">
          <p className="text-ink text-[1.3125rem] leading-relaxed">
            Sparta Labs is an IT solutions company in Hyderabad that designs, builds and runs the
            systems businesses depend on.
          </p>
          <p className="text-muted">
            Most businesses do not need more software. They need software that fits how they
            actually work. Most of what they are sold does the opposite, asking a school, a
            production house or a distributor to rearrange itself around a product built for someone
            else.
          </p>
          <p className="text-muted">
            We start with how the work really happens, not how the org chart says it does, and we
            build the system to match. It is slower to begin and far faster to live with.
          </p>
          <p className="text-muted">
            Every engagement gets a specialist for every layer of the system, and one named lead who
            owns the whole thing from the first call to long after launch.
          </p>
        </div>

        <div
          data-lock=""
          style={{ "--m-delay": "120ms" } as React.CSSProperties}
          className="card p-6 sm:p-8"
        >
          <h3 className="font-display text-xl font-semibold">Does this sound familiar?</h3>
          <ul className="mt-4">
            {painPoints.map((point) => (
              <li
                key={point}
                className="border-hairline text-muted flex gap-3 border-t py-3.5 text-[0.9375rem] first:border-t-0"
              >
                <CircleX aria-hidden className="text-danger mt-0.5 size-4.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="text-accent font-display group mt-4 flex min-h-11 items-center gap-2 font-semibold"
          >
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
            <span className="group-hover:underline">These are exactly the problems we solve.</span>
          </Link>
        </div>
      </div>

      <div className="mt-24">
        <Kicker rule className="text-muted">
          Industries we have delivered for
        </Kicker>
        <ul className="mt-2 grid sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industryIcons[industry.name];
            return (
              <li
                key={industry.name}
                data-lock=""
                style={{ "--m-delay": `${index * 70}ms` } as React.CSSProperties}
                className="border-hairline border-b lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <Link
                  href={`/work?sector=${encodeURIComponent(industry.name)}`}
                  className="group hover:bg-surface flex h-full flex-col gap-3 px-1 py-7 transition-colors duration-200 lg:px-6"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-muted font-mono text-[0.8125rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="text-muted group-hover:text-accent size-4 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  <span className="font-display group-hover:text-accent flex items-center gap-2.5 text-xl font-semibold transition-colors">
                    {Icon ? <Icon aria-hidden className="text-accent-core size-5" /> : null}
                    {industry.name}
                  </span>
                  <span className="text-muted text-sm">{industry.proof}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/** The hero's trust bar, set as the leading edge of the sheet. */
function MetricsStrip() {
  return (
    <ul className="border-hairline grid grid-cols-2 border-y md:grid-cols-4">
      {heroMetrics.map((metric, index) => {
        const match = /^(\d+)(\D*)$/.exec(metric.value);
        return (
          <li
            key={metric.label}
            className={cn(
              "border-hairline px-1 py-7 md:px-6",
              index % 2 === 0 && "border-r",
              index < 2 && "border-b md:border-b-0",
              index === 1 && "md:border-r",
              index === 2 && "md:border-r",
            )}
          >
            <span
              data-pending={metric.pending ? "" : undefined}
              className={cn(
                "tabular font-display block text-[clamp(2.5rem,1.9rem+2.2vw,4rem)] leading-none font-semibold tracking-[-0.03em]",
                metric.pending && "text-muted",
              )}
            >
              {match ? (
                <>
                  <CountUp value={Number(match[1])} />
                  <span className="text-accent-core on-dark:text-accent-bright">{match[2]}</span>
                </>
              ) : (
                metric.value
              )}
            </span>
            <span className="text-muted mt-3 block max-w-[24ch] text-sm leading-snug">
              {metric.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
