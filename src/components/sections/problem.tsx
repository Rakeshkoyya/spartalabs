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
import { ConvergeGraphic } from "./converge-graphic";

const STATEMENT = [
  { text: "Most software asks your business to change.", accent: false },
  { text: "We build it the other way round.", accent: true },
];

/**
 * Brochure page two, and the sheet that slides up over the pinned hero. It
 * opens on the numbers; then the manifesto (lit word by word as it crosses the
 * viewport) beside the converge graphic, where scattered tools gather into
 * one system; then the pains we hear and where we have delivered.
 */
export function Problem() {
  const words = STATEMENT.flatMap((part) =>
    part.text.split(" ").map((word) => ({ word, accent: part.accent })),
  );

  return (
    <Section id="about" label="Who we are" sheet className="topo">
      <MetricsStrip />

      <div className="mt-20 grid items-center gap-14 md:mt-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <Kicker animate index="01" className="w-full">
            Who we are
          </Kicker>
          <h2 className="illuminate text-h1 mt-8 max-w-[16ch] font-semibold">
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

          <div data-lock="" className="mt-10 flex max-w-[56ch] flex-col gap-4">
            <p className="text-ink text-[1.25rem] leading-relaxed">
              Sparta Labs is a software company that designs, builds and runs the systems
              businesses depend on, for clients in the USA, the UAE and around the world.
            </p>
            <p className="text-muted">
              Most businesses do not need more software. They need software that fits how they
              actually work. We start with how the work really happens, not how the org chart
              says it does, and build the system to match — slower to begin, far faster to live
              with.
            </p>
            <p className="text-muted">
              Every engagement gets a specialist for every layer, and one named lead who owns the
              whole thing from the first call to long after launch.
            </p>
          </div>
        </div>

        <ConvergeGraphic />
      </div>

      <div className="mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-h3 font-semibold">Does this sound familiar?</h3>
          <Link
            href="/contact"
            className="text-accent font-display group flex min-h-11 items-center gap-2 font-semibold"
          >
            <span className="group-hover:underline">These are exactly the problems we solve</span>
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {painPoints.map((point, index) => (
            <li
              key={point}
              data-lock=""
              style={{ "--m-delay": `${index * 70}ms` } as React.CSSProperties}
              className="card spotlight flex flex-col gap-4 p-5"
            >
              <span className="flex items-center justify-between">
                <CircleX aria-hidden className="text-danger size-5" />
                <span className="text-muted font-mono text-[0.8125rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <span className="text-ink text-[0.9375rem] leading-snug">{point}</span>
            </li>
          ))}
        </ul>
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
