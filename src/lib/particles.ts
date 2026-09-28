/**
 * The hero's particle scene, framework-free so it can be reasoned about (and
 * tested) apart from React.
 *
 * Two populations share one canvas:
 * - "dots" are sampled from the crest image and spring back to their place in
 *   it, so the mark reassembles after the pointer scatters it;
 * - "motes" drift freely and link up into a loose network when near each
 *   other or the pointer — the "one connected system" idea, as texture.
 */

export type Rgb = readonly [number, number, number];

export type CrestPoint = { x: number; y: number; fill: string };

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  fill: string;
};

type Mote = { x: number; y: number; vx: number; vy: number };

export type CrestPlacement = {
  /** Centre of the crest, in CSS pixels. */
  cx: number;
  cy: number;
  /** Dot opacity; lowered where the crest sits behind text. */
  alpha: number;
};

export type SceneOptions = {
  width: number;
  height: number;
  points: CrestPoint[];
  placement: CrestPlacement;
  moteColor: Rgb;
  moteCount: number;
};

const SPRING = 0.055;
const DAMPING = 0.84;
const POINTER_RADIUS = 110;
const POINTER_FORCE = 7;
const DOT_SIZE = 1.8;
const MOTE_SPEED = 0.28;
const MOTE_LINK = 120;
const POINTER_LINK = 170;
const MOTE_REPEL = 0.9;

/**
 * Samples an image's opaque pixels on a grid, centred on the origin. `height`
 * is the rendered crest height in CSS pixels; `gap` is the grid step.
 */
export function sampleImage(image: HTMLImageElement, height: number, gap: number): CrestPoint[] {
  const width = Math.round((image.naturalWidth / image.naturalHeight) * height);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = Math.round(height);
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx || width === 0) return [];

  ctx.drawImage(image, 0, 0, width, canvas.height);
  const { data } = ctx.getImageData(0, 0, width, canvas.height);
  const points: CrestPoint[] = [];

  for (let y = 0; y < canvas.height; y += gap) {
    for (let x = 0; x < width; x += gap) {
      const i = (y * width + x) * 4;
      if (data[i + 3] < 140) continue;
      points.push({
        x: x - width / 2,
        y: y - canvas.height / 2,
        fill: `rgb(${data[i]} ${data[i + 1]} ${data[i + 2]})`,
      });
    }
  }
  return points;
}

export class ParticleScene {
  private dots: Dot[] = [];
  private motes: Mote[] = [];
  private pointer: { x: number; y: number } | null = null;
  private options: SceneOptions;

  constructor(options: SceneOptions, scattered: boolean) {
    this.options = options;
    this.dots = this.buildDots(options, scattered);
    this.motes = Array.from({ length: options.moteCount }, () => this.newMote());
  }

  /** Re-targets the crest (after a resize) without restarting the motion. */
  retarget(options: SceneOptions) {
    const previous = this.dots;
    this.options = options;
    this.dots = this.buildDots(options, false).map((dot, index) => {
      const old = previous[index];
      return old ? { ...dot, x: old.x, y: old.y, vx: old.vx, vy: old.vy } : dot;
    });
    const { moteCount } = options;
    this.motes = this.motes.slice(0, moteCount);
    while (this.motes.length < moteCount) this.motes.push(this.newMote());
  }

  setPointer(point: { x: number; y: number } | null) {
    this.pointer = point;
  }

  step() {
    const { width, height } = this.options;
    const pointer = this.pointer;

    for (const dot of this.dots) {
      dot.vx += (dot.tx - dot.x) * SPRING;
      dot.vy += (dot.ty - dot.y) * SPRING;
      if (pointer) {
        const dx = dot.x - pointer.x;
        const dy = dot.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < POINTER_RADIUS && distance > 0.01) {
          const push = (1 - distance / POINTER_RADIUS) * POINTER_FORCE;
          dot.vx += (dx / distance) * push;
          dot.vy += (dy / distance) * push;
        }
      }
      dot.vx *= DAMPING;
      dot.vy *= DAMPING;
      dot.x += dot.vx;
      dot.y += dot.vy;
    }

    for (const mote of this.motes) {
      if (pointer) {
        const dx = mote.x - pointer.x;
        const dy = mote.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < POINTER_RADIUS && distance > 0.01) {
          mote.x += (dx / distance) * MOTE_REPEL;
          mote.y += (dy / distance) * MOTE_REPEL;
        }
      }
      mote.x += mote.vx;
      mote.y += mote.vy;
      if (mote.x < -10) mote.x = width + 10;
      if (mote.x > width + 10) mote.x = -10;
      if (mote.y < -10) mote.y = height + 10;
      if (mote.y > height + 10) mote.y = -10;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { width, height, moteColor, placement } = this.options;
    const [r, g, b] = moteColor;
    ctx.clearRect(0, 0, width, height);

    // Links between nearby motes, and from motes to the pointer.
    ctx.lineWidth = 1;
    const motes = this.motes;
    for (let i = 0; i < motes.length; i++) {
      const a = motes[i];
      for (let j = i + 1; j < motes.length; j++) {
        const c = motes[j];
        const distance = Math.hypot(a.x - c.x, a.y - c.y);
        if (distance > MOTE_LINK) continue;
        ctx.strokeStyle = `rgb(${r} ${g} ${b} / ${(1 - distance / MOTE_LINK) * 0.28})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(c.x, c.y);
        ctx.stroke();
      }
      if (this.pointer) {
        const distance = Math.hypot(a.x - this.pointer.x, a.y - this.pointer.y);
        if (distance < POINTER_LINK) {
          ctx.strokeStyle = `rgb(${r} ${g} ${b} / ${(1 - distance / POINTER_LINK) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(this.pointer.x, this.pointer.y);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = `rgb(${r} ${g} ${b} / 0.55)`;
    for (const mote of motes) {
      ctx.beginPath();
      ctx.arc(mote.x, mote.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = placement.alpha;
    for (const dot of this.dots) {
      ctx.fillStyle = dot.fill;
      ctx.fillRect(dot.x - DOT_SIZE / 2, dot.y - DOT_SIZE / 2, DOT_SIZE, DOT_SIZE);
    }
    ctx.globalAlpha = 1;
  }

  private buildDots(options: SceneOptions, scattered: boolean): Dot[] {
    const { points, placement, width, height } = options;
    return points.map((point) => {
      const tx = placement.cx + point.x;
      const ty = placement.cy + point.y;
      return {
        x: scattered ? Math.random() * width : tx,
        y: scattered ? Math.random() * height : ty,
        vx: 0,
        vy: 0,
        tx,
        ty,
        fill: point.fill,
      };
    });
  }

  private newMote(): Mote {
    const angle = Math.random() * Math.PI * 2;
    const speed = MOTE_SPEED * (0.4 + Math.random() * 0.6);
    return {
      x: Math.random() * this.options.width,
      y: Math.random() * this.options.height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    };
  }
}
