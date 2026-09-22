import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { story, timeline, values } from "@/content/about";
import { industries } from "@/content/industries";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Pods } from "@/components/sections/pods";
import { Kicker } from "@/components/ui/kicker";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Sparta Labs (Spartalabs) is an IT solutions and software development company in India. Meet the specialist pods behind our custom platforms, apps and AI systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Built to fit how you already work."
        lede="Not to make you rearrange yourself around someone else's product."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "About", href: "/about" }]} />
        </div>
      </PageHero>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <Kicker>Why we exist</Kicker>
          <div className="flex flex-col gap-5">
            {story.map((paragraph) => (
              <p key={paragraph} className="text-lede max-w-[68ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-hairline bg-surface border-y">
        <SectionHeader
          kicker="How we behave"
          title="Values you can hold us to."
          lede="Adjectives are not commitments. These are things we either do or fail to do, and you will be able to tell which."
        />
        <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {values.map((value) => (
            <li
              key={value.title}
              className="border-hairline border-b py-6 first:border-t sm:[&:nth-child(2)]:border-t"
            >
              <h3 className="text-h3 font-semibold">{value.title}</h3>
              <p className="text-muted mt-2.5 max-w-[52ch] text-base">{value.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {timeline.length > 0 ? (
        <Section>
          <SectionHeader kicker="Timeline" title="How we got here." />
          <ol className="border-hairline mt-12 grid border-t">
            {timeline.map((entry) => (
              <li
                key={entry.year}
                className="border-hairline grid gap-2 border-b py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
              >
                <span className="text-label tabular text-accent font-label tracking-[0.12em]">
                  {entry.year}
                </span>
                <div>
                  <h3 className="text-h3 font-semibold">{entry.title}</h3>
                  <p className="text-muted mt-2 max-w-[62ch] text-base">{entry.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      <Pods />

      <Section>
        <SectionHeader
          kicker="Where we work"
          title="Four sectors, so far."
          lede="Each one taught us something the next client did not have to pay to learn."
        />
        <ul className="border-hairline mt-12 grid border-t md:grid-cols-4">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="border-hairline border-b py-6 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <h3 className="text-h3 font-semibold">{industry.name}</h3>
              <p className="text-muted mt-2.5 text-sm">{industry.proof}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
