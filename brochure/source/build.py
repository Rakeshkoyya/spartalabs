import re, os
# Fill these in when confirmed; rows are omitted while None.
PHONE = None      # e.g. "+91 98xxx xxxxx"
WHATSAPP = None
# Phosphor icons: `npm pack @phosphor-icons/core` and extract it as ./phosphor
ICONS = "phosphor/assets/regular/"
src = open("brochure.src.html").read()
def svg(name):
    p = f"{ICONS}{name}.svg"
    if not os.path.exists(p): raise SystemExit("missing icon " + name)
    s = open(p).read()
    return re.sub(r"<svg[^>]*>", '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">', s, 1)
src = re.sub(r"\{\{i:([\w-]+)\}\}", lambda m: f'<span class="ico">{svg(m.group(1))}</span>', src)
src = re.sub(r"\{\{box:([\w-]+)\}\}", lambda m: f'<div class="icobox"><span class="ico">{svg(m.group(1))}</span></div>', src)
rows = ""
if PHONE: rows += f'<div class="row"><span class="ico">{svg("phone")}</span><div><small>PHONE</small>{PHONE}</div></div>'
if WHATSAPP: rows += f'<div class="row"><span class="ico">{svg("whatsapp-logo")}</span><div><small>WHATSAPP</small>{WHATSAPP}</div></div>'
src = src.replace("{{phone}}", rows)
assert "—" not in src and "–" not in src, "dash found"
open("brochure.html", "w").write(src)
print("html ok")
