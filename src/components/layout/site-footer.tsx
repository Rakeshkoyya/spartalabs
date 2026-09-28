import Link from "next/link";
import { Download } from "lucide-react";
import { footerServices } from "@/content/services";
import { insightsLive } from "@/content/insights";
import { brochure, company, contact, legalNav, site, social, telHref } from "@/content/site";
import { Container } from "@/components/ui/container";

const FIRST_YEAR = 2025;

const companyLinks = [
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "For agencies", href: "/agencies" },
  { label: "FAQ", href: "/faq" },
  ...(insightsLive ? [{ label: "Insights", href: "/insights" }] : []),
  { label: "Careers", href: "/careers" },
];

/**
 * Brand line, then Services · Company · Contact, with the legal links in the
 * bottom bar — docs/SITE-BLUEPRINT.md §3. Fields the client has not yet
 * supplied are omitted rather than filled with plausible text.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  const years = year > FIRST_YEAR ? `${FIRST_YEAR}–${year}` : String(FIRST_YEAR);

  return (
    <footer className="band-tint text-ink border-hairline border-t">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-16">
          <div className="flex flex-col gap-4">
            <p className="font-display max-w-[24ch] text-lg font-semibold">{site.tagline}</p>
            <p className="text-muted max-w-[30ch] text-sm">{site.spartanLine}</p>
          </div>

          <FooterColumn title="Services">
            {footerServices.map((service) => (
              <FooterLink key={service} href="/services">
                {service}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>
            {contact.phones.map((phone) => (
              <FooterLink key={phone} href={telHref(phone)}>
                {phone}
              </FooterLink>
            ))}
            {contact.whatsapp ? <FooterLink href={contact.whatsapp}>WhatsApp</FooterLink> : null}
            {contact.linkedin ? <FooterLink href={contact.linkedin}>LinkedIn</FooterLink> : null}
            {social.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <li>
              <a
                href={brochure.href}
                download={brochure.fileName}
                className="text-muted hover:text-ink inline-flex min-h-6 items-center gap-2 text-sm transition-colors duration-200"
              >
                <Download aria-hidden className="size-4" />
                Brochure (PDF)
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="text-muted border-hairline flex flex-col gap-3 border-t py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {years} {company.legalName ?? site.name}
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
      {/* The sign-off: the name set large, bold and solid, spanning the page width. */}
      <div aria-hidden className="overflow-clip">
        {/* Bottom padding in em keeps the "p" descender clear at every size. */}
        <p className="font-display text-ink pb-[0.22em] text-center text-[clamp(3.5rem,16vw,15rem)] leading-[0.95] font-bold tracking-[-0.05em] whitespace-nowrap select-none">
          Sparta Labs
        </p>
      </div>
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
  const className = "text-sm text-muted transition-colors duration-200 hover:text-ink";

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
