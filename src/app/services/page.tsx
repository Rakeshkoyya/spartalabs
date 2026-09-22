import type { Metadata } from "next";
import { capabilities } from "@/content/capabilities";
import { engagementModels } from "@/content/engagement";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ChevronMark } from "@/components/ui/chevron-mark";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom platforms, web and mobile products, AI systems, brand and concept development, and ongoing operation — built by a dedicated specialist pod.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What we build"
        title="Six things, done properly."
        lede="Described by what each one does for your organisation. The technologies underneath are our problem to get right, not yours to choose from a list."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Services", href: "/services" }]} />
        </div>
      </PageHero>

      <Section>
        <ul className="grid border-t border-hairline">
          {capabilities.map((capability) => (
            <li
              key={capability.title}
              className="grid gap-5 border-b border-hairline py-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16"
            >
              <div>
                <ChevronMark className="mb-3 text-accent-core" />
                <h2 className="text-h3 font-semibold">{capability.title}</h2>
              </div>
              <div>
                <p className="max-w-[60ch] text-lede text-muted">{capability.outcome}</p>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5 text-sm">
                      <span aria-hidden className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-accent-core" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-hairline bg-surface">
        <SectionHeader
          kicker="Engagement"
          title="Three ways to work with us."
          lede="Which one fits is a question we answer after discovery, not before. Picking it up front is how projects end up scoped to the model rather than to the problem."
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
        <div className="mt-10">
          <Button href="/approach" variant="secondary">
            How an engagement runs
          </Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
