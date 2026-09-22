import { industries } from "@/content/industries";
import { Section, SectionHeader } from "@/components/ui/section";

export function Industries() {
  return (
    <Section id="industries">
      <SectionHeader
        kicker="Industries"
        title="Where we have already done this."
        lede="Four sectors with delivered systems behind them. Each one taught us something the next client did not have to pay to learn."
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
  );
}
