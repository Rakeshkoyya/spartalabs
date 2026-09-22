import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { contact, site } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: `The terms that apply to your use of the ${site.name} website.`,
  path: "/terms",
});

/**
 * TODO(legal): a plain-language starting point, not reviewed by a lawyer.
 * Counsel should check it before launch — particularly the governing-law
 * clause, which needs the registered entity and jurisdiction from
 * src/content/site.ts once those are supplied.
 */
export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms">
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Terms", href: "/terms" }]} />
        </div>
      </PageHero>

      <Section>
        <Prose>
          <p>
            These terms apply to your use of {site.domain}. They do not govern any project we
            deliver for you — that is covered by the agreement we sign with you, which takes
            precedence over anything here.
          </p>

          <h2>Using this site</h2>
          <p>
            You may read, share and link to anything on this site. You may not copy it wholesale and
            present it as your own, or use it to build a competing site.
          </p>

          <h2>What is on it</h2>
          <p>
            The text, design, code and marks on this site belong to {site.name}. Client work is
            described with permission and remains the property of the client it was built for.
          </p>

          <h2>Accuracy</h2>
          <p>
            We keep this site current and write nothing on it we cannot stand behind, but it is
            marketing material rather than a contractual specification. Timelines, prices and
            capabilities described here are indicative. What we actually commit to on your project
            is what appears in your signed agreement.
          </p>

          <h2>Links out</h2>
          <p>
            Where we link to another site, we do not control it and are not responsible for what it
            does.
          </p>

          <h2>Liability</h2>
          <p>
            We provide this site as it is. We are not liable for loss arising from your use of it,
            to the extent the law allows us to say so.
          </p>

          <h2>Questions</h2>
          <p>
            Write to <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </Prose>
      </Section>
    </>
  );
}
