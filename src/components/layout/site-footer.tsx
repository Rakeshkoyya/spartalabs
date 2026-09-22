import { capabilities } from "@/content/capabilities";
import { company, contact, nav, site, social } from "@/content/site";
import { ChevronMark } from "@/components/ui/chevron-mark";
import { Container } from "@/components/ui/container";

/**
 * Carries the trust payload most agency sites forget: who the company legally
 * is, where it is, and how to reach a person. Fields the client has not yet
 * supplied are omitted rather than filled with plausible text.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="flex items-center gap-2.5 font-display text-base font-bold tracking-[-0.02em]">
              <ChevronMark className="text-accent-core" />
              {site.name}
            </span>
            <p className="max-w-[34ch] text-sm text-muted">{site.tagline}</p>
            {company.addressLines ? (
              <address className="text-sm text-muted not-italic">
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            ) : null}
          </div>

          <FooterColumn title="What we build">
            {capabilities.map((capability) => (
              <FooterLink key={capability.title} href="#capabilities">
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
            {social.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Talk to us">
            <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>
            {contact.phone ? (
              <FooterLink href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
                {contact.phone}
              </FooterLink>
            ) : null}
            {contact.whatsapp ? <FooterLink href={contact.whatsapp}>WhatsApp</FooterLink> : null}
            <li className="pt-1 text-sm text-muted">We reply {contact.responseTime}.</li>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 border-t border-hairline py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.legalName ?? site.name}
            {company.cin ? ` · CIN ${company.cin}` : ""}
            {company.gstin ? ` · GSTIN ${company.gstin}` : ""}
          </p>
          <p className="text-label font-mono tracking-[0.14em] uppercase">{site.domain}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-label font-mono font-medium tracking-[0.15em] text-muted uppercase">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm text-muted transition-colors duration-200 hover:text-accent">
        {children}
      </a>
    </li>
  );
}
