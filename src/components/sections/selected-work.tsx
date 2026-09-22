import { ArrowUpRight } from "lucide-react";
import { work, type CaseStudy } from "@/content/work";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const [featured, ...rest] = work;

  return (
    <Section id="work" className="border-y border-hairline bg-surface">
      <SectionHeader
        kicker="Selected work"
        title="Four systems, still running."
        lede="Clients are described rather than named — their call, not ours. The numbers are what matter, and those are real."
      />

      <div className="mt-12 grid gap-4">
        <FeatureCard study={featured} />
        <div className="grid gap-4 md:grid-cols-3">
          {rest.map((study) => (
            <StandardCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FeatureCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group grid h-full overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-page transition-colors duration-200 hover:border-accent-core/55 lg:grid-cols-[1fr_1.15fr]">
      <Band className="min-h-[200px] lg:min-h-full" />
      <div className="flex flex-col gap-4 p-7 lg:p-9">
        <SectorTag study={study} />
        <h3 className="text-h2 font-semibold">{study.title}</h3>
        <p className="max-w-[56ch] text-[0.9375rem] text-muted">{study.problem}</p>
        <p className="max-w-[56ch] text-[0.9375rem]">{study.outcome}</p>
        <Result study={study} />
      </div>
    </article>
  );
}

function StandardCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-page transition-[border-color,transform] duration-200 ease-[var(--ease-out-expo)] hover:border-accent-core/55 motion-safe:hover:-translate-y-0.5">
      <Band className="h-[104px]" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* Reserves two lines so a wrapping tag never drops the title off the row baseline. */}
        <SectorTag study={study} className="min-h-[1.925rem]" />
        <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.015em]">
          {study.title}
        </h3>
        <p className="text-sm text-muted">{study.outcome}</p>
        <Result study={study} className="mt-auto" />
      </div>
    </article>
  );
}

/**
 * Stands in for the product screenshot until the client supplies one. A
 * blueprint panel reads as deliberate; a grey box with an image icon reads as
 * unfinished.
 */
function Band({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "blueprint-grid relative border-b border-hairline bg-linear-to-br from-raised to-page [background-size:26px_26px] lg:border-r lg:border-b-0",
        className,
      )}
    />
  );
}

function SectorTag({ study, className }: { study: CaseStudy; className?: string }) {
  return (
    <p className={cn("text-label font-mono tracking-[0.14em] text-accent uppercase", className)}>
      {study.sector} — {study.client}
    </p>
  );
}

function Result({ study, className }: { study: CaseStudy; className?: string }) {
  const pending = study.metric.value === null;

  return (
    <div className={cn("flex items-baseline gap-2.5 border-t border-hairline pt-4", className)}>
      <span
        data-pending={pending ? "" : undefined}
        title={pending ? "Unconfirmed figure — pending client sign-off" : undefined}
        className={cn(
          "tabular font-display text-[1.375rem] font-bold tracking-[-0.02em]",
          pending ? "text-muted opacity-55" : "text-accent",
        )}
      >
        {study.metric.value ?? "TBD"}
      </span>
      <span className="text-sm text-muted">{study.metric.label}</span>
      <ArrowUpRight
        aria-hidden
        className="ml-auto size-4 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
      />
    </div>
  );
}
