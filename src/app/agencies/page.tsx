import type { Metadata } from "next";
import { ArrowDown, CalendarCheck, Check, EyeOff } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { agencyBuilds, agencySteps, partnerPromises, waysToWork } from "@/content/agencies";
import { partnerCta } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { IconBox } from "@/components/brand/icons";

export const metadata: Metadata = pageMetadata({
  title: "White-Label Development Partner for Agencies — Sparta Labs",
  description:
    "Offer websites, apps and AI automations under your brand. NDA, no client contact, fixed quotes and full code handover. Start with one small project.",
  path: "/agencies",
  absoluteTitle: true,
});

/** Answers the four fears: quality, communication, being cut out, and ownership. */
export default function AgenciesPage() {
  return (
    <>
      <PageHero
        kicker="For agencies"
        title="Your client asked for software. Say yes."
        lede="We build it under your brand. You keep the client and the margin."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={partnerCta.href}>
            <CalendarCheck aria-hidden className="size-4.5" />
            {partnerCta.label}
          </Button>
          <Button href="#process" variant="secondary">
            See the process
            <ArrowDown aria-hidden className="size-4" />
          </Button>
        </div>
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "For agencies", href: "/agencies" }]} />
        </div>
      </PageHero>

      <Section className="topo">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            kicker="What we build for you"
            title="Everything your clients ask for. Built under your name."
            className="flex-1"
          />
          <p className="text-muted flex max-w-[22rem] items-start gap-2.5 text-sm">
            <EyeOff aria-hidden className="text-accent-core mt-0.5 size-4 shrink-0" />
            Every build is unbranded: no Sparta Labs name in the product, the code or the emails.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agencyBuilds.map((build, index) => (
            <li
              key={build.title}
              data-lock=""
              style={{ "--m-delay": `${(index % 3) * 70}ms` } as React.CSSProperties}
            >
              <article className="card spotlight group flex h-full flex-col gap-4 p-6 transition-transform duration-300 ease-[var(--ease-out-expo)] motion-safe:hover:-translate-y-1 sm:p-7">
                <div className="flex items-start justify-between">
                  <IconBox icon={build.icon} />
                  <span className="text-muted font-mono text-[0.8125rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-h3 font-display font-semibold tracking-[-0.015em]">
                  {build.title}
                </h3>
                <p className="text-muted text-[0.9375rem]">{build.body}</p>
                <ul className="border-hairline mt-auto flex flex-wrap gap-1.5 border-t border-dashed pt-4">
                  {build.examples.map((example) => (
                    <li
                      key={example}
                      className="bg-accent-wash text-accent-wash-ink rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="process" className="border-hairline bg-surface border-y">
        <SectionHeader kicker="How it works" title="Five steps. Your name on all of them." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {agencySteps.map((step, index) => (
            <li
              key={step.title}
              data-lock=""
              style={{ "--m-delay": `${index * 70}ms` } as React.CSSProperties}
              className="border-hairline bg-page flex flex-col gap-3 rounded-[var(--radius-card)] border p-5"
            >
              <span className="text-accent font-mono text-[0.8125rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              <p className="text-muted text-sm">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy" flow>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <SectionHeader
            kicker="Our promises to partners"
            title="In writing, before you share a brief."
          />
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {partnerPromises.map((promise) => (
              <li
                key={promise}
                className="border-hairline-strong flex items-start gap-3 border-t py-5"
              >
                <Check aria-hidden className="text-accent-bright mt-0.5 size-5 shrink-0" />
                <span className="text-base">{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader kicker="Ways to work" title="Three ways to work with us." />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {waysToWork.map((way) => (
            <li key={way.title} className="card p-6">
              <h3 className="text-h3 font-semibold">{way.title}</h3>
              <p className="text-muted mt-2 text-base">{way.body}</p>
            </li>
          ))}
        </ul>
        <p className="font-display mt-10 text-lg font-medium">
          <span className="text-accent">Start small.</span> Try us on one small paid project before
          anything bigger.
        </p>
      </Section>

      <CtaBand
        kicker="Partner with us"
        title="Add software to your services without hiring developers."
        body="One call to see if we fit your agency."
        cta={partnerCta}
      />
    </>
  );
}
