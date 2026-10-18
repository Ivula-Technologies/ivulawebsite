import type { LucideIcon } from "lucide-react";
import {
  Target,
  HandCoins,
  KeyRound,
  LifeBuoy,
  Globe2,
  Compass,
} from "lucide-react";

/** Why Ivula exists. Shown on the homepage and on /about. */
export const vision = {
  title: "Our vision",
  statement:
    "Software made in Africa that small teams everywhere rely on every day.",
  detail:
    "We believe the organizations that hold communities together, from churches and family businesses to law firms and homeschooling families, deserve tools as good as the ones big companies use. We want to be the team that builds them.",
};

export const mission = {
  title: "Our mission",
  statement:
    "Build focused, fairly priced software for the teams big software ignores, and run it as carefully as if it were our own business.",
  detail:
    "We pick one real problem for one kind of team, solve it well, charge an honest price and stay around to support it. The same team then builds, hosts and looks after software for our clients.",
};

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: Target,
    title: "Solve a real problem first",
    description: "Every product starts with a team that is losing time, money or sleep, not with a technology looking for a use.",
  },
  {
    icon: HandCoins,
    title: "Honest pricing",
    description: "Clear prices, free trials without a card, and the same price when you renew.",
  },
  {
    icon: KeyRound,
    title: "You own what is yours",
    description: "Your data, your code and your domain stay yours. Leaving us is always easy.",
  },
  {
    icon: LifeBuoy,
    title: "Build it, run it, support it",
    description: "We host and support what we ship, so we feel every bug and fix it fast.",
  },
  {
    icon: Globe2,
    title: "From Nairobi to the world",
    description: "We build in Kenya and sell in the US and Africa, with card, PayPal and M-Pesa.",
  },
  {
    icon: Compass,
    title: "Small steps, shipped often",
    description: "Working software every week beats a perfect plan that never launches.",
  },
];

export interface JourneyItem {
  when: string;
  title: string;
  description: string;
}

/** Everything we have built so far, oldest first. */
export const journey: JourneyItem[] = [
  {
    when: "2022",
    title: "Ivula is founded in Nairobi",
    description: "Started with one idea: small organizations deserve software as well made as big companies get.",
  },
  {
    when: "Client work",
    title: "Code Joy Academy and its learning platform",
    description: "An admissions website for an online school, then a secure LMS for classes, assignments and families.",
  },
  {
    when: "First product",
    title: "Youth Blossom becomes Ivula Canopy",
    description: "A youth program dashboard grew into Canopy, volunteer and member management for churches and nonprofits.",
  },
  {
    when: "Hackathon",
    title: "Uhuru: Eyes of the Land",
    description: "An educational game prototype about Kenya's history, told through families, work and community life.",
  },
  {
    when: "Oct 2026",
    title: "Canopy goes paid",
    description: "Starter, Growth and Pro plans, with founding-church pricing for the first congregations.",
  },
  {
    when: "Oct 2026",
    title: "LeadFast AI, ProposalKit and ShelfKeeper",
    description: "Instant lead replies for contractors, proposals with deposits for freelancers, and book sharing for families.",
  },
  {
    when: "Oct 2026",
    title: "WakiliNivo for law firms",
    description: "Clients and KYC, conflict checks, matters, court diary, files and undertakings for Kenyan practice.",
  },
  {
    when: "Oct 2026",
    title: "Ivula Care Plans and Ivula Hosting",
    description: "Managed website care for US businesses, and cPanel hosting paid by card or M-Pesa at ivulahosting.co.ke.",
  },
  {
    when: "Oct 2026",
    title: "A website for an accounting, tax and ESG firm",
    description: "A custom WordPress theme with services, industries, an insights hub and a proposal request flow.",
  },
];

/** Where we are going. Ambitions, not promises. */
export const dreams: { title: string; description: string }[] = [
  {
    title: "Our first million dollars",
    description: "Earned from products customers renew every month, not from one big contract.",
  },
  {
    title: "Every product standing on its own",
    description: "Each product profitable, with its own customers, its own support and its own team.",
  },
  {
    title: "The practice system Kenyan firms choose",
    description: "WakiliNivo running the daily work of law firms across Kenya, then East Africa.",
  },
  {
    title: "A home for every family's bookshelf",
    description: "ShelfKeeper as the place homeschooling families find, lend and pass on books.",
  },
  {
    title: "The first call for small teams",
    description: "When a founder, church or firm needs software, Ivula is who they think of first.",
  },
  {
    title: "Proof it can be built here",
    description: "World-class software, designed and built in Nairobi, used by people around the world.",
  },
];
