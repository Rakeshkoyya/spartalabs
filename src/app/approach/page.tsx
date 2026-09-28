import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { principles, processSteps } from "@/content/process";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { StageTimeline } from "@/components/approach/stage-timeline";

export const metadata: Metadata = pageMetadata({
  title: "How We Work — Discover, Build, Launch — Sparta Labs",
  description:
    "Five stages, two-week sprints and a live demo every week. See exactly how a Sparta Labs project runs from discovery to support.",
  path: "/approach",
  absoluteTitle: true,
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        kicker="Approach"
        title="Most software asks your business to change. We build it the other way round."
        lede="Five stages. You always know what’s happening, what’s next and what it costs."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Approach", href: "/approach" }]} />
        </div>
      </PageHero>

      <Section className="topo">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              kicker="The five stages"
              title="In this order, on every project."
              lede="Each stage ends with something you can hold, and says what we need from you."
            />
            <ol className="hidden flex-wrap gap-2 lg:flex">
              {processSteps.map((step) => (
                <li
                  key={step.id}
                  className="border-hairline-strong bg-surface font-display rounded-full border px-3.5 py-1.5 text-sm font-medium"
                >
                  <span className="text-accent mr-1.5 font-mono text-[0.75rem]">{step.id}</span>
                  {step.title}
                </li>
              ))}
            </ol>
          </div>
          <StageTimeline steps={processSteps} />
        </div>
      </Section>

      <Section tone="navy" flow>
        <SectionHeader kicker="How we work" title="Four rules we don’t bend." />
        <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <li key={principle.title} className="border-hairline-strong border-t py-6">
              <h3 className="font-display text-[1.25rem] font-semibold tracking-[-0.015em]">
                {principle.title}
              </h3>
              <p className="text-muted mt-2 text-[0.9375rem]">{principle.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Link
          href="/agencies"
          className="card group flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8"
        >
          <p className="font-display text-lg font-medium">
            <span className="text-accent">For agencies:</span> same process, white-labelled. Demos
            come to you first.
          </p>
          <ArrowRight
            aria-hidden
            className="text-accent size-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </Section>

      <CtaBand />
    </>
  );
}
