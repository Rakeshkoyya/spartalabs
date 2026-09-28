import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredFaq } from "@/content/faq";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { Section, SectionHeader } from "@/components/ui/section";

/** The home page preview: the four questions that most often block a call. */
export function FaqSection() {
  return (
    <Section id="faq" label="Questions" className="topo">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader index="05" kicker="Questions" title="Asked before every first call." />
          <Link
            href="/faq"
            className="text-accent font-display group flex min-h-11 w-fit items-center gap-2 font-semibold"
          >
            All questions
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
        <FaqAccordion items={featuredFaq} />
      </div>
    </Section>
  );
}
