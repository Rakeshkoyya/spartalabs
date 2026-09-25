import re, os, sys
# <deck>.src.html -> <deck>.html, with Phosphor icons inlined and contact rows filled.
# Usage: python3 build_demo.py cafe   (or retail; no argument builds every deck)
# Phosphor icons: `npm pack @phosphor-icons/core` and extract it as ../phosphor (same copy the
# brochure uses), or point PHOSPHOR at an existing copy of its assets/regular folder.
PHONES = ["+91 79939 91162", "+91 90305 95999"]
ICONS = os.environ.get("PHOSPHOR", "../phosphor/assets/regular/").rstrip("/") + "/"
DECKS = sys.argv[1:] or sorted(f[:-9] for f in os.listdir(".") if f.endswith(".src.html"))
def svg(name):
    p = f"{ICONS}{name}.svg"
    if not os.path.exists(p): raise SystemExit("missing icon " + name)
    s = open(p).read()
    return re.sub(r"<svg[^>]*>", '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">', s, 1)
for deck in DECKS:
    src = open(f"{deck}.src.html").read()
    src = re.sub(r"\{\{i:([\w-]+)\}\}", lambda m: f'<span class="ico">{svg(m.group(1))}</span>', src)
    src = re.sub(r"\{\{box:([\w-]+)\}\}", lambda m: f'<div class="icobox"><span class="ico">{svg(m.group(1))}</span></div>', src)
    rows = ""
    if PHONES: rows += f'<div class="row"><span class="ico">{svg("phone")}</span><div><small>CALL US</small>{" &nbsp;/&nbsp; ".join(PHONES)}</div></div>'
    src = src.replace("{{phone}}", rows)
    assert "{{" not in src, f"{deck}: unreplaced placeholder"
    assert "—" not in src and "–" not in src, f"{deck}: dash found"
    open(f"{deck}.html", "w").write(src)
    print(deck, "html ok")
