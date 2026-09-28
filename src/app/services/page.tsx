import type { Metadata } from "next";
import { Check, Sparkles, Users } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import {
  allServices,
  techStack,
  type CoreService,
  type SupportingService,
} from "@/content/services";
import { engagementModels } from "@/content/engagement";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { IconBox } from "@/components/brand/icons";
import { CtaBand } from "@/components/sections/cta-band";
import { Kicker } from "@/components/ui/kicker";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceIndex } from "@/components/services/service-index";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Services — AI Automation, Websites, Internal Software",
  description:
    "AI automations, custom websites and e-commerce, and internal software built around your workflow. Fixed quotes after a free discovery call.",
  path: "/services",
  absoluteTitle: true,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Six things we build. All start with how you work."
        lede="No templates or packages. Every build is scoped after a discovery call."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Services", href: "/services" }]} />
        </div>
      </PageHero>

      <Section className="topo">
        <div className="grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <ServiceIndex items={allServices.map(({ key, title }) => ({ key, title }))} />
            </div>
          </aside>

          <ol className="flex flex-col gap-6">
            {allServices.map((service, index) => (
              <li key={service.key} id={service.key} className="scroll-mt-28">
                <ServicePanel service={service} index={index} />
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="navy" flow>
        <SectionHeader
          kicker="How we price"
          title="Three models. Quoted after a free call."
          lede="You get a fixed price or a monthly plan in writing before any work starts."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {engagementModels.map((model, index) => (
            <li key={model.name}>
              <article
                className={cn(
                  "flex h-full flex-col gap-4 rounded-[var(--radius-card)] p-7",
                  index === 1 ? "crest shadow-[0_24px_50px_-24px_rgb(0_40_120/0.6)]" : "glass",
                )}
              >
                <span className="text-accent-bright font-mono text-[0.8125rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3 font-display font-semibold">{model.name}</h3>
                <p className="text-muted text-sm">Best for: {model.bestFor.toLowerCase()}</p>
                <p className="border-hairline-strong mt-auto border-t pt-4 text-base">
                  {model.howItWorks}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {techStack.length > 0 ? (
          <div className="mt-14">
            <Kicker rule>Tech we use</Kicker>
            <ul className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tool) => (
                <li key={tool} className="glass px-4 py-2 text-sm font-medium">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      <CtaBand
        kicker="Not sure?"
        title="Not sure what you need? Most clients aren’t."
        body="Tell us the problem. We’ll tell you what to build, or if you don’t need to build anything."
      />
    </>
  );
}

/** One service, fully expanded: who it's for, what we build, what you get. */
function ServicePanel({
  service,
  index,
}: {
  service: CoreService | SupportingService;
  index: number;
}) {
  return (
    <article
      data-lock=""
      className="card spotlight overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
    >
      <header className="border-hairline flex flex-wrap items-start gap-5 border-b p-6 sm:p-8">
        <IconBox icon={service.icon} />
        <div className="min-w-0 flex-1">
          <span className="text-accent font-mono text-[0.8125rem]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="font-display mt-1 text-[clamp(1.625rem,1.3rem+1.1vw,2.25rem)] leading-tight font-semibold tracking-[-0.02em]">
            {service.title}
          </h2>
          <p className="font-display text-accent-core mt-2 text-lg font-medium">
            {service.oneLiner}
          </p>
        </div>
      </header>

      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <p className="text-label text-muted font-label flex items-center gap-2 tracking-[0.14em] uppercase">
            <Users aria-hidden className="size-3.5" />
            Who it&rsquo;s for
          </p>
          <p className="mt-3 text-base">{service.forWho}</p>
        </div>
        <div>
          <p className="text-label text-muted font-label tracking-[0.14em] uppercase">
            What we build
          </p>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {service.weBuild.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.9375rem]">
                <span className="bg-accent-wash text-accent-core mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="bg-accent-wash text-accent-wash-ink flex items-start gap-3 px-6 py-4 sm:px-8">
        <Sparkles aria-hidden className="mt-0.5 size-4 shrink-0" />
        <p className="text-[0.9375rem]">
          <span className="font-semibold">You get: </span>
          {service.youGet}
        </p>
      </footer>
    </article>
  );
}
