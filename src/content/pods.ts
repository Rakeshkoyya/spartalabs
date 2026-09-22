export type Pod = {
  name: string;
  owns: string;
  /** TODO(content): headcount per pod. Labels without numbers are decoration. */
  headcount: number | null;
};

export const pods: Pod[] = [
  { name: "Product & UX", owns: "Flows, screens and the decision of what not to build", headcount: null },
  { name: "Frontend", owns: "Everything the user touches, down to the focus ring", headcount: null },
  { name: "Backend & platform", owns: "Data models, APIs and the parts that must not lose a record", headcount: null },
  { name: "Mobile", owns: "iOS and Android, from build to store release", headcount: null },
  { name: "AI / ML", owns: "Models pointed at one job, and the evaluation that proves it works", headcount: null },
  { name: "QA & automation", owns: "The test suite, and finding it before your users do", headcount: null },
  { name: "DevOps & cloud", owns: "Deploys, monitoring, cost and the 3am page", headcount: null },
  { name: "Brand & design", owns: "Identity, art direction and the concept the build answers to", headcount: null },
];
