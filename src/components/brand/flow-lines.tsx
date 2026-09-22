import { cn } from "@/lib/utils";

/**
 * The brochure's signature texture: a bundle of sweeping curves echoing the
 * crest of the helmet. Generated here as one SVG so it stays crisp at any
 * width and costs a few kilobytes instead of a background photograph.
 */
function buildPaths(count: number, seed: number) {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const y0 = 150 + (t - 0.5) * 170;
    const amp = 46 + t * 34;
    const phase = seed + t * 1.3;
    const points: string[] = [];
    for (let s = 0; s <= 48; s++) {
      const x = -60 + (s / 48) * 1560;
      const u = s / 48;
      const y =
        y0 +
        Math.sin(u * Math.PI * 1.6 + phase) * amp +
        Math.sin(u * Math.PI * 3.4 + phase * 1.7) * amp * 0.22 -
        u * 70;
      points.push(`${s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    paths.push(points.join(""));
  }
  return paths;
}

const PATHS = buildPaths(38, 0.6);

export function FlowLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-x-0 w-full", className)}
    >
      <defs>
        <linearGradient id="flow-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--flow-line)" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="var(--flow-line)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--flow-line)" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#flow-fade)" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {PATHS.map((d, i) => (
          <path key={i} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  );
}
