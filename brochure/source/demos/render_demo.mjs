import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { readdirSync } from 'node:fs';
// <deck>.html -> brochure/demos/<pdf>, a 16:9 deck. Usage: node render_demo.mjs cafe [--png <dir>]
// With no deck name it renders every deck listed below. --png also saves one PNG per slide.
const PDFS = {
  cafe: 'Sparta-Labs-Cafe-Restaurant-Suite-Demo.pdf',
  retail: 'Sparta-Labs-Retail-Store-Suite-Demo.pdf',
};
const args = process.argv.slice(2);
const pi = args.indexOf('--png');
const pngDir = pi >= 0 ? args.splice(pi, 2)[1] : null;
const decks = args.length ? args : Object.keys(PDFS).filter(d => readdirSync('.').includes(`${d}.html`));
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
for (const deck of decks) {
  if (!PDFS[deck]) throw new Error(`no PDF name for deck "${deck}"`);
  await p.goto('file://' + process.cwd() + `/${deck}.html`, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: `../../demos/${PDFS[deck]}`, width: '1600px', height: '900px', printBackground: true, preferCSSPageSize: true });
  if (pngDir) {
    const slides = await p.$$('section.slide');
    for (let i = 0; i < slides.length; i++) await slides[i].screenshot({ path: `${pngDir}/${deck}-${String(i + 1).padStart(2, '0')}.png` });
  }
  console.log(deck, 'pdf ok');
}
await b.close();
