import { capabilities } from "@/content/capabilities";
import { ChevronMark } from "@/components/ui/chevron-mark";
import { Section, SectionHeader } from "@/components/ui/section";

export function Capabilities() {
  return (
    <Section id="capabilities">
      <SectionHeader
        kicker="What we build"
        title="Six things, done properly."
        lede="Framed as what it does for your organisation, not as a list of the technologies underneath. The stack is our problem."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <li key={capability.title}>
            <article className="flex h-full flex-col gap-3 rounded-[var(--radius-card)] border border-hairline bg-surface p-6 transition-[border-color,transform] duration-200 ease-[var(--ease-out-expo)] hover:border-accent-core/55 motion-safe:hover:-translate-y-0.5">
              <ChevronMark className="mb-1 text-accent-core" />
              <h3 className="text-h3 font-semibold">{capability.title}</h3>
              <p className="text-[0.9375rem] text-muted">{capability.outcome}</p>
              <ul className="mt-auto flex flex-col gap-1.5 border-t border-hairline pt-4">
                {capability.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
