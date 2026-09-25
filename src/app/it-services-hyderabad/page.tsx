import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck, MapPin } from "lucide-react";
import { capabilities } from "@/content/capabilities";
import { hyderabadFaq, reliabilityPoints } from "@/content/hyderabad";
import { industries } from "@/content/industries";
import { contact, telHref } from "@/content/site";
import { capabilityIcons, IconBox, industryIcons } from "@/components/brand/icons";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { localServicesSchema } from "@/lib/schema";
import { pageMetadata, serviceArea } from "@/lib/seo";

const path = "/it-services-hyderabad";

export const metadata: Metadata = pageMetadata({
  title: "IT Services Company in Hyderabad | Sparta Labs",
  absoluteTitle: true,
  description:
    "Sparta Labs is a reliable IT services company in Hyderabad. Custom software, website and mobile app development, AI and automation for businesses across Hyderabad and Secunderabad. Book a free discovery call.",
  path,
});

/**
 * The local landing page. Business owners search by city ("IT company in
 * Hyderabad"), so this page answers that intent directly and links into the
 * rest of the site.
 */
export default function HyderabadPage() {
  return (
    <>
      <JsonLd
        data={[
          localServicesSchema(path),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: hyderabadFaq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />

      <PageHero
        kicker="IT services · Hyderabad"
        title="A reliable IT services company in Hyderabad."
        lede="Sparta Labs designs, builds and supports the software Hyderabad businesses run on: custom platforms, websites, mobile apps, AI and automation. We start by understanding how your business works, then build the system to fit it."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">
            Book a free discovery call
            <ArrowRight aria-hidden className="size-4" />
          </Button>
          {contact.phones[0] ? (
            <Button href={telHref(contact.phones[0])} variant="secondary">
              Call {contact.phones[0]}
            </Button>
          ) : null}
        </div>
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "IT services in Hyderabad", href: path }]} />
        </div>
      </PageHero>

      <Section className="topo">
        <SectionHeader
          kicker="What we do"
          title="IT services for Hyderabad businesses, from one team."
          lede="One partner for the whole system, so your website, app and back-office software share the same data instead of fighting each other."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <li key={capability.key} className="card flex flex-col p-6">
              <IconBox icon={capabilityIcons[capability.key]} />
              <h2 className="text-h3 mt-5 font-semibold">
                {capability.title}
                <span className="sr-only"> in Hyderabad</span>
              </h2>
              <p className="text-muted mt-2 text-[0.9375rem]">{capability.outcome}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {capability.items.map((item) => (
                  <li
                    key={item}
                    className="bg-accent-wash text-accent-wash-ink rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="text-accent font-display mt-8 inline-flex items-center gap-1.5 font-semibold hover:underline"
        >
          See every service in detail <ArrowRight aria-hidden className="size-4" />
        </Link>
      </Section>

      <Section tone="navy" flow>
        <SectionHeader
          kicker="Why Sparta Labs"
          title="Why Hyderabad businesses trust us with the systems they depend on."
          lede="Reliability is not a claim on a website. It is a set of promises you can hold us to, written into every engagement."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reliabilityPoints.map((point) => (
            <li key={point.title} className="glass p-5">
              <span className="font-display flex items-start gap-2 font-semibold text-white">
                <CircleCheck aria-hidden className="text-accent mt-0.5 size-4.5 shrink-0" />
                {point.title}
              </span>
              <p className="text-muted mt-2 text-sm">{point.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              kicker="Where we work"
              title="Across Hyderabad and Secunderabad."
              lede="We are based in Hyderabad, Telangana, and meet clients on site for discovery. Remote delivery covers the rest of India and abroad."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {serviceArea.localities.map((locality) => (
                <li
                  key={locality}
                  className="border-hairline bg-surface text-ink inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm"
                >
                  <MapPin aria-hidden className="text-accent size-3.5" />
                  {locality}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader kicker="Industries" title="Sectors we have delivered for." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => {
                const Icon = industryIcons[industry.name];
                return (
                  <li key={industry.name} className="card p-5">
                    <span className="font-display flex items-center gap-2 font-semibold">
                      {Icon ? <Icon aria-hidden className="text-accent-core size-4.5" /> : null}
                      {industry.name}
                    </span>
                    <p className="text-muted mt-1.5 text-sm">{industry.proof}</p>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/work"
              className="text-accent font-display mt-6 inline-flex items-center gap-1.5 font-semibold hover:underline"
            >
              See our work <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader kicker="Questions" title="IT services in Hyderabad: common questions." />
        <dl className="mt-10 grid gap-4 md:grid-cols-2">
          {hyderabadFaq.map((item) => (
            <div key={item.question} className="card p-6">
              <dt className="font-display text-lg font-semibold">{item.question}</dt>
              <dd className="text-muted mt-2 text-[0.9375rem]">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand
        kicker="Hyderabad"
        title="Let’s map your business."
        body="Tell us how your business runs today and we will show you what it could look like with the right system behind it. Free first call, in person in Hyderabad or online."
      />
    </>
  );
}
