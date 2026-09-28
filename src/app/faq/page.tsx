import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { FaqTabs } from "@/components/faq/faq-tabs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "FAQ — Sparta Labs",
  description:
    "Cost, timelines, code ownership and white-label work: straight answers to what people ask before a discovery call.",
  path: "/faq",
  absoluteTitle: true,
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <PageHero
        kicker="FAQ"
        title="Straight answers."
        lede="What people ask before a discovery call."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "FAQ", href: "/faq" }]} />
        </div>
      </PageHero>

      <Section className="topo">
        <div className="max-w-[52rem]">
          <FaqTabs />
        </div>
      </Section>

      <CtaBand
        kicker="Still wondering?"
        title="Ask us on a call."
        body="30 minutes. No slides. No obligation."
      />
    </>
  );
}
