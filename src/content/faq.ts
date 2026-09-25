export type FaqItem = {
  question: string;
  answer: string;
};

/** Also feeds FAQPage JSON-LD. Underrated trust engine, free structured data. */
export const faq: FaqItem[] = [
  {
    question: "Where is Sparta Labs based?",
    answer:
      "Hyderabad, Telangana. We meet clients in person across Hyderabad and Secunderabad, from HITEC City and Gachibowli to Banjara Hills and Kukatpally, and work remotely with businesses across India and abroad. We are not connected to other companies that share the name.",
  },
  {
    question: "Who owns the code we pay for?",
    answer:
      "You do. Full source handover, documented, deployed to your own infrastructure if you want it there. No licence to renew, no dependency on us to keep running what you paid for.",
  },
  {
    question: "How do you price a project?",
    answer:
      "Three models. Fixed scope where the requirement is genuinely settled, a dedicated pod on a monthly rate where it will evolve, and a retainer for systems we already run. We tell you which one fits after discovery, not before.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A marketing site is four to six weeks. A custom platform is three to six months to first release, then continuous. We give you a dated plan at the end of discovery and tell you the week a date is at risk, not the week it slips.",
  },
  {
    question: "Will you sign an NDA?",
    answer: "Before the first call, not after. Send yours or use ours.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Monitoring, security patching and iteration under a support agreement with response times written into it. Launch is the middle of the engagement, not the end.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes, and often that is the better shape. We have run as the whole build team, as a pod alongside an in-house team, and as the people who take over a system someone else left behind.",
  },
  {
    question: "Do you take on existing systems?",
    answer:
      "Yes. We start with an audit that tells you plainly what is worth keeping, what needs replacing and what it will cost — including the case for doing nothing, where that is the honest answer.",
  },
  {
    question: "How do we start?",
    answer:
      "One call, no deck. You describe the problem, we tell you whether we are the right people for it. If we are not, we will say so.",
  },
];
