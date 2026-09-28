import type { Metadata } from "next";
import { CalendarCheck, Download } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { audiences } from "@/lib/contact-schema";
import { brochure, contact, telHref } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { Kicker } from "@/components/ui/kicker";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "Contact Sparta Labs — Book a Discovery Call",
  description:
    "Tell us how your business runs. We reply within one working day and book a 30-minute call if we're a fit.",
  path: "/contact",
  absoluteTitle: true,
});

const linkClass = "hover:text-accent text-base transition-colors";

/** `?as=agency` (from the agencies page) preselects the agency option. */
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ as?: string }>;
}) {
  const { as } = await searchParams;
  const defaultAudience = as === "agency" ? audiences[1] : audiences[0];

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us how your business runs."
        lede="We reply within one working day. If we’re not the right fit, we’ll say so."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Contact", href: "/contact" }]} />
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-16">
          <ContactForm defaultAudience={defaultAudience} />

          <aside className="flex flex-col gap-8">
            {contact.bookingUrl ? (
              <div>
                <Kicker>Skip the form</Kicker>
                <Button href={contact.bookingUrl} size="sm" className="mt-4">
                  <CalendarCheck aria-hidden className="size-4" />
                  Book a call
                </Button>
              </div>
            ) : null}

            <div>
              <Kicker>Direct</Kicker>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a href={`mailto:${contact.email}`} className={linkClass}>
                    {contact.email}
                  </a>
                </li>
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a href={telHref(phone)} className={linkClass}>
                      {phone}
                    </a>
                  </li>
                ))}
                {contact.whatsapp ? (
                  <li>
                    <a href={contact.whatsapp} className={linkClass}>
                      WhatsApp
                    </a>
                  </li>
                ) : null}
              </ul>
              {contact.workingHours ? (
                <p className="text-muted mt-4 text-sm">{contact.workingHours}</p>
              ) : null}
            </div>

            <div className="border-hairline border-t pt-8">
              <Kicker>Brochure</Kicker>
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
          </aside>
        </div>
      </Section>
    </>
  );
}
