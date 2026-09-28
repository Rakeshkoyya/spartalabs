import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Testimonials } from "@/components/sections/testimonials";
import { TwoPaths } from "@/components/sections/two-paths";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { WhySparta } from "@/components/sections/why-sparta";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { homeDescription, pageMetadata, seoTitle } from "@/lib/seo";

export const metadata = pageMetadata({
  title: seoTitle,
  description: homeDescription,
  path: "/",
  absoluteTitle: true,
});

/**
 * Hero, numbers, why us, everything we build, who we work with, what clients
 * say, questions, and the call to action.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <Hero />
      <ProofStrip />
      <WhySparta />
      <WhatWeBuild />
      <TwoPaths />
      <Testimonials />
      <FaqSection />
      <CtaBand
        showLogo
        title="Tell us how your business runs. We’ll show you what to build."
        body="30 minutes. No slides. No obligation."
      />
    </>
  );
}
