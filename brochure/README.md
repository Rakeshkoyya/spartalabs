# Sparta Labs brochure

- `Sparta-Labs-Brochure.pdf`: the 12-page A4 client brochure.
- `logo/`: logo with the background removed. `logo-full`, `logo-mark` (helmet only) and
  `logo-wordmark`, each with a `-white` variant for dark backgrounds.
- `source/`: everything needed to rebuild the PDF.

## Rebuilding

```bash
cd brochure/source
python3 gen_graphics.py          # optional: regenerate background art (needs numpy, matplotlib, pillow, qrcode)
npm pack @phosphor-icons/core && mkdir phosphor && tar xzf phosphor-icons-core-*.tgz -C phosphor --strip-components=1
python3 build.py                 # brochure.src.html -> brochure.html (inlines icons, fills phone/WhatsApp)
node render.mjs                  # brochure.html -> ../Sparta-Labs-Brochure.pdf (Playwright + Chromium)
```

Contact numbers (`PHONES`) and an optional WhatsApp number are set at the top of `build.py`.
All copy lives in `brochure.src.html`.

## Business card

`business-card/` holds the print-ready card: 3.5 x 2 in (89 x 51 mm) with 0.125 in (3 mm) bleed on every side.

There are two versions; they share the same back and differ only on the front.

- `Sparta-Labs-Business-Card.pdf`: dark version. Page 1 is the front (navy, white logo), page 2 the back (light, contact details).
- `Sparta-Labs-Business-Card-Light.pdf`: light version. Page 1 is the front (soft white-to-ice gradient, original logo), page 2 the same back.
- Each PDF page is 3.75 x 2.25 in including bleed; send one PDF to the printer.
- `Sparta-Labs-Card-front.png`, `-front-light.png`, `-back.png`: 600 dpi images at the final trimmed size, for preview or sharing.
- `...-bleed.png`: the same images with bleed, for printers that want images instead of a PDF.

Rebuild (same icon setup as the brochure):

```bash
cd brochure/source
python3 gen_card_graphics.py     # optional: card backgrounds + vector QR (needs numpy, matplotlib, pillow, qrcode)
python3 build_card.py            # card.src.html -> card.html (name, title, phones, address set at the top)
node render_card.mjs             # card.html -> ../business-card/ (both PDFs + PNGs)
```
