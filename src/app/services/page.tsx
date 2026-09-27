import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { capabilities } from "@/content/capabilities";
import { engagementModels } from "@/content/engagement";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { capabilityIcons, IconBox } from "@/components/brand/icons";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMetadata({
  title: "Software, Web, App & AI Development Services",
  description:
    "Custom business platforms, website and mobile app development, AI solutions and automation, brand and concept, and ongoing support from Sparta Labs, an IT services company in Hyderabad.",
  path: "/services",
});

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
        <ul className="border-hairline grid border-t">
          {capabilities.map((capability) => (
            <li
              key={capability.title}
              className="border-hairline grid gap-5 border-b py-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16"
            >
              <div>
                <IconBox icon={capabilityIcons[capability.key]} className="mb-4" />
                <h2 className="text-h3 font-semibold">{capability.title}</h2>
              </div>
              <div>
                <p className="text-lede text-muted max-w-[60ch]">{capability.outcome}</p>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5 text-sm">
                      <span
                        aria-hidden
                        className="bg-accent-core h-px w-3 shrink-0 translate-y-[-0.3em]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-hairline bg-surface border-t">
        <SectionHeader
          kicker="Engagement"
          title="Three ways to work with us."
          lede="Which one fits is a question we answer after discovery, not before. Picking it up front is how projects end up scoped to the model rather than to the problem."
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <li key={model.name}>
              <div className="border-hairline bg-page flex h-full flex-col gap-4 rounded-[var(--radius-card)] border p-6">
                <h3 className="text-h3 font-semibold">{model.name}</h3>
                <p className="text-muted text-base">{model.fitsWhen}</p>
                <p className="text-base">{model.pricing}</p>
                <ul className="border-hairline mt-auto flex flex-col gap-1.5 border-t pt-4">
                  {model.includes.map((item) => (
                    <li key={item} className="text-muted text-sm">
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
