/**
 * What we have shipped and what we are building now. Shown on the homepage
 * and on /roadmap. Keep it honest: move items to "shipped" only when they are
 * merged and running.
 */
export type RoadmapStage = "shipped" | "building" | "next";

export interface RoadmapItem {
  title: string;
  product: string;
  description: string;
  stage: RoadmapStage;
  /** Month the item shipped or is planned for, e.g. "Oct 2026". */
  when?: string;
}

export const roadmapStageLabel: Record<RoadmapStage, string> = {
  shipped: "Shipped",
  building: "Building now",
  next: "Up next",
};

export const roadmap: RoadmapItem[] = [
  {
    title: "Paid plans and founding-church pricing",
    product: "Ivula Canopy",
    description: "Starter, Growth and Pro plans with a 14-day trial and 50% off for founding churches.",
    stage: "shipped",
    when: "Oct 2026",
  },
  {
    title: "Private lead data, sign-in and billing",
    product: "LeadFast AI",
    description: "Every business sees only its own leads, with Stripe billing and a no-card trial.",
    stage: "shipped",
    when: "Oct 2026",
  },
  {
    title: "Book lending with card, PayPal and M-Pesa",
    product: "ShelfKeeper",
    description: "Barcode scanning, lending with reminders, team helpers and three ways to pay.",
    stage: "shipped",
    when: "Oct 2026",
  },
  {
    title: "Core legal workflow",
    product: "WakiliNivo",
    description: "Clients and KYC, conflict checks, matters, court diary, files, safe custody and mail.",
    stage: "shipped",
    when: "Oct 2026",
  },
  {
    title: "Managed website care",
    product: "Ivula Care Plans",
    description: "Hosting, updates, backups and monthly edits from $49 a month.",
    stage: "shipped",
    when: "Oct 2026",
  },
  {
    title: "Deposits paid on signature",
    product: "ProposalKit",
    description: "Clients sign and pay the deposit in one step, straight to the freelancer's bank.",
    stage: "building",
  },
  {
    title: "Documents, imports and reports",
    product: "WakiliNivo",
    description: "Document templates, data import from old systems and firm-wide reports.",
    stage: "building",
  },
  {
    title: "Self-serve hosting with M-Pesa",
    product: "Ivula Hosting",
    description: "Order cPanel hosting online and pay by card in USD or M-Pesa in KES.",
    stage: "building",
  },
  {
    title: "Homeschool book community",
    product: "ShelfKeeper",
    description: "Families borrow from each other for a small fee, and buy and sell the books their children outgrow.",
    stage: "building",
  },
  {
    title: "Public launch",
    product: "LeadFast AI",
    description: "Opening sign-ups to contractors across the US after early access.",
    stage: "building",
  },
  {
    title: "AI proposal writer",
    product: "ProposalKit",
    description: "Paste a client brief and get a complete first draft of the proposal.",
    stage: "next",
  },
  {
    title: "Billing, trust accounts and client portal",
    product: "WakiliNivo",
    description: "Time and fee notes, client accounts and a portal for clients to follow their matters.",
    stage: "next",
  },
];
