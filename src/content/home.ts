/** Home page copy — docs/SITE-BLUEPRINT.md §4. */

export const heroQuote = "The best software disappears into the way you already work.";

export type Path = {
  audience: string;
  body: string;
  cta: { label: string; href: string };
};

export const paths: Path[] = [
  {
    audience: "For businesses",
    body: "Outgrown spreadsheets and WhatsApp groups? We build one system around how you work.",
    cta: { label: "See services", href: "/services" },
  },
  {
    audience: "For agencies",
    body: "Your client wants software. We build it under your name.",
    cta: { label: "Partner with us", href: "/agencies" },
  },
];

export type WhyPoint = { title: string; body: string };

export const whyPoints: WhyPoint[] = [
  {
    title: "We learn before we code.",
    body: "Every project starts by mapping your real workflow.",
  },
  { title: "One named lead.", body: "You always know who owns your project." },
  { title: "A demo every week.", body: "No big reveal at the end." },
  { title: "You own everything.", body: "Code, designs and accounts. No lock-in." },
];
