import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the information you send through this website.`,
};

/**
 * TODO(legal): describes what the site actually does today and is accurate as
 * written, but it has not been reviewed by a lawyer. Have counsel check it
 * before launch, and revisit it the moment analytics or any third-party
 * embed is added.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy">
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Privacy", href: "/privacy" }]} />
        </div>
      </PageHero>

      <Section>
        <Prose>
          <p>
            This page describes what {site.name} does with information you give us through{" "}
            {site.domain}. It covers this website only.
          </p>

          <h2>What we collect</h2>
          <p>
            Only what you type into the contact form: your name, email address, optionally your
            company, the category of enquiry you pick, and your message. We do not ask for anything
            else, and there is no account to create.
          </p>

          <h2>What we do with it</h2>
          <p>
            We use it to answer you. Submissions are delivered to our own inbox by email. We do not
            sell it, rent it, or pass it to anyone outside the people at {site.name} who need to
            read it in order to reply.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This site sets no tracking cookies and runs no advertising pixels. If you switch between
            the light and dark theme, that single preference is stored in your own browser using
            local storage. It never leaves your device and we cannot read it.
          </p>

          <h2>Who else is involved</h2>
          <ul>
            <li>Our hosting provider serves the pages and keeps standard server logs.</li>
            <li>Our email provider delivers contact form messages to our inbox.</li>
            <li>Fonts are served from this site&rsquo;s own domain, not from a third party.</li>
          </ul>

          <h2>How long we keep it</h2>
          <p>
            Enquiries stay in our email for as long as the conversation is useful. Ask us to delete
            yours and we will.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask what we hold about you, ask for it to be corrected, or ask for it to be
            deleted. Write to <a href={`mailto:${contact.email}`}>{contact.email}</a> and we will
            act on it.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes in a way that affects you, we will update this page. It applies
            from the date you read it.
          </p>
        </Prose>
      </Section>
    </>
  );
}
