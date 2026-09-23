"""Background art and QR code for the Sparta Labs business card.

Same method as gen_graphics.py (brand palette, procedural flow lines echoing the
helmet crest), sized for a 3.5 x 2 in card with 0.125 in bleed at 600 dpi.
"""
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from PIL import Image
import qrcode
import qrcode.image.svg

OUT = "img/"
W, H = 2250, 1350  # 3.75 x 2.25 in at 600 dpi

NAVY = np.array([6, 13, 26]) / 255
BLUE = np.array([0, 82, 209]) / 255
ELEC = np.array([0, 139, 254]) / 255
CYAN = np.array([25, 190, 255]) / 255
PAPER = np.array([251, 252, 254]) / 255
ICE = np.array([232, 241, 255]) / 255


def blob(cx, cy, rx, ry):
    y, x = np.mgrid[0:H, 0:W]
    return np.exp(-(((x - cx * W) / (rx * W)) ** 2 + ((y - cy * H) / (ry * H)) ** 2))


def grain(arr, amt, seed):
    r = np.random.default_rng(seed)
    return np.clip(arr + (r.random(arr.shape[:2])[..., None] - 0.5) * amt, 0, 1)


def wash(base, spots):
    arr = np.ones((H, W, 3)) * base
    for cx, cy, rx, ry, col, k in spots:
        b = blob(cx, cy, rx, ry)[..., None] * k
        arr = arr * (1 - b) + col * b
    return arr


def flow(ax, n, y0, amp, color, alpha, lw, phase, spread):
    """A bundle of sweeping curves, echoing the crest of the helmet mark."""
    x = np.linspace(-0.1 * W, 1.1 * W, 900)
    segs, cols = [], []
    for i in range(n):
        t = i / max(1, n - 1)
        y = (y0 * H + (t - 0.5) * spread * H * 0.35
             + amp * H * np.sin(x / W * 2.4 + phase + t * 1.3)
             + amp * 0.45 * H * np.sin(x / W * 5.1 + t * 2.0 + phase * 2))
        segs.append(np.column_stack([x, y]))
        cols.append((*color, alpha * (0.3 + 0.7 * np.sin(np.pi * t))))
    ax.add_collection(LineCollection(segs, colors=cols, linewidths=lw))


def lines_layer(bundles):
    fig = plt.figure(figsize=(W / 100, H / 100), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, W); ax.set_ylim(H, 0); ax.axis("off")
    fig.patch.set_alpha(0); ax.patch.set_alpha(0)
    for b in bundles:
        flow(ax, **b)
    fig.canvas.draw()
    a = np.asarray(fig.canvas.buffer_rgba()).astype(float) / 255
    plt.close(fig)
    return a


def over(arr, layer):
    a = layer[..., 3:4]
    return arr * (1 - a) + layer[..., :3] * a


# Front: deep navy, a blue glow rising from the lower right, crest lines sweeping under the logo.
front = wash(NAVY, [
    (0.92, 1.05, 0.55, 0.75, BLUE, 0.85),
    (0.10, -0.10, 0.45, 0.55, np.array([18, 35, 61]) / 255, 0.9),
    (0.55, 0.45, 0.35, 0.45, np.array([11, 30, 70]) / 255, 0.55),
])
front = over(front, lines_layer([
    dict(n=46, y0=0.86, amp=0.07, color=ELEC, alpha=0.55, lw=1.1, phase=0.4, spread=0.55),
    dict(n=22, y0=0.93, amp=0.06, color=CYAN, alpha=0.45, lw=0.9, phase=1.2, spread=0.35),
]))
Image.fromarray((grain(front, 0.014, 5) * 255).astype(np.uint8)).save(OUT + "card-front-bg.jpg", quality=94)

# Front, light version: a soft white-to-ice gradient for the original (dark) logo, crest lines low and faint.
y, x = np.mgrid[0:H, 0:W]
t = np.clip((x / W * 0.55 + y / H * 0.45), 0, 1)[..., None]
light = PAPER * (1 - t) + np.array([214, 232, 255]) / 255 * t
light = light * (1 - blob(0.5, 0.45, 0.42, 0.55)[..., None] * 0.7) + PAPER * blob(0.5, 0.45, 0.42, 0.55)[..., None] * 0.7
light = over(light, lines_layer([
    dict(n=44, y0=0.90, amp=0.07, color=BLUE, alpha=0.30, lw=1.0, phase=0.4, spread=0.55),
    dict(n=20, y0=0.96, amp=0.06, color=ELEC, alpha=0.26, lw=0.8, phase=1.2, spread=0.35),
]))
Image.fromarray((grain(light, 0.006, 7) * 255).astype(np.uint8)).save(OUT + "card-front-light-bg.jpg", quality=94)

# Back: bright paper with a faint ice wash and a quiet bundle of blue lines along the lower edge.
back = wash(PAPER, [
    (1.00, 1.00, 0.55, 0.60, ICE, 0.95),
    (0.00, 0.00, 0.35, 0.40, np.array([240, 245, 252]) / 255, 0.8),
])
back = over(back, lines_layer([
    dict(n=40, y0=0.95, amp=0.06, color=BLUE, alpha=0.26, lw=1.0, phase=2.2, spread=0.5),
    dict(n=18, y0=0.99, amp=0.05, color=ELEC, alpha=0.22, lw=0.8, phase=3.0, spread=0.3),
]))
Image.fromarray((grain(back, 0.006, 9) * 255).astype(np.uint8)).save(OUT + "card-back-bg.jpg", quality=94)

# Vector QR so it prints sharp at any size.
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=0)
qr.add_data("https://spartalabs.in")
svg = qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).to_string(encoding="unicode")
open(OUT + "card-qr.svg", "w").write(svg.replace('fill="#000000"', 'fill="#0B1627"'))
print("card graphics ok")
