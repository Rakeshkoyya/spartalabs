"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { ParticleScene, sampleImage, type Rgb, type SceneOptions } from "@/lib/particles";

const CREST_LIGHT = "/brand/logo-mark.png";
const CREST_DARK = "/brand/logo-mark-white.png";
/** Wide layout: the crest stands in the right column at full strength. */
const WIDE_MIN = 1024;
const MOTE_DENSITY = 16000;
const MOTES_MIN = 28;
const MOTES_MAX = 110;

type Controller = { start: () => void; stop: () => void };

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Could not load ${src}`));
    image.src = src;
  });
}

function readMoteColor(el: Element): Rgb {
  const raw = getComputedStyle(el).getPropertyValue("--particle").trim();
  const [r = 10, g = 108, b = 240] = raw.split(/\s+/).map(Number);
  return [r, g, b];
}

function isDark() {
  return document.documentElement.classList.contains("dark");
}

/**
 * The hero's interactive field: the crest drawn in particles that scatter from
 * the pointer and spring back, over a drifting network of motes.
 *
 * Decorative, so the canvas is hidden from assistive tech. It pauses when the
 * hero is off screen or the tab is hidden, has a visible pause control (it
 * moves continuously, WCAG 2.2.2), and under reduced motion draws a single
 * settled frame with no loop and no pointer response.
 */
export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controller = useRef<Controller | null>(null);
  const [paused, setPaused] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotionAllowed(!reduce);

    let scene: ParticleScene | null = null;
    let image: HTMLImageElement | null = null;
    let frame = 0;
    let running = false;
    let visible = true;
    let wantsRun = !reduce;
    let disposed = false;

    const layout = (img: HTMLImageElement): SceneOptions => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const wide = width >= WIDE_MIN;
      const crestHeight = wide ? Math.min(height * 0.6, 540) : Math.min(height * 0.3, 280);
      const moteCount = Math.round(
        Math.min(MOTES_MAX, Math.max(MOTES_MIN, (width * height) / MOTE_DENSITY)),
      );
      return {
        width,
        height,
        points: sampleImage(img, crestHeight, wide ? 5 : 6),
        placement: wide
          ? { cx: width * 0.77, cy: height * 0.52, alpha: 1 }
          : { cx: width * 0.66, cy: height * 0.74, alpha: 0.4 },
        moteColor: readMoteColor(host),
        moteCount,
      };
    };

    const render = () => {
      if (scene) scene.draw(ctx);
    };

    const loop = () => {
      if (!scene) return;
      scene.step();
      scene.draw(ctx);
      frame = requestAnimationFrame(loop);
    };

    const sync = () => {
      const shouldRun = wantsRun && visible && !document.hidden && scene !== null;
      if (shouldRun && !running) {
        running = true;
        frame = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(frame);
      }
    };

    controller.current = {
      start: () => {
        wantsRun = !reduce;
        sync();
      },
      stop: () => {
        wantsRun = false;
        sync();
      },
    };

    const build = async (scattered: boolean) => {
      try {
        image = await loadImage(isDark() ? CREST_DARK : CREST_LIGHT);
      } catch {
        return; // The field is decoration; the hero stands without it.
      }
      if (disposed) return;
      const options = layout(image);
      if (scene) scene.retarget(options);
      else scene = new ParticleScene(options, scattered && !reduce);
      render();
      sync();
    };

    void build(true);

    const onPointer = (event: PointerEvent) => {
      if (!scene || reduce) return;
      const rect = host.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      scene.setPointer(inside ? { x, y } : null);
    };
    const onLeave = () => scene?.setPointer(null);

    let resizeTimer = 0;
    const resize = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (image && scene) {
          scene.retarget(layout(image));
          render();
        }
      }, 120);
    });
    resize.observe(host);

    // The theme toggle swaps a class on <html>: resample the crest in its colours.
    let wasDark = isDark();
    const theme = new MutationObserver(() => {
      if (isDark() === wasDark) return;
      wasDark = isDark();
      void build(false);
    });
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const onScreen = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      sync();
    });
    onScreen.observe(host);

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", sync);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(resizeTimer);
      resize.disconnect();
      theme.disconnect();
      onScreen.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", sync);
      controller.current = null;
    };
  }, []);

  const toggle = () => {
    const next = !paused;
    setPaused(next);
    if (next) controller.current?.stop();
    else controller.current?.start();
    canvasRef.current?.closest("section")?.toggleAttribute("data-paused", next);
  };

  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>
      {motionAllowed ? (
        <button
          type="button"
          onClick={toggle}
          aria-pressed={paused}
          aria-label={paused ? "Play background animation" : "Pause background animation"}
          className="border-hairline-strong text-muted hover:text-ink hover:border-accent absolute right-4 bottom-[calc(var(--sheet-radius)+1rem)] z-10 grid size-9 place-items-center rounded-full border bg-surface/70 backdrop-blur transition-colors duration-200 sm:right-6"
        >
          {paused ? (
            <Play aria-hidden className="size-3.5" />
          ) : (
            <Pause aria-hidden className="size-3.5" />
          )}
        </button>
      ) : null}
    </>
  );
}
