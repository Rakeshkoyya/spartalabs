import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { contact, site } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy — Sparta Labs",
  description: `Which cookies ${site.domain} uses, why, and how to control them.`,
  path: "/cookies",
  absoluteTitle: true,
});

/** Bump whenever the policy changes. */
const LAST_UPDATED = "28 September 2026";

/**
 * TODO(legal): accurate for the site as built — no cookies, one local-storage
 * preference. Rewrite the moment analytics or any third-party embed is added,
 * and have counsel review before launch.
 */
export default function CookiesPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Cookie Policy">
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Cookies", href: "/cookies" }]} />
        </div>
      </PageHero>

      <Section>
        <Prose>
          <p>Last updated: {LAST_UPDATED}.</p>

          <h2>What we set</h2>
          <p>
            {site.domain} sets no cookies. It runs no analytics, advertising pixels or third-party
            trackers.
          </p>

          <h2>Essential storage</h2>
          <ul>
            <li>
              <strong>Theme preference</strong> (local storage, key <code>sl-theme</code>):
              remembers whether you chose the light or dark theme. It stays on your device, and we
              cannot read it.
            </li>
          </ul>

          <h2>How to control it</h2>
          <p>
            Clear this site&rsquo;s data in your browser settings to remove the theme preference.
            The site works the same without it.
          </p>

          <h2>Changes</h2>
          <p>
            If we add analytics or anything else that stores data on your device, we will list it
            here, say why, and explain how to opt out before it runs.
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
