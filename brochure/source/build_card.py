import re, os
# Fill these in when confirmed; each is omitted while None.
NAME = None      # e.g. "Rakesh Koyya"
TITLE = None     # e.g. "Founder"
PHONES = ["+91 79939 91162", "+91 90305 95999"]
ADDRESS = None   # e.g. "Hyderabad, Telangana"
# Phosphor icons: `npm pack @phosphor-icons/core` and extract it as ./phosphor
ICONS = os.environ.get("PHOSPHOR", "phosphor") + "/assets/regular/"
src = open("card.src.html").read()
def svg(name):
    p = f"{ICONS}{name}.svg"
    if not os.path.exists(p): raise SystemExit("missing icon " + name)
    s = open(p).read()
    return re.sub(r"<svg[^>]*>", '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">', s, 1)
src = re.sub(r"\{\{i:([\w-]+)\}\}", lambda m: f'<span class="ico">{svg(m.group(1))}</span>', src)
person = ""
if NAME: person = f'<div class="person"><b>{NAME}</b>' + (f'<span>{TITLE}</span>' if TITLE else "") + "</div>"
src = src.replace("{{person}}", person)
src = src.replace("{{phone}}", f'<div class="row"><span class="ico">{svg("phone")}</span>{" &nbsp;/&nbsp; ".join(PHONES)}</div>' if PHONES else "")
src = src.replace("{{address}}", f'<div class="row"><span class="ico">{svg("map-pin")}</span>{ADDRESS}</div>' if ADDRESS else "")
src = src.replace("{{qr}}", re.sub(r"<svg[^>]*?(viewBox=\"[^\"]*\")[^>]*>", r'<svg \1 xmlns="http://www.w3.org/2000/svg">', open("img/card-qr.svg").read(), 1))
assert "{{" not in src, "unfilled placeholder"
open("card.html", "w").write(src)
print("card html ok")
