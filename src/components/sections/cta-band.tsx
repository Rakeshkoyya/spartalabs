import Image from "next/image";
import { CalendarCheck, Download, Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { brochure, contact, serviceLines, site, telHref } from "@/content/site";
import { FlowLines } from "@/components/brand/flow-lines";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

/**
 * Closing band, shared by every page, set like the brochure's back cover.
 * Some buyers will never fill in a form, so the direct routes sit beside the
 * primary action rather than only in the footer.
 */
export function CtaBand({
  kicker = "Start here",
  title = "Let’s map your business.",
  body = "Tell us how your business runs today. We will show you what it could look like with the right system behind it.",
  showLogo = false,
}: {
  kicker?: string;
  title?: string;
  body?: string;
  /** The full lockup above the heading — the home page's sign-off. */
  showLogo?: boolean;
}) {
  return (
    <div id="contact" className="band-tint band-open relative overflow-clip">
      <FlowLines className="top-[30%] h-[70%]" />
      <Image
        src="/brand/logo-mark.png"
        alt=""
        aria-hidden
        width={600}
        height={693}
        className="pointer-events-none absolute top-1/2 left-1/2 w-[min(640px,120vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 [background:radial-gradient(70%_80%_at_50%_100%,var(--glow),transparent_70%)]"
      />

      <Container className="relative py-24 md:py-36">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          {showLogo ? (
            <div data-lock="" className="mb-12 flex flex-col items-center">
              <Logo variant="full" className="w-[min(340px,72vw)]" />
              <p className="text-label font-label mt-6 flex flex-wrap justify-center gap-x-3 gap-y-1 tracking-[0.2em] text-muted uppercase">
                {serviceLines.slice(0, 4).map((line, index) => (
                  <span key={line} className="flex items-center gap-3">
                    {index > 0 ? (
                      <span aria-hidden className="text-accent-bright">
                        |
                      </span>
                    ) : null}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ) : (
            <Kicker className="justify-center">{kicker}</Kicker>
          )}

          <h2
            data-wipe=""
            style={{ "--m-delay": "120ms" } as React.CSSProperties}
            className="text-h1 mt-4 font-semibold text-ink"
          >
            {title}
          </h2>
          <p className="text-lede mt-4 max-w-[52ch] text-muted">
            {body} We reply {contact.responseTime}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary">
              <CalendarCheck aria-hidden className="size-4.5" />
              Book a discovery call
            </Button>
            <Button href={brochure.href} download={brochure.fileName} variant="secondary">
              <Download aria-hidden className="size-4.5" />
              {brochure.label}
            </Button>
          </div>
          <p className="text-label font-label mt-3 tracking-[0.14em] text-muted uppercase">
            {brochure.meta}
          </p>
        </div>

        <div className="glass mx-auto mt-14 grid max-w-[880px] gap-6 p-6 sm:grid-cols-3 sm:p-7">
          <ContactItem icon={Mail} label="Email">
            <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
              {contact.email}
            </a>
          </ContactItem>
          <ContactItem icon={Phone} label="Call us">
            {contact.phones.map((phone) => (
              <a
                key={phone}
                href={telHref(phone)}
                className="hover:text-accent block transition-colors"
              >
                {phone}
              </a>
            ))}
          </ContactItem>
          {contact.whatsapp ? (
            <ContactItem icon={MessageCircle} label="WhatsApp">
              <a href={contact.whatsapp} className="hover:text-accent transition-colors">
                Message us
              </a>
            </ContactItem>
          ) : (
            <ContactItem icon={Globe} label="Website">
              <span>{site.domain}</span>
            </ContactItem>
          )}
        </div>
      </Container>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon aria-hidden className="text-accent mt-1 size-4.5 shrink-0" />
      <div className="min-w-0">
        <p className="text-label font-label tracking-[0.16em] text-muted uppercase">{label}</p>
        <div className="mt-1 font-medium break-words text-ink">{children}</div>
      </div>
    </div>
  );
}
