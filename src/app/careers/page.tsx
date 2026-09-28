import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { howWeWork, roles } from "@/content/careers";
import { contact } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/ui/kicker";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "Careers — Sparta Labs",
  description:
    "Build serious systems with a small, disciplined team. See open roles or send us your work.",
  path: "/careers",
  absoluteTitle: true,
});

export default function CareersPage() {
  const applyEmail = contact.careersEmail ?? contact.email;

  return (
    <>
      <PageHero kicker="Careers" title="Build serious systems with a small team.">
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Careers", href: "/careers" }]} />
        </div>
      </PageHero>

      <Section>
        <Kicker rule className="text-muted">
          How we work
        </Kicker>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {howWeWork.map((line) => (
            <li key={line} className="font-display text-h3 font-semibold">
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-hairline bg-surface border-t">
        <Kicker rule className="text-muted">
          Open roles
        </Kicker>
        {roles.length > 0 ? (
          <ul className="border-hairline mt-6 grid border-t">
            {roles.map((role) => (
              <li key={role.title}>
                <a
                  href={role.applyHref}
                  className="border-hairline group grid items-center gap-2 border-b py-5 sm:grid-cols-[1fr_10rem_10rem_auto] sm:gap-6"
                >
                  <span className="font-display group-hover:text-accent text-lg font-semibold transition-colors">
                    {role.title}
                  </span>
                  <span className="text-muted text-sm">{role.type}</span>
                  <span className="text-muted text-sm">{role.location}</span>
                  <span className="text-accent inline-flex items-center gap-1.5 text-sm font-semibold">
                    Apply
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="card mt-6 flex flex-wrap items-center justify-between gap-6 p-6 sm:p-8">
            <p className="font-display text-lg font-medium">
              No open roles right now. Send us your work.
            </p>
            <Button href={`mailto:${applyEmail}?subject=Open%20application`} variant="secondary">
              <Mail aria-hidden className="size-4" />
              {applyEmail}
            </Button>
          </div>
        )}
      </Section>
    </>
  );
}
