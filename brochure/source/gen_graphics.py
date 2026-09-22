"""Procedural background art for the Sparta Labs brochure.

Everything is rendered from code in the brand palette (logo navy + logo blues),
so the brochure carries no stock-photo licensing questions.
"""
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from PIL import Image, ImageFilter
import qrcode

OUT = "img/"
rng = np.random.default_rng(7)

NAVY = np.array([6, 13, 26]) / 255
INK = np.array([11, 22, 39]) / 255
BLUE = np.array([0, 82, 209]) / 255
ELEC = np.array([0, 139, 254]) / 255
CYAN = np.array([25, 190, 255]) / 255


def smooth_noise(h, w, scale, seed):
    r = np.random.default_rng(seed)
    small = r.random((max(2, h // scale), max(2, w // scale))).astype(np.float32)
    img = Image.fromarray(small, mode="F").resize((w, h), Image.BICUBIC)
    return np.asarray(img).astype(float)


def blob(h, w, cx, cy, rx, ry):
    y, x = np.mgrid[0:h, 0:w]
    return np.exp(-(((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2))


def grain(arr, amt=0.018, seed=1):
    r = np.random.default_rng(seed)
    return np.clip(arr + (r.random(arr.shape[:2])[..., None] - 0.5) * amt, 0, 1)


def save_rgb(arr, name, q=90):
    Image.fromarray((np.clip(arr, 0, 1) * 255).astype(np.uint8)).save(OUT + name, quality=q)


def aurora(h, w, spots, base=NAVY, seed=3):
    arr = np.ones((h, w, 3)) * base
    for (cx, cy, rx, ry, col, k) in spots:
        b = blob(h, w, cx * w, cy * h, rx * w, ry * h)[..., None] * k
        arr = arr * (1 - b) + col * b
    return grain(arr, seed=seed)


def flow_lines(ax, w, h, n, y0, amp, color, alpha, lw, phase=0.0, spread=1.0, seed=0):
    """A bundle of sweeping curves, echoing the crest of the helmet mark."""
    r = np.random.default_rng(seed)
    x = np.linspace(-0.1 * w, 1.1 * w, 600)
    segs, cols = [], []
    for i in range(n):
        t = i / max(1, n - 1)
        off = (t - 0.5) * spread * h * 0.35
        y = (y0 * h + off
             + amp * h * np.sin(x / w * 2.4 + phase + t * 1.3)
             + amp * 0.45 * h * np.sin(x / w * 5.1 + t * 2.0 + phase * 2))
        pts = np.column_stack([x, y])
        segs.append(pts)
        a = alpha * (0.35 + 0.65 * np.sin(np.pi * t))
        cols.append((*color, a))
    ax.add_collection(LineCollection(segs, colors=cols, linewidths=lw))


def canvas(w, h, dpi=100):
    fig = plt.figure(figsize=(w / dpi, h / dpi), dpi=dpi)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, w); ax.set_ylim(h, 0); ax.axis("off")
    fig.patch.set_alpha(0); ax.patch.set_alpha(0)
    return fig, ax


def fig_to_arr(fig):
    fig.canvas.draw()
    a = np.asarray(fig.canvas.buffer_rgba()).astype(float) / 255
    plt.close(fig)
    return a


def over(base, top):
    a = top[..., 3:4]
    return base * (1 - a) + top[..., :3] * a


W, H = 1588, 2246  # A4 at 2x CSS pixels

# 1. Cover: deep navy aurora with a sweeping line bundle
cov = aurora(H, W, [
    (0.85, 0.18, 0.55, 0.30, BLUE, 0.85),
    (1.00, 0.05, 0.30, 0.18, CYAN, 0.55),
    (0.10, 0.95, 0.60, 0.25, BLUE, 0.45),
    (0.55, 0.55, 0.40, 0.30, INK, 0.6),
])
fig, ax = canvas(W, H)
flow_lines(ax, W, H, 46, 0.62, 0.10, CYAN, 0.55, 1.4, phase=0.4, spread=1.4, seed=1)
flow_lines(ax, W, H, 30, 0.70, 0.12, ELEC, 0.5, 1.2, phase=1.6, spread=1.0, seed=2)
save_rgb(over(cov, fig_to_arr(fig)), "bg-cover.jpg")

# 2. Dark section background (quieter aurora)
dark = aurora(H, W, [
    (0.0, 0.0, 0.55, 0.35, BLUE, 0.55),
    (1.05, 1.0, 0.55, 0.35, ELEC, 0.35),
], seed=5)
fig, ax = canvas(W, H)
flow_lines(ax, W, H, 36, 0.88, 0.06, CYAN, 0.32, 1.2, phase=2.2, spread=0.6, seed=4)
save_rgb(over(dark, fig_to_arr(fig)), "bg-dark.jpg")

# 3. Back cover
back = aurora(H, W, [
    (0.5, 1.05, 0.9, 0.45, BLUE, 0.9),
    (0.5, 1.15, 0.5, 0.25, CYAN, 0.6),
    (0.0, 0.0, 0.5, 0.3, INK, 0.5),
], seed=9)
fig, ax = canvas(W, H)
flow_lines(ax, W, H, 50, 0.74, 0.07, CYAN, 0.45, 1.3, phase=3.0, spread=1.0, seed=6)
save_rgb(over(back, fig_to_arr(fig)), "bg-back.jpg")

# 4. Topographic contour lines (transparent, for light pages)
def contours(name, w, h, color, alpha, seed, levels=22, lw=1.6):
    z = smooth_noise(h, w, 520, seed) * 0.8 + smooth_noise(h, w, 260, seed + 1) * 0.2
    fig, ax = canvas(w, h)
    ax.contour(np.arange(w), np.arange(h), z, levels=levels, colors=[(*color, alpha)], linewidths=lw)
    Image.fromarray((fig_to_arr(fig) * 255).astype(np.uint8)).save(OUT + name)

contours("topo-blue.png", W, H, BLUE, 0.16, 11)
contours("topo-light.png", W, H, CYAN, 0.10, 21)

# 5. Network constellation (transparent) for the AI tile and the method page
def network(name, w, h, n, color, seed, k=3, dot=3.0):
    r = np.random.default_rng(seed)
    pts = r.random((n, 2)) * [w, h]
    fig, ax = canvas(w, h)
    segs = []
    for i, p in enumerate(pts):
        d = np.linalg.norm(pts - p, axis=1)
        for j in np.argsort(d)[1:k + 1]:
            segs.append([p, pts[j]])
    ax.add_collection(LineCollection(segs, colors=[(*color, 0.35)], linewidths=0.8))
    sizes = r.random(n) * dot * 8 + dot
    ax.scatter(pts[:, 0], pts[:, 1], s=sizes, color=[(*color, 0.9)], linewidths=0)
    hub = r.choice(n, 6, replace=False)
    ax.scatter(pts[hub, 0], pts[hub, 1], s=160, color=[(*CYAN, 0.18)], linewidths=0)
    Image.fromarray((fig_to_arr(fig) * 255).astype(np.uint8)).save(OUT + name)

network("net-light.png", 1200, 900, 70, (0.62, 0.85, 1.0), 3)
network("net-blue.png", 1200, 900, 60, BLUE, 8)

# 6. Glow tiles for the services grid
for i, spots in enumerate([
    [(0.9, 0.1, 0.7, 0.6, BLUE, 0.95), (1.0, 0.0, 0.35, 0.3, CYAN, 0.7)],
    [(0.1, 1.0, 0.8, 0.7, BLUE, 0.9), (0.0, 1.1, 0.3, 0.3, ELEC, 0.6)],
    [(0.5, 1.2, 1.0, 0.8, ELEC, 0.8)],
]):
    save_rgb(aurora(700, 900, spots, base=INK, seed=20 + i), f"tile-{i}.jpg")

# 7. Crest flow band (transparent) used as a divider graphic
fig, ax = canvas(1600, 500)
flow_lines(ax, 1600, 500, 60, 0.5, 0.16, ELEC, 0.45, 1.0, phase=0.8, spread=0.9, seed=12)
flow_lines(ax, 1600, 500, 30, 0.5, 0.2, CYAN, 0.35, 0.8, phase=2.1, spread=0.7, seed=13)
Image.fromarray((fig_to_arr(fig) * 255).astype(np.uint8)).save(OUT + "flow-band.png")

# 8. QR code to the website
qr = qrcode.QRCode(border=1, box_size=12, error_correction=qrcode.constants.ERROR_CORRECT_M)
qr.add_data("https://spartalabs.in")
qr.make(fit=True)
qr.make_image(fill_color=(11, 22, 39), back_color=(244, 247, 252)).save(OUT + "qr.png")
print("done")
