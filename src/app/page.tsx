import { Capabilities } from "@/components/sections/capabilities";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { Pods } from "@/components/sections/pods";
import { Process } from "@/components/sections/process";
import { SelectedWork } from "@/components/sections/selected-work";
import { TrustStrip } from "@/components/sections/trust-strip";
import { JsonLd } from "@/components/json-ld";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema()]} />
      <Hero />
      <TrustStrip />
      <Capabilities />
      <SelectedWork />
      <Process />
      <Pods />
      <Industries />
      <FaqSection />
      <CtaBand />
    </>
  );
}
