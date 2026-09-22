import Image from "next/image";
import { examples, hubNodes, type HubNode } from "@/content/home";
import { exampleIcons, hubIcons, IconBox } from "@/components/brand/icons";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/** Brochure page five: every piece we build hangs off one core platform. */
export function ConnectedSystem() {
  const left = hubNodes.filter((_, index) => index % 2 === 0);
  const right = hubNodes.filter((_, index) => index % 2 === 1);

  return (
    <Section id="system" label="One system" tone="navy" flow>
      <SectionHeader
        kicker="One business, one system"
        title="Not a pile of apps. A connected system built for you."
        lede="Every piece we build shares one source of truth. Your website feeds your platform, your app reads the same records, and automation moves the data so your team does not have to."
      />

      <div className="relative mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
        {/* Dashed links from each node to the core; drawn only where the three columns sit side by side. */}
        <svg
          aria-hidden
          viewBox="0 0 1000 420"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        >
          <g
            fill="none"
            stroke="rgb(25 190 255 / 0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          >
            <path d="M300 55 C 380 60, 420 110, 440 160" vectorEffect="non-scaling-stroke" />
            <path d="M300 210 L 400 210" vectorEffect="non-scaling-stroke" />
            <path d="M300 365 C 380 360, 420 310, 440 260" vectorEffect="non-scaling-stroke" />
            <path d="M700 55 C 620 60, 580 110, 560 160" vectorEffect="non-scaling-stroke" />
            <path d="M700 210 L 600 210" vectorEffect="non-scaling-stroke" />
            <path d="M700 365 C 620 360, 580 310, 560 260" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>

        <NodeColumn nodes={left} />

        <div className="relative order-first mx-auto grid size-56 place-items-center rounded-full text-center shadow-[0_0_0_12px_rgb(25_190_255/0.06),0_0_0_26px_rgb(25_190_255/0.035),0_24px_70px_rgb(0_80_220/0.55)] [background:radial-gradient(circle_at_35%_30%,#1c64e6,#0b2f7a_60%,#08204f)] sm:size-64 lg:order-none lg:mx-16">
          <div className="flex flex-col items-center">
            <Image
              src="/brand/logo-mark-white.png"
              alt=""
              aria-hidden
              width={600}
              height={693}
              className="mb-3 h-auto w-16"
            />
            <span className="font-display text-lg leading-tight font-semibold text-white">
              Your core
              <br />
              platform
            </span>
            <span className="mt-1 text-xs text-[#bfd4f5]">One source of truth</span>
          </div>
        </div>

        <NodeColumn nodes={right} />
      </div>

      <h3 className="font-display mt-20 text-lg font-semibold text-white">
        What that can look like for a business like yours
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {examples.map((example) => {
          const Icon = exampleIcons[example.key];
          return (
            <li key={example.key} className="glass p-5">
              <span className="font-display flex items-center gap-2 font-semibold text-white">
                {Icon ? <Icon aria-hidden className="text-accent size-4.5" /> : null}
                {example.title}
              </span>
              <p className="text-muted mt-2 text-sm">{example.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function NodeColumn({ nodes }: { nodes: HubNode[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-16">
      {nodes.map((node) => (
        <li key={node.key} className={cn("glass flex items-start gap-3 p-4")}>
          <IconBox icon={hubIcons[node.key]} className="size-10" />
          <div>
            <span className="font-display block font-semibold text-white">{node.title}</span>
            <span className="text-muted mt-0.5 block text-sm leading-snug">{node.body}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
