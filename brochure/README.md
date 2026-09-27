# Sparta Labs brochure

- `Sparta-Labs-Brochure.pdf`: the 12-page A4 client brochure.
- `logo/`: logo with the background removed. `logo-full`, `logo-mark` (helmet only) and
  `logo-wordmark`, each with a `-white` variant for dark backgrounds.
- `demos/`: product demo decks to walk a client through sample screens, one PDF per business type.
- `source/`: everything needed to rebuild the PDFs.

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

## Product demo decks

`demos/` holds 16:9 slide decks that show sample screens of what we can build for a type of business.
Each slide pairs a screen mockup with numbered callouts and a plain-language explanation, so a client
with no tech background can follow along. They work on a screen in a meeting or sent as a PDF.

- `Sparta-Labs-Cafe-Restaurant-Suite-Demo.pdf`: cafes and restaurants (15 slides). Website, counter and
  kitchen screens, loyalty app, cowork booking, events, inventory, finance analytics, billing.
- `Sparta-Labs-Retail-Store-Suite-Demo.pdf`: fashion and footwear stores (16 slides). Shopify store and
  custom theme, Shopify sync with the shop floor, shopping app, loyalty and next-visit coupons, new arrival
  alerts, billing counter, size and colour inventory, customer CRM, sales analytics, add-ons.

The sample brands inside the screens (Kaapi & Co., Stride & Thread) are made up, and all numbers are samples.

Sources live in `source/demos/`: one `<deck>.src.html` per deck, plus `demo.css` and `demo.js` shared by
all of them (slide layout, device frames, and the numbered callouts, placed from `data-cb` attributes).
Each deck sets its sample brand's colours with the `--k-*` variables at the top of its file.

```bash
cd brochure/source/demos         # needs ../phosphor, same icon setup as the brochure
python3 build_demo.py            # every <deck>.src.html -> <deck>.html (or name one: build_demo.py retail)
node render_demo.mjs             # every deck -> ../../demos/*.pdf (add --png <dir> for slide previews)
```

To add a deck for a new business type, copy a `.src.html`, change the brand variables and screens, and add
its PDF name to `PDFS` in `render_demo.mjs`.
