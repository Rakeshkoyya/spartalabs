import { pods } from "@/content/pods";
import { ChevronMark } from "@/components/ui/chevron-mark";
import { Section, SectionHeader } from "@/components/ui/section";

/**
 * With no team photographs on the site, this section has to earn its place on
 * substance: each pod states what it owns on a project. Eight bare labels would
 * be decoration; eight labels with ownership is an org chart, and an org chart
 * is evidence.
 */
export function Pods() {
  return (
    <Section id="pods" className="border-y border-hairline bg-surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
        <SectionHeader
          kicker="Specialist pods"
          title="A specialist for every layer."
          lede="Every engagement draws from all eight. You are never handed to a generalist, and no part of your system is left without an owner."
        />

        <ul className="flex flex-col">
          {pods.map((pod) => (
            <li
              key={pod.name}
              className="flex flex-col gap-1.5 border-b border-hairline py-4 first:border-t sm:flex-row sm:items-baseline sm:gap-4 lg:first:border-t-0 lg:first:pt-0"
            >
              <div className="flex items-baseline gap-3 sm:w-[11rem] sm:shrink-0">
                <ChevronMark className="h-3 w-2.5 translate-y-0.5 text-accent-core" />
                <h3 className="font-display text-[1rem] font-semibold tracking-[-0.01em]">
                  {pod.name}
                </h3>
              </div>
              <p className="flex-1 pl-[1.375rem] text-sm text-muted sm:pl-0">{pod.owns}</p>
              {pod.headcount ? (
                <span className="text-label tabular font-mono text-muted">{pod.headcount}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
