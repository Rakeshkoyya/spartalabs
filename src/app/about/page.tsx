import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import {
  beliefs,
  founded,
  founders,
  nameStory,
  specialists,
  story,
  teamSize,
} from "@/content/about";
import { proofMetrics } from "@/content/metrics";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { Kicker } from "@/components/ui/kicker";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import type { Founder } from "@/content/about";

export const metadata: Metadata = pageMetadata({
  title: "About Sparta Labs — Custom Software Studio",
  description:
    "Founded in 2025 by Salman and Rakesh. A team of 10+ expert engineers building software that fits how businesses already work.",
  path: "/about",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title={`${teamSize} expert engineers. One focused team.`}
        lede={`Founded in ${founded} by ${founders.map((f) => `${f.name} (${f.role})`).join(" and ")}. Senior engineers across product, web, mobile, AI and cloud, building software that fits how businesses already work.`}
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "About", href: "/about" }]} />
        </div>
      </PageHero>

      <Section className="!pb-0">
        <ul className="border-hairline grid grid-cols-3 border-y">
          {proofMetrics.map((metric, index) => (
            <li
              key={metric.label}
              className={`border-hairline px-2 py-7 text-center sm:px-6 ${index < proofMetrics.length - 1 ? "border-r" : ""}`}
            >
              <span className="tabular font-display block text-[clamp(2.25rem,1.8rem+2vw,3.5rem)] leading-none font-semibold tracking-[-0.03em]">
                {metric.value}
              </span>
              <span className="text-muted mx-auto mt-3 block max-w-[24ch] text-sm leading-snug">
                {metric.label}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker>Why &ldquo;Sparta&rdquo;</Kicker>
            <p className="text-lede mt-5 max-w-[48ch]">{nameStory.sparta}</p>
            <p className="text-muted mt-4 max-w-[48ch] text-base">{nameStory.labs}</p>
          </div>
          <div>
            <Kicker>Our story</Kicker>
            {story.map((line, index) => (
              <p
                key={line}
                className={
                  index === 0
                    ? "text-lede mt-5 max-w-[52ch]"
                    : "text-muted mt-4 max-w-[52ch] text-base"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy" flow>
        <SectionHeader
          kicker="The team"
          title={`${teamSize} engineers. Every layer covered.`}
          lede="Every project gets one named lead, backed by specialists who have shipped real systems in each layer."
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {specialists.map((item) => (
            <li
              key={item}
              className="border-hairline-strong rounded-full border bg-white/8 px-4 py-2 text-sm font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-hairline bg-surface border-b">
        <SectionHeader kicker="Leadership" title="The people you’ll talk to." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-[52rem]">
          {founders.map((founder) => (
            <li key={founder.name}>
              <FounderCard founder={founder} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="max-w-[46rem]">
          <div>
            <SectionHeader kicker="What we believe" title="Four promises." />
            <ol className="mt-10 grid">
              {beliefs.map((belief, index) => (
                <li
                  key={belief}
                  className="border-hairline flex items-baseline gap-4 border-t py-5 last:border-b"
                >
                  <span className="text-accent font-mono text-[0.8125rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.1875rem] font-semibold">{belief}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <CtaBand
        kicker="Next step"
        title="Want to see if we’re a fit?"
        body="Book a discovery call."
      />
    </>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <article className="card flex h-full items-start gap-5 p-6">
      {founder.photo ? (
        <Image
          src={founder.photo}
          alt={founder.name}
          width={72}
          height={72}
          className="size-18 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden
          className="crest-deep font-display grid size-18 shrink-0 place-items-center rounded-full text-2xl font-semibold text-white"
        >
          {founder.name.charAt(0)}
        </span>
      )}
      <div className="min-w-0">
        <h3 className="text-h3 font-semibold">{founder.name}</h3>
        <p className="text-accent text-sm font-medium">{founder.role}</p>
        {founder.bio ? <p className="text-muted mt-2 text-sm">{founder.bio}</p> : null}
        {founder.linkedin ? (
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent mt-3 inline-flex min-h-9 items-center text-sm font-medium transition-colors"
          >
            LinkedIn ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
