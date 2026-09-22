import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getCaseStudy, work } from "@/content/work";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/sections/cta-band";
import { Kicker } from "@/components/ui/kicker";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return work.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: study.title, description: study.outcome };
}

/**
 * One fixed template for every case study. A repeatable structure reads as a
 * track record; a bespoke layout per project reads as a set of one-offs.
 */
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = work.findIndex((item) => item.slug === slug);
  const next = work[(index + 1) % work.length];

  return (
    <>
      <div className="relative overflow-hidden border-b border-hairline">
        <div aria-hidden className="blueprint-grid veil-hero pointer-events-none absolute inset-0" />
        <Container className="relative pt-[8.5rem] pb-14 md:pt-[10rem] md:pb-18">
          <div className="max-w-[52rem]">
            <Kicker>
              {study.sector} — {study.client}
            </Kicker>
            <h1 className="text-h1 mt-5 font-display font-bold">{study.title}</h1>
            <p className="text-lede mt-5 max-w-[60ch] text-muted">{study.outcome}</p>
            <div className="mt-8">
              <Breadcrumbs
                trail={[
                  { label: "Work", href: "/work" },
                  { label: study.title, href: `/work/${study.slug}` },
                ]}
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="border-b border-hairline bg-surface">
        <Container>
          <dl className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {study.facts.map((fact) => (
              <div key={fact.label} className="bg-surface py-6 sm:px-6 sm:first:pl-0 lg:last:pr-0">
                <dt className="text-label font-mono tracking-[0.14em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-[0.9375rem]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>The challenge</Kicker>
          <div className="flex flex-col gap-5">
            {study.challenge.map((paragraph) => (
              <p key={paragraph} className="max-w-[68ch] text-lede">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-hairline bg-surface">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>What we built</Kicker>
          <ol className="grid border-t border-hairline">
            {study.built.map((block, blockIndex) => (
              <li
                key={block.title}
                className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="text-label font-mono tracking-[0.12em] text-accent">
                  {String(blockIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-h3 font-semibold">{block.title}</h2>
                  <p className="mt-2 max-w-[62ch] text-[0.9375rem] text-muted">{block.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>How we worked</Kicker>
          <p className="max-w-[68ch] text-lede">{study.collaboration}</p>
        </div>
      </Section>

      <Section className="border-t border-hairline bg-surface">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>Results</Kicker>
          <ul className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {study.results.map((result) => {
              const pending = result.value === null;
              return (
                <li key={result.label} className="bg-surface p-6">
                  <span
                    data-pending={pending ? "" : undefined}
                    title={pending ? "Unconfirmed figure — pending client sign-off" : undefined}
                    className={cn(
                      "tabular inline-block font-display text-h2 font-bold",
                      pending
                        ? "border-b border-dashed border-hairline-strong text-muted"
                        : "text-accent",
                    )}
                  >
                    {result.value ?? "TBD"}
                  </span>
                  <span className="mt-2.5 block text-sm text-muted">{result.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <div className="border-t border-hairline">
        <Container>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-wrap items-baseline justify-between gap-4 py-10"
          >
            <div>
              <span className="text-label font-mono tracking-[0.14em] text-muted uppercase">
                Next project
              </span>
              <p className="text-h3 mt-2 font-display font-semibold">{next.title}</p>
            </div>
            <ArrowRight
              aria-hidden
              className="size-5 text-muted transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-accent"
            />
          </Link>
        </Container>
      </div>

      <CtaBand />
    </>
  );
}
