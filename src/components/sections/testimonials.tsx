import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { getCaseStudy } from "@/content/work";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/**
 * The home page's work section, told by the clients: a quote per project,
 * each linking through to its case study.
 */
export function Testimonials() {
  return (
    <Section id="work" label="What clients say" className="topo">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          index="04"
          kicker="What clients say"
          title="In their words."
          className="flex-1"
        />
        <Link
          href="/work"
          className="text-accent font-display group border-hairline-strong hover:border-accent flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-200"
        >
          See the work
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {testimonials.map((item, index) => {
          const study = getCaseStudy(item.caseSlug);
          const featured = index === 0;
          return (
            <li
              key={item.caseSlug}
              data-lock=""
              style={{ "--m-delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <figure
                className={cn(
                  "spotlight flex h-full flex-col gap-6 rounded-[var(--radius-card)] p-7 sm:p-8",
                  featured
                    ? "tone-dark crest-deep shadow-[0_24px_50px_-24px_rgb(0_40_120/0.6)]"
                    : "card",
                )}
              >
                <Quote
                  aria-hidden
                  className={cn("size-8", featured ? "text-accent-bright" : "text-accent-core")}
                  strokeWidth={1.5}
                />
                <blockquote
                  className={cn(
                    "font-display text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-snug font-medium tracking-[-0.01em]",
                    featured && "text-white",
                  )}
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="border-hairline-strong mt-auto flex flex-wrap items-end justify-between gap-3 border-t pt-5">
                  <span>
                    <span className={cn("block font-semibold", featured && "text-white")}>
                      {item.role}
                    </span>
                    <span className="text-muted block text-sm">{item.organisation}</span>
                  </span>
                  {study ? (
                    <Link
                      href={`/work#${study.slug}`}
                      className={cn(
                        "group inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold",
                        featured ? "text-accent-bright" : "text-accent",
                      )}
                    >
                      {study.shortTitle}
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  ) : null}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
