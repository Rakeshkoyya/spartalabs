"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { serviceLines } from "@/content/site";
import { serviceIcons } from "@/components/brand/icons";

/** Degrees, screen coordinates (0 = right, 90 = down). One per service line. */
const ANGLES = [-145, -52, 18, 96, 164];
/** Node distance from the hub, as a share of the box width. */
const RADIUS = 43;
/** Farthest the layers drift toward the pointer, in px. */
const DRIFT = 12;

/**
 * The hero's signature: the crest at the hub of one system, the five service
 * lines on its outer ring, each wired back to the centre. It is the brochure's
 * "one business, one system" idea drawn as the first thing a visitor sees.
 *
 * Decorative — the same service lines are listed as text beside the headline
 * — so it is hidden from assistive tech. Sizes use container units so the
 * spokes and pulses can travel an exact radius with `transform` alone.
 */
export function HeroOrbit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--px", `${(x * DRIFT).toFixed(1)}px`);
        el.style.setProperty("--py", `${(y * DRIFT).toFixed(1)}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="[container-type:inline-size] relative aspect-square w-full"
    >
      {/* Rings */}
      <div
        className="orbit-parallax absolute inset-0"
        style={{ "--k": 0.4 } as React.CSSProperties}
      >
        <div
          className="absolute inset-[20%] rounded-full"
          style={{ background: "radial-gradient(circle, rgb(10 108 240 / 0.35), transparent 70%)" }}
        />
        <span className="orbit-ring" style={ring("7%", 250, "rgb(77 187 255 / 0.22)")} />
        <span
          className="orbit-ring border-dashed"
          style={ring("20%", 340, "rgb(77 187 255 / 0.18)")}
        />
        <span className="orbit-ring" style={ring("33%", 430, "rgb(77 187 255 / 0.3)")} />
      </div>

      {/* Spokes, pulses and the service-line nodes */}
      <div
        className="orbit-parallax absolute inset-0"
        style={{ "--k": 0.7 } as React.CSSProperties}
      >
        {ANGLES.map((angle, index) => (
          <span
            key={`spoke-${angle}`}
            className="orbit-spoke"
            style={
              {
                "--a": `${angle}deg`,
                "--r": `${RADIUS}cqw`,
                "--enter-delay": `${680 + index * 80}ms`,
              } as React.CSSProperties
            }
          >
            <span className="orbit-pulse" />
          </span>
        ))}

        {serviceLines.map((line, index) => {
          const Icon = serviceIcons[line];
          const rad = (ANGLES[index] * Math.PI) / 180;
          return (
            <span
              key={line}
              className="orbit-node border-hairline-strong font-display inline-flex items-center gap-2 rounded-full border bg-[#0b1627]/85 px-3.5 py-2 text-[0.8125rem] font-medium whitespace-nowrap text-white shadow-[0_10px_30px_-12px_rgb(0_0_0/0.7)] backdrop-blur-md"
              style={
                {
                  "--x": `${50 + RADIUS * Math.cos(rad)}%`,
                  "--y": `${50 + RADIUS * Math.sin(rad)}%`,
                  "--enter-delay": `${780 + index * 80}ms`,
                } as React.CSSProperties
              }
            >
              {Icon ? <Icon className="size-4 text-sky-400" strokeWidth={1.75} /> : null}
              {line}
            </span>
          );
        })}
      </div>

      {/* The hub */}
      <div
        className="orbit-parallax absolute inset-[31%] grid place-items-center"
        style={{ "--k": 1 } as React.CSSProperties}
      >
        <div className="orbit-crest relative grid size-full place-items-center rounded-full shadow-[0_0_0_1px_rgb(77_187_255/0.35),0_30px_80px_-10px_rgb(0_80_220/0.7)] [background:radial-gradient(circle_at_35%_30%,#1c64e6,#0b2f7a_62%,#071a3f)]">
          <Image
            src="/brand/logo-mark-white.png"
            alt=""
            width={600}
            height={693}
            priority
            sizes="180px"
            className="h-auto w-[58%] drop-shadow-[0_18px_30px_rgb(0_20_70/0.6)]"
          />
        </div>
      </div>
    </div>
  );
}

function ring(inset: string, delay: number, color: string) {
  return {
    "--inset": inset,
    "--enter-delay": `${delay}ms`,
    "--ring": color,
  } as React.CSSProperties;
}
