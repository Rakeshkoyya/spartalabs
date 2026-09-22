import type { Metadata } from "next";
import { story, timeline, values } from "@/content/about";
import { industries } from "@/content/industries";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Pods } from "@/components/sections/pods";
import { Kicker } from "@/components/ui/kicker";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Sparta Labs is, how we are organised into specialist pods, and the behaviours we hold ourselves to on every engagement.",
};

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
              <p key={paragraph} className="max-w-[68ch] text-lede">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-hairline bg-surface">
        <SectionHeader
          kicker="How we behave"
          title="Values you can hold us to."
          lede="Adjectives are not commitments. These are things we either do or fail to do, and you will be able to tell which."
        />
        <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {values.map((value) => (
            <li
              key={value.title}
              className="border-b border-hairline py-6 first:border-t sm:[&:nth-child(2)]:border-t"
            >
              <h3 className="text-h3 font-semibold">{value.title}</h3>
              <p className="mt-2.5 max-w-[52ch] text-[0.9375rem] text-muted">{value.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {timeline.length > 0 ? (
        <Section>
          <SectionHeader kicker="Timeline" title="How we got here." />
          <ol className="mt-12 grid border-t border-hairline">
            {timeline.map((entry) => (
              <li
                key={entry.year}
                className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
              >
                <span className="text-label tabular font-mono tracking-[0.12em] text-accent">
                  {entry.year}
                </span>
                <div>
                  <h3 className="text-h3 font-semibold">{entry.title}</h3>
                  <p className="mt-2 max-w-[62ch] text-[0.9375rem] text-muted">{entry.body}</p>
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
        <ul className="mt-12 grid border-t border-hairline md:grid-cols-4">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="border-b border-hairline py-6 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <h3 className="text-h3 font-semibold">{industry.name}</h3>
              <p className="mt-2.5 text-sm text-muted">{industry.proof}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
