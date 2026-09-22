import { contact } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

/**
 * Closing band, shared by every page. Some buyers will never fill in a form, so
 * the direct routes sit beside the primary action rather than in the footer.
 */
export function CtaBand({
  kicker = "Start here",
  title = "One call. No deck.",
  body = "Describe the problem and we will tell you whether we are the right people for it. If we are not, we will say so.",
}: {
  kicker?: string;
  title?: string;
  body?: string;
}) {
  return (
    <div className="relative overflow-hidden border-t border-hairline bg-surface">
      <div aria-hidden className="blueprint-grid veil-cta pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <Kicker rule={false}>{kicker}</Kicker>
            <h2 className="text-h2 mt-4 max-w-[20ch] font-semibold">{title}</h2>
            <p className="text-lede mt-4 max-w-[52ch] text-muted">
              {body} We reply {contact.responseTime}.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <Button href="/contact">Start a conversation</Button>
            <div className="flex flex-col gap-1.5 text-sm text-muted lg:text-right">
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">
                {contact.email}
              </a>
              {contact.phone ? (
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {contact.phone}
                </a>
              ) : null}
              {contact.whatsapp ? (
                <a href={contact.whatsapp} className="transition-colors hover:text-accent">
                  WhatsApp
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
