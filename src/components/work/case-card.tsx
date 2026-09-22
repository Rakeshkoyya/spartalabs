import Link from "next/link";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import type { CaseStudy } from "@/content/work";
import { industryIcons } from "@/components/brand/icons";
import { cn } from "@/lib/utils";

/**
 * Shared by the home page and the work index, and set like brochure page six:
 * the featured system on the crest gradient, the rest on white cards. A
 * repeatable card reads as a track record; a bespoke layout per project reads
 * as a collection of one-offs.
 */
export function FeatureCard({ study }: { study: CaseStudy }) {
  return (
    <article className="tone-dark crest-deep group relative h-full overflow-hidden rounded-[var(--radius-card)] shadow-[0_30px_60px_-30px_rgb(0_40_120/0.7)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_90%_at_100%_0%,rgb(0_139_254/0.45),transparent_60%)]"
      />
      <Link
        href={`/work/${study.slug}`}
        className="relative grid h-full gap-8 p-7 lg:grid-cols-[1.2fr_1fr] lg:p-9"
      >
        <div className="flex flex-col gap-4">
          <SectorPill study={study} solid />
          <h3 className="text-h2 font-semibold text-white">{study.title}</h3>
          <Labelled label="The challenge">{study.problem}</Labelled>
          <Labelled label="The outcome">{study.outcome}</Labelled>
          <Outcome study={study} className="mt-auto" />
        </div>
        <ul className="flex flex-col gap-3 self-start">
          {study.built.slice(0, 3).map((block) => (
            <li key={block.title} className="glass p-4">
              <span className="font-display block font-semibold text-white">{block.title}</span>
              <span className="text-muted mt-1 line-clamp-2 block text-sm">{block.body}</span>
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}

export function StandardCard({ study }: { study: CaseStudy }) {
  return (
    <article className="card group hover:border-accent/45 relative h-full overflow-hidden transition-[border-color,transform,box-shadow] duration-200 ease-[var(--ease-out-expo)] hover:shadow-[var(--shadow-lift)] motion-safe:hover:-translate-y-1">
      <Link href={`/work/${study.slug}`} className="flex h-full flex-col gap-3 p-6">
        <SectorPill study={study} />
        <h3 className="font-display group-hover:text-accent text-[1.25rem] font-semibold tracking-[-0.015em] transition-colors">
          {study.title}
        </h3>
        <Labelled label="The challenge">{study.problem}</Labelled>
        <Outcome study={study} className="mt-auto" />
      </Link>
    </article>
  );
}

function SectorPill({ study, solid = false }: { study: CaseStudy; solid?: boolean }) {
  const Icon = industryIcons[study.sector];
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium",
        solid ? "text-navy-950 bg-white" : "border-hairline text-ink border",
      )}
    >
      {Icon ? <Icon aria-hidden className="size-4" strokeWidth={1.75} /> : null}
      {study.sector}
      <span className="sr-only"> — {study.client}</span>
    </span>
  );
}

function Labelled({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-label text-accent font-label font-semibold tracking-[0.16em] uppercase">
        {label}
      </p>
      <p className="text-muted mt-1 text-[0.9375rem]">{children}</p>
    </div>
  );
}

/**
 * A confirmed figure leads when there is one; until then the card closes on
 * the delivered state rather than a placeholder number.
 */
function Outcome({ study, className }: { study: CaseStudy; className?: string }) {
  const value = study.metric.value;
  return (
    <div
      className={cn(
        "border-hairline flex items-center gap-2.5 border-t border-dashed pt-4",
        className,
      )}
    >
      {value ? (
        <>
          <span className="tabular font-display text-accent text-[1.375rem] font-semibold tracking-[-0.02em]">
            {value}
          </span>
          <span className="text-muted text-sm">{study.metric.label}</span>
        </>
      ) : (
        <>
          <CircleCheck aria-hidden className="text-accent size-4.5 shrink-0" />
          <span className="text-ink text-sm font-medium">{study.client}</span>
        </>
      )}
      <ArrowUpRight
        aria-hidden
        className="text-muted group-hover:text-accent ml-auto size-4 shrink-0 transition-colors duration-200"
      />
    </div>
  );
}
