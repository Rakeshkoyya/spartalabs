import { ScanFace } from "lucide-react";
import { promises } from "@/content/home";
import { pods } from "@/content/pods";
import { IconBox, podIcons, promiseIcons } from "@/components/brand/icons";
import { Section, SectionHeader } from "@/components/ui/section";

/**
 * Brochure page eight. With no team photographs on the site, this section has
 * to earn its place on substance: each pod states what it owns on a project.
 * Eight labels with ownership is an org chart, and an org chart is evidence.
 */
export function Pods() {
  return (
    <Section id="pods" label="Your team" tone="navy" flow>
      <SectionHeader
        kicker="Your team"
        title="A specialist for every layer. One lead who owns the whole."
        lede="Projects rarely fail on skill. They fail when some part of the system has no owner. So every Sparta engagement is staffed by a dedicated pod, with a specialist for each layer."
      />

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {pods.map((pod, index) => (
          <li
            key={pod.name}
            data-lock=""
            style={{ "--m-delay": `${(index % 4) * 70}ms` } as React.CSSProperties}
            className="glass flex flex-col p-5 transition-colors duration-200 hover:border-[rgb(25_190_255/0.35)]"
          >
            <IconBox icon={podIcons[pod.name]} className="size-10" />
            <h3 className="font-display mt-4 font-semibold text-white">{pod.name}</h3>
            <p className="text-muted mt-1 text-sm">{pod.owns}</p>
            {pod.headcount ? (
              <span className="text-label tabular text-muted font-label mt-3">{pod.headcount}</span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-4 rounded-[var(--radius-card)] border border-[rgb(25_190_255/0.3)] bg-linear-to-r from-[rgb(0_82_209/0.45)] to-[rgb(0_82_209/0.1)] p-5">
        <IconBox icon={ScanFace} className="size-10" />
        <div>
          <p className="font-display text-lg font-semibold text-white">One named engagement lead</p>
          <p className="text-muted text-sm">
            From the first call to the day after launch. You never have to explain your project to a
            new person.
          </p>
        </div>
      </div>

      <h3 className="font-display mt-16 text-lg font-semibold text-white">
        Three promises on every project
      </h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-3">
        {promises.map((promise) => {
          const Icon = promiseIcons[promise.key];
          return (
            <li key={promise.key} className="glass p-5">
              <span className="font-display flex items-center gap-2 font-semibold text-white">
                <Icon aria-hidden className="text-accent size-4.5" />
                {promise.title}
              </span>
              <p className="text-muted mt-2 text-sm">{promise.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
