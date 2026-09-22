import { Approach } from "@/components/sections/approach";
import { Capabilities } from "@/components/sections/capabilities";
import { ConnectedSystem } from "@/components/sections/connected-system";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { Pods } from "@/components/sections/pods";
import { Problem } from "@/components/sections/problem";
import { Process } from "@/components/sections/process";
import { SelectedWork } from "@/components/sections/selected-work";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/content/site";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { pageMetadata, seoTitle } from "@/lib/seo";

export const metadata = pageMetadata({
  title: seoTitle,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

/** Follows the brochure's running order, alternating paper and navy spreads. */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema()]} />
      <Hero />
      <Problem />
      <Approach />
      <Capabilities />
      <ConnectedSystem />
      <SelectedWork />
      <Process />
      <Pods />
      <FaqSection />
      <CtaBand showLogo />
    </>
  );
}
