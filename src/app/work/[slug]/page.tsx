import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getCaseStudy, work } from "@/content/work";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FlowLines } from "@/components/brand/flow-lines";
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
  return pageMetadata({
    title: `${study.title} (${study.sector} case study)`,
    description: study.outcome,
    path: `/work/${study.slug}`,
  });
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
      <div className="band-dark relative overflow-hidden">
        <FlowLines className="bottom-0 h-[55%] min-h-48" />
        <Container className="relative pt-[8.5rem] pb-14 md:pt-[10rem] md:pb-18">
          <div className="max-w-[52rem]">
            <Kicker>
              {study.sector} — {study.client}
            </Kicker>
            <h1 className="text-h1 font-display mt-5 font-semibold text-white">{study.title}</h1>
            <p className="text-lede text-muted mt-5 max-w-[60ch]">{study.outcome}</p>
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

      <div className="border-hairline bg-surface border-b">
        <Container>
          <dl className="bg-hairline grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {study.facts.map((fact) => (
              <div key={fact.label} className="bg-surface py-6 sm:px-6 sm:first:pl-0 lg:last:pr-0">
                <dt className="text-label text-muted font-label tracking-[0.14em] uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-base">{fact.value}</dd>
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
              <p key={paragraph} className="text-lede max-w-[68ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-hairline bg-surface border-y">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>What we built</Kicker>
          <ol className="border-hairline grid border-t">
            {study.built.map((block, blockIndex) => (
              <li
                key={block.title}
                className="border-hairline grid gap-2 border-b py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="text-label text-accent font-label tracking-[0.12em]">
                  {String(blockIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-h3 font-semibold">{block.title}</h2>
                  <p className="text-muted mt-2 max-w-[62ch] text-base">{block.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>How we worked</Kicker>
          <p className="text-lede max-w-[68ch]">{study.collaboration}</p>
        </div>
      </Section>

      <Section className="border-hairline bg-surface border-t">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>Results</Kicker>
          <ul className="bg-hairline grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {study.results.map((result) => {
              const pending = result.value === null;
              return (
                <li key={result.label} className="bg-surface p-6">
                  <span
                    data-pending={pending ? "" : undefined}
                    title={pending ? "Unconfirmed figure — pending client sign-off" : undefined}
                    className={cn(
                      "tabular font-display text-h2 inline-block font-bold",
                      pending
                        ? "border-hairline-strong text-muted border-b border-dashed"
                        : "text-accent",
                    )}
                  >
                    {result.value ?? "TBD"}
                  </span>
                  <span className="text-muted mt-2.5 block text-sm">{result.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <div className="border-hairline border-t">
        <Container>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-wrap items-baseline justify-between gap-4 py-10"
          >
            <div>
              <span className="text-label text-muted font-label tracking-[0.14em] uppercase">
                Next project
              </span>
              <p className="text-h3 font-display mt-2 font-semibold">{next.title}</p>
            </div>
            <ArrowRight
              aria-hidden
              className="text-muted group-hover:text-accent size-5 transition-[color,transform] duration-200 group-hover:translate-x-1"
            />
          </Link>
        </Container>
      </div>

      <CtaBand />
    </>
  );
}
