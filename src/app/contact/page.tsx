import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Download } from "lucide-react";
import { brochure, company, contact, telHref } from "@/content/site";
import { Button } from "@/components/ui/button";
import { faq } from "@/content/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { Kicker } from "@/components/ui/kicker";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Book a discovery call with Sparta Labs, Hyderabad, for custom software, website, mobile app or AI automation work. Email hello@spartalabs.in — we reply within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Start here"
        title="One call. No deck."
        lede="Describe the problem and we will tell you whether we are the right people for it. If we are not, we will say so and point you at who is."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Contact", href: "/contact" }]} />
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
          <ContactForm />

          <aside className="flex flex-col gap-8">
            <div>
              <Kicker>Direct</Kicker>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-accent text-base transition-colors"
                  >
                    {contact.email}
                  </a>
                </li>
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={telHref(phone)}
                      className="hover:text-accent text-base transition-colors"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
                {contact.whatsapp ? (
                  <li>
                    <a
                      href={contact.whatsapp}
                      className="hover:text-accent text-base transition-colors"
                    >
                      WhatsApp
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>

            <div>
              <Kicker>Brochure</Kicker>
              <p className="text-muted mt-4 text-sm">
                What we build and how we work, in one document to share with your team.
              </p>
              <Button
                href={brochure.href}
                download={brochure.fileName}
                variant="secondary"
                size="sm"
                className="mt-4"
              >
                <Download aria-hidden className="size-4" />
                {brochure.label}
              </Button>
              <p className="text-label font-label text-muted mt-2 tracking-[0.14em] uppercase">
                {brochure.meta}
              </p>
            </div>

            {company.addressLines ? (
              <div>
                <Kicker>Office</Kicker>
                <address className="text-muted mt-4 text-base not-italic">
                  {company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ) : null}

            <div className="border-hairline border-t pt-8">
              <Kicker>Before you write</Kicker>
              <dl className="mt-4 flex flex-col gap-5">
                {faq.slice(0, 3).map((item) => (
                  <div key={item.question}>
                    <dt className="text-base font-medium">{item.question}</dt>
                    <dd className="text-muted mt-1.5 text-sm">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
