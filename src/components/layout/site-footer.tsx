import Link from "next/link";
import { Download } from "lucide-react";
import { capabilities } from "@/content/capabilities";
import { brochure, company, contact, legalNav, nav, site, social, telHref } from "@/content/site";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";

/**
 * Carries the trust payload most agency sites forget: who the company legally
 * is, where it is, and how to reach a person. Fields the client has not yet
 * supplied are omitted rather than filled with plausible text.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="tone-dark text-ink border-t border-white/10 bg-[#050b16]">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-16">
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Sparta Labs home" className="w-fit">
              <Logo variant="wordmark" tone="dark" className="w-[156px]" />
            </Link>
            <p className="text-muted max-w-[34ch] text-sm">{site.tagline}</p>
            <p className="text-label font-label flex flex-wrap items-center gap-2 tracking-[0.18em] text-[#7f93b3] uppercase">
              {site.motto.join(" → ")}
            </p>
            {company.addressLines ? (
              <address className="text-muted text-sm not-italic">
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            ) : company.city ? (
              <address className="text-muted text-sm not-italic">
                {company.city}, {company.region}, {company.country}
              </address>
            ) : null}
          </div>

          <FooterColumn title="What we build">
            {capabilities.map((capability) => (
              <FooterLink key={capability.key} href="/services">
                {capability.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <FooterLink href="/it-services-hyderabad">IT services in Hyderabad</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            {social.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Talk to us">
            <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>
            {contact.phones.map((phone) => (
              <FooterLink key={phone} href={telHref(phone)}>
                {phone}
              </FooterLink>
            ))}
            {contact.whatsapp ? <FooterLink href={contact.whatsapp}>WhatsApp</FooterLink> : null}
            <li>
              <a
                href={brochure.href}
                download={brochure.fileName}
                className="text-muted inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
              >
                <Download aria-hidden className="size-4" />
                {brochure.label}
              </a>
            </li>
            <li className="text-muted pt-1 text-sm">We reply {contact.responseTime}.</li>
          </FooterColumn>
        </div>

        <div className="text-muted flex flex-col gap-3 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.legalName ?? site.name}
            {company.cin ? ` · CIN ${company.cin}` : ""}
            {company.gstin ? ` · GSTIN ${company.gstin}` : ""}
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="text-label font-label tracking-[0.14em] uppercase">{site.domain}</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-label text-accent font-label font-medium tracking-[0.18em] uppercase">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");
  const className = "text-sm text-muted transition-colors duration-200 hover:text-white";

  return (
    <li>
      {external ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}
