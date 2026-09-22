import type { Metadata } from "next";
import { company, contact } from "@/content/site";
import { faq } from "@/content/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { Kicker } from "@/components/ui/kicker";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what is not working. One call, no deck — and if we are not the right people for it, we will say so.",
};

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
              <Kicker rule={false}>Direct</Kicker>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-accent text-base transition-colors"
                  >
                    {contact.email}
                  </a>
                </li>
                {contact.phone ? (
                  <li>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="hover:text-accent text-base transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </li>
                ) : null}
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

            {company.addressLines ? (
              <div>
                <Kicker rule={false}>Office</Kicker>
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
              <Kicker rule={false}>Before you write</Kicker>
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
