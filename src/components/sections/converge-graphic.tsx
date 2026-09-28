import Image from "next/image";
import {
  FileSpreadsheet,
  FileText,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

type Fragment = {
  label: string;
  icon: LucideIcon;
  /** Where the tile starts, scattered: offset in px and a tilt. */
  scatter: [x: number, y: number, rotate: number];
};

/** The pieces a business is usually held together with, before the system. */
const FRAGMENTS: Fragment[] = [
  { label: "Spreadsheets", icon: FileSpreadsheet, scatter: [-70, -60, -14] },
  { label: "Email threads", icon: Mail, scatter: [60, -80, 11] },
  { label: "WhatsApp groups", icon: MessageCircle, scatter: [90, 20, -9] },
  { label: "Paper forms", icon: FileText, scatter: [50, 90, 16] },
  { label: "Old website", icon: Globe, scatter: [-60, 80, -12] },
  { label: "Three tools", icon: Layers, scatter: [-100, 10, 8] },
];

/** Tile distance from the core, as a share of the box. */
const RADIUS = 37;
const START_ANGLE = -90;

/**
 * "Who we are", drawn: the scattered tools a business limps along on gather
 * into a ring around one system as the section scrolls into view, and a
 * connector is drawn from the core to each. Scroll-scrubbed and transform
 * only (motion.css, "CONVERGE"); without scroll timelines, or under reduced
 * motion, it simply shows the assembled system.
 */
export function ConvergeGraphic() {
  return (
    <figure className="converge relative mx-auto aspect-square w-full max-w-[520px]">
      <div
        aria-hidden
        className="hero-grid absolute inset-0 rounded-[var(--radius-card)] [mask-image:radial-gradient(circle,#000_30%,transparent_72%)]"
      />
      <div
        aria-hidden
        className="border-hairline-strong absolute inset-[18%] rounded-full border border-dashed"
      />

      {FRAGMENTS.map((fragment, index) => {
        const angle = START_ANGLE + (360 / FRAGMENTS.length) * index;
        return (
          <span
            key={`link-${fragment.label}`}
            aria-hidden
            className="converge-link"
            style={
              {
                "--a": `${angle}deg`,
                "--r": `${RADIUS}%`,
                "--i": index,
              } as React.CSSProperties
            }
          />
        );
      })}

      <ul aria-label="What we replace" className="contents">
        {FRAGMENTS.map((fragment, index) => {
          const angle = ((START_ANGLE + (360 / FRAGMENTS.length) * index) * Math.PI) / 180;
          const Icon = fragment.icon;
          const [sx, sy, sr] = fragment.scatter;
          return (
            <li
              key={fragment.label}
              className="converge-tile glass font-display text-ink flex items-center gap-2 rounded-2xl px-3 py-2 text-[0.75rem] font-medium whitespace-nowrap sm:px-3.5 sm:py-2.5 sm:text-sm"
              style={
                {
                  "--x": `${50 + RADIUS * Math.cos(angle)}%`,
                  "--y": `${50 + RADIUS * Math.sin(angle)}%`,
                  "--sx": `${sx}px`,
                  "--sy": `${sy}px`,
                  "--sr": `${sr}deg`,
                  "--i": index,
                } as React.CSSProperties
              }
            >
              <Icon aria-hidden className="text-accent size-4 shrink-0" strokeWidth={1.75} />
              {fragment.label}
            </li>
          );
        })}
      </ul>

      <div className="converge-core tone-dark crest absolute top-1/2 left-1/2 grid size-[34%] place-items-center rounded-full text-center shadow-[0_0_0_10px_rgb(77_170_255/0.14),0_24px_60px_-10px_rgb(30_100_230/0.45)]">
        <div className="flex flex-col items-center">
          <Image
            src="/brand/logo-mark-white.png"
            alt=""
            aria-hidden
            width={600}
            height={693}
            className="mb-1.5 h-auto w-[34%]"
          />
          <span className="font-display text-[clamp(0.8125rem,0.7rem+0.6vw,1.0625rem)] leading-tight font-semibold">
            One system
          </span>
        </div>
      </div>

      <figcaption className="sr-only">
        Spreadsheets, email threads, WhatsApp groups, paper forms, an old website and three separate
        tools, replaced by one connected system.
      </figcaption>
    </figure>
  );
}
