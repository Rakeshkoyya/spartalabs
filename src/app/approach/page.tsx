import type { Metadata } from "next";
import { engagementModels, sprintShape } from "@/content/engagement";
import { guarantees, processSteps, whatWeNeed } from "@/content/process";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { Kicker } from "@/components/ui/kicker";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How an engagement runs: five stages, a named lead, two-week sprints, a working demo every Friday, and three ways to work with us.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        kicker="How we work"
        title="You will always know where your project is."
        lede="Projects rarely fail on capability. They fail because some layer had no owner and the gap only became visible at the point it was expensive. Everything below exists to stop that."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Approach", href: "/approach" }]} />
        </div>
      </PageHero>

      <Section>
        <SectionHeader
          kicker="The five stages"
          title="In this order, on every engagement."
          lede="The numbering is not decoration — each stage gates the next, and skipping one only moves the cost later."
        />
        <ol className="mt-12 grid border-t border-hairline">
          {processSteps.map((step) => (
            <li
              key={step.id}
              className="grid gap-3 border-b border-hairline py-8 sm:grid-cols-[4rem_minmax(0,14rem)_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="text-label font-mono tracking-[0.12em] text-accent">{step.id}</span>
              <h2 className="text-h3 font-semibold">{step.title}</h2>
              <p className="max-w-[62ch] text-[0.9375rem] text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-y border-hairline bg-surface">
        <SectionHeader kicker="What you get, in writing" title="Three commitments." />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {guarantees.map((guarantee) => (
            <li key={guarantee.title}>
              <div className="h-full rounded-[var(--radius-card)] border border-hairline bg-page p-6">
                <h3 className="text-h3 font-semibold">{guarantee.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] text-muted">{guarantee.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <Kicker>A fortnight</Kicker>
            <h2 className="text-h2 mt-4 font-semibold">What a sprint actually looks like.</h2>
            <p className="mt-4 max-w-[46ch] text-[0.9375rem] text-muted">
              &ldquo;Agile&rdquo; on its own tells a buyer nothing. This is the shape of every two
              weeks you will spend with us.
            </p>
          </div>
          <ol className="grid border-t border-hairline">
            {sprintShape.map((day) => (
              <li
                key={day.label}
                className="grid gap-1.5 border-b border-hairline py-5 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-8"
              >
                <span className="text-label font-mono tracking-[0.12em] text-accent uppercase">
                  {day.label}
                </span>
                <p className="max-w-[62ch] text-[0.9375rem] text-muted">{day.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-y border-hairline bg-surface">
        <SectionHeader
          kicker="Engagement models"
          title="Three ways to work with us."
          lede="Which one fits is answered after discovery. Choosing up front is how a project ends up scoped to the model rather than to the problem."
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <li key={model.name}>
              <div className="flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-hairline bg-page p-6">
                <h3 className="text-h3 font-semibold">{model.name}</h3>
                <p className="text-[0.9375rem] text-muted">{model.fitsWhen}</p>
                <p className="text-[0.9375rem]">{model.pricing}</p>
                <ul className="mt-auto flex flex-col gap-1.5 border-t border-hairline pt-4">
                  {model.includes.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          kicker="The other half"
          title="What we need from you."
          lede="Stated plainly, because the engagements that go wrong are almost always the ones where these were assumed rather than agreed."
        />
        <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {whatWeNeed.map((item) => (
            <li key={item.title} className="border-b border-hairline py-5 first:border-t sm:[&:nth-child(2)]:border-t">
              <h3 className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[52ch] text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
