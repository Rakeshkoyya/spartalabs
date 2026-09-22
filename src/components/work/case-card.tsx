import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

/**
 * Shared by the home page and the work index. Consistency matters more than
 * variety here: a repeatable card reads as a track record, while a bespoke
 * layout per project reads as a collection of one-offs.
 */
export function FeatureCard({ study }: { study: CaseStudy }) {
  return (
    <article className="before:bg-accent-core group border-hairline bg-page hover:border-accent-core/55 relative h-full overflow-hidden rounded-[var(--radius-card)] border transition-colors duration-200 before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-[var(--ease-out-expo)] before:content-[''] hover:before:scale-x-100">
      <Link href={`/work/${study.slug}`} className="grid h-full lg:grid-cols-[1fr_1.15fr]">
        <Band className="min-h-[200px] lg:min-h-full" />
        <div className="flex flex-col gap-4 p-7 lg:p-9">
          <SectorTag study={study} />
          <h3 className="text-h2 font-semibold">{study.title}</h3>
          <p className="text-muted max-w-[56ch] text-base">{study.problem}</p>
          <p className="max-w-[56ch] text-base">{study.outcome}</p>
          <Result study={study} className="mt-auto" />
        </div>
      </Link>
    </article>
  );
}

export function StandardCard({ study }: { study: CaseStudy }) {
  return (
    <article className="before:bg-accent-core group border-hairline bg-page hover:border-accent-core/55 relative h-full overflow-hidden rounded-[var(--radius-card)] border transition-[border-color,transform] duration-200 ease-[var(--ease-out-expo)] before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-[var(--ease-out-expo)] before:content-[''] hover:before:scale-x-100 motion-safe:hover:-translate-y-0.5">
      <Link href={`/work/${study.slug}`} className="flex h-full flex-col">
        <Band className="h-[104px]" />
        <div className="flex flex-1 flex-col gap-3 p-6">
          {/* Reserves two lines so a wrapping tag never drops the title off the row baseline. */}
          <SectorTag study={study} className="min-h-[1.925rem]" />
          <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.015em]">
            {study.title}
          </h3>
          <p className="text-muted text-[0.9375rem]">{study.outcome}</p>
          <Result study={study} className="mt-auto" />
        </div>
      </Link>
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
        "blueprint-grid border-hairline from-raised to-page relative border-b bg-linear-to-br [background-size:26px_26px] lg:border-b-0",
        className,
      )}
    />
  );
}

function SectorTag({ study, className }: { study: CaseStudy; className?: string }) {
  return (
    <p className={cn("text-label text-accent font-mono tracking-[0.14em] uppercase", className)}>
      {study.sector} — {study.client}
    </p>
  );
}

function Result({ study, className }: { study: CaseStudy; className?: string }) {
  const pending = study.metric.value === null;

  return (
    <div className={cn("border-hairline flex items-baseline gap-2.5 border-t pt-4", className)}>
      <span
        data-pending={pending ? "" : undefined}
        title={pending ? "Unconfirmed figure — pending client sign-off" : undefined}
        className={cn(
          "tabular font-display text-[1.375rem] font-bold tracking-[-0.02em]",
          pending ? "border-hairline-strong text-muted border-b border-dashed" : "text-accent",
        )}
      >
        {study.metric.value ?? "TBD"}
      </span>
      <span className="text-muted text-sm">{study.metric.label}</span>
      <ArrowUpRight
        aria-hidden
        className="text-muted group-hover:text-accent ml-auto size-4 shrink-0 transition-colors duration-200"
      />
    </div>
  );
}
