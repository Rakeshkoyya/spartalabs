export type FaqGroup = "business" | "agency";

export type QuestionAnswer = {
  question: string;
  answer: string;
};

export type FaqItem = QuestionAnswer & {
  group: FaqGroup;
  /** Shown in the home page preview. Keep it to four. */
  featured?: boolean;
};

export const faqGroups: { key: FaqGroup; label: string }[] = [
  { key: "business", label: "For businesses" },
  { key: "agency", label: "For agencies" },
];

/**
 * Also feeds the FAQPage JSON-LD on /faq and llms.txt.
 * TODO(content): confirm typical timelines (Q2), time-zone overlap (Q6),
 * payment options (Q7) and quote turnaround in days (Q10).
 */
export const faq: FaqItem[] = [
  {
    group: "business",
    featured: true,
    question: "How much does a project cost?",
    answer:
      "We quote after a free discovery call: a fixed price or a monthly plan, in writing, before any work starts.",
  },
  {
    group: "business",
    featured: true,
    question: "How long does it take?",
    answer:
      "A website usually takes four to six weeks; internal software, three to six months to first release. You get a dated plan after Blueprint.",
  },
  {
    group: "business",
    featured: true,
    question: "Who owns the code?",
    answer: "You do. Code, designs, documents and accounts are handed over on payment.",
  },
  {
    group: "business",
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We connect to Google Workspace, WhatsApp, payment gateways, accounting software and CRMs rather than replacing them.",
  },
  {
    group: "business",
    question: "What happens after launch?",
    answer: "You take it in-house, or keep us on a monthly support plan.",
  },
  {
    group: "business",
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients in India, the US and the UAE, with overlapping hours agreed before the project starts.",
  },
  {
    group: "business",
    question: "How do payments work?",
    answer:
      "Fixed-scope projects are paid by milestone; monthly plans are invoiced monthly. International clients pay by bank transfer.",
  },
  {
    group: "agency",
    featured: true,
    question: "Will my client know you built it?",
    answer: "No. We work under your brand and under NDA.",
  },
  {
    group: "agency",
    question: "Will you ever approach my client?",
    answer: "Never. A non-solicit clause is written into our partner agreement.",
  },
  {
    group: "agency",
    question: "How fast can you quote?",
    answer: "Fast enough for your proposal: a fixed quote and timeline once the brief is clear.",
  },
  {
    group: "agency",
    question: "Can we start small?",
    answer: "Yes. Most partners start with one small paid project.",
  },
  {
    group: "agency",
    question: "Can we get a dedicated developer?",
    answer:
      "Yes. Monthly capacity you assign across your clients, with a named lead reporting to you.",
  },
];

export const featuredFaq = faq.filter((item) => item.featured);
