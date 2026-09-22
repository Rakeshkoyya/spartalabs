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
