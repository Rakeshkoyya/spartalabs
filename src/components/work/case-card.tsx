import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/work";
import { industryIcons } from "@/components/brand/icons";
import { cn } from "@/lib/utils";

/**
 * A whole case study in one panel — nothing to click through to. The left
 * side names the project; the right side walks situation → built → changed.
 */
export function CasePanel({ study, index }: { study: CaseStudy; index: number }) {
  const featured = index === 0;
  const inBuild = study.status === "In build";
  const steps = [
    { label: "The situation", body: study.situation },
    { label: inBuild ? "What we're building" : "What we built", body: study.built },
    study.changed ? { label: "What changed", body: study.changed } : null,
  ].filter((step): step is { label: string; body: string } => step !== null);

  return (
    <article
      id={study.slug}
      data-lock=""
      className="card grid scroll-mt-28 overflow-hidden lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <div
        className={cn(
          "relative flex flex-col gap-5 p-7 sm:p-9",
          featured ? "tone-dark crest-deep" : "bg-accent-wash",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "font-mono text-[0.8125rem]",
            featured ? "text-accent-bright" : "text-accent",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {study.sectors.map((sector) => {
            const Icon = industryIcons[sector];
            return (
              <span
                key={sector}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
                  featured ? "bg-white/12 text-white" : "bg-surface text-ink",
                )}
              >
                {Icon ? <Icon aria-hidden className="size-3.5" strokeWidth={1.75} /> : null}
                {sector}
              </span>
            );
          })}
          <StatusPill status={study.status} onDark={featured} />
        </div>
        <h2
          className={cn(
            "font-display text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-tight font-semibold tracking-[-0.02em]",
            featured && "text-white",
          )}
        >
          {study.title}
        </h2>
        <p className={cn("text-lede", featured ? "text-white/80" : "text-muted")}>
          {study.oneLine}
        </p>
        {study.link ? (
          <a
            href={study.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-display group mt-auto inline-flex min-h-11 w-fit items-center gap-2 font-semibold",
              featured ? "text-white" : "text-accent",
            )}
          >
            Visit {study.link.label}
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : null}
      </div>

      <div className="flex flex-col p-7 sm:p-9">
        <ol className="relative flex flex-col gap-7">
          <span
            aria-hidden
            className="bg-hairline-strong absolute top-2 bottom-2 left-[0.4375rem] w-px"
          />
          {steps.map((step) => (
            <li key={step.label} className="relative grid grid-cols-[1rem_1fr] gap-4">
              <span
                aria-hidden
                className="bg-accent-core ring-surface relative mt-1.5 size-3.5 rounded-full ring-4"
              />
              <div>
                <p className="text-label text-accent font-label tracking-[0.14em] uppercase">
                  {step.label}
                </p>
                <p className="mt-1.5 text-base">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {study.stack && study.stack.length > 0 ? (
          <ul className="border-hairline mt-8 flex flex-wrap gap-2 border-t pt-6">
            {study.stack.map((tool) => (
              <li
                key={tool}
                className="bg-accent-wash text-accent-wash-ink rounded-full px-3 py-1 text-xs font-semibold"
              >
                {tool}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export function StatusPill({
  status,
  onDark = false,
}: {
  status: CaseStudy["status"];
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "text-label font-label rounded-full border px-2.5 py-1 tracking-[0.12em] uppercase",
        onDark ? "border-white/25 text-white/85" : "border-hairline-strong text-muted",
        status === "In build" && !onDark && "border-accent-core text-accent-core",
      )}
    >
      {status}
    </span>
  );
}
