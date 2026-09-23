import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
// card.html -> print PDF (with bleed) + 600 dpi PNGs of each side (with bleed and trimmed).
const out = process.argv[2] || '../business-card';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 360, height: 216 }, deviceScaleFactor: 600 / 96 });
await p.goto('file://' + process.cwd() + '/card.html', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.pdf({ path: `${out}/Sparta-Labs-Business-Card.pdf`, width: '3.75in', height: '2.25in', printBackground: true, preferCSSPageSize: true });
const bleed = 12; // 0.125in in CSS px
for (const [i, side] of [[0, 'front'], [1, 'back']]) {
  const el = (await p.$$('section.card'))[i];
  await el.scrollIntoViewIfNeeded();
  await el.screenshot({ path: `${out}/Sparta-Labs-Card-${side}-bleed.png` });
  const box = await el.boundingBox();
  await p.screenshot({ path: `${out}/Sparta-Labs-Card-${side}.png`, clip: { x: box.x + bleed, y: box.y + bleed, width: box.width - 2 * bleed, height: box.height - 2 * bleed } });
}
await b.close();
