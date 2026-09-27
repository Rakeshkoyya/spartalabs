// Numbered callouts: any element with data-cb="N" gets a badge on its edge.
// data-at = tl | tr | bl | br | l | r | t | b (default tl); data-dx / data-dy nudge it.
// Placed once web fonts are in, so the badges line up with the final text layout.
document.fonts.ready.then(() => document.querySelectorAll('[data-cb]').forEach(el => {
  const stage = el.closest('.stage'), s = stage.getBoundingClientRect(), r = el.getBoundingClientRect();
  const at = el.dataset.at || 'tl';
  let x = at.includes('r') ? r.right : at.includes('l') ? r.left : (r.left + r.right) / 2;
  let y = at.includes('b') ? r.bottom : at.includes('t') ? r.top : (r.top + r.bottom) / 2;
  const i = document.createElement('i');
  i.className = 'cb'; i.textContent = el.dataset.cb;
  i.style.left = (x - s.left - 16 + (+el.dataset.dx || 0)) + 'px';
  i.style.top = (y - s.top - 16 + (+el.dataset.dy || 0)) + 'px';
  stage.appendChild(i);
}));
