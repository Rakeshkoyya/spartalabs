import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
// card.html -> one print PDF per front version (with bleed) + 600 dpi PNGs of each side (with bleed and trimmed).
const out = process.argv[2] || '../business-card';
const versions = [
  ['Sparta-Labs-Business-Card.pdf', ['front-dark', 'back']],
  ['Sparta-Labs-Business-Card-Light.pdf', ['front-light', 'back']],
];
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 360, height: 216 }, deviceScaleFactor: 600 / 96 });
await p.goto('file://' + process.cwd() + '/card.html', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
const show = ids => p.evaluate(ids => document.querySelectorAll('section.card').forEach(s => { s.style.display = ids.includes(s.id) ? '' : 'none'; }), ids);
for (const [file, ids] of versions) {
  await show(ids);
  await p.pdf({ path: `${out}/${file}`, width: '3.75in', height: '2.25in', printBackground: true, preferCSSPageSize: true });
}
await show(['front-dark', 'front-light', 'back']);
const bleed = 12; // 0.125in in CSS px
for (const [id, side] of [['front-dark', 'front'], ['front-light', 'front-light'], ['back', 'back']]) {
  const el = await p.$('#' + id);
  await el.scrollIntoViewIfNeeded();
  await el.screenshot({ path: `${out}/Sparta-Labs-Card-${side}-bleed.png` });
  const box = await el.boundingBox();
  await p.screenshot({ path: `${out}/Sparta-Labs-Card-${side}.png`, clip: { x: box.x + bleed, y: box.y + bleed, width: box.width - 2 * bleed, height: box.height - 2 * bleed } });
}
await b.close();
