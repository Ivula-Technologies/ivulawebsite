import type { LucideIcon } from "lucide-react";
import {
  ArchiveRestore,
  Gauge,
  HardDrive,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  Activity,
  FileBarChart,
} from "lucide-react";

export type Billing = "monthly" | "annual";

export interface CarePlan {
  slug: "essential" | "growth" | "commerce";
  name: string;
  /** Price per site in USD. Annual = 10 × monthly (two months free). */
  monthly: number;
  annual: number;
  tagline: string;
  features: string[];
  featured?: boolean;
  /**
   * Stripe Payment Links. The site is a static export, so checkout runs on
   * Stripe-hosted pages. Create one Payment Link per plan and cycle in the
   * Stripe dashboard and set these at build time. When a link is missing,
   * the plan button scrolls to the sign-up form instead.
   */
  checkout: Record<Billing, string>;
}

export const carePlans: CarePlan[] = [
  {
    slug: "essential",
    name: "Essential",
    monthly: 49,
    annual: 490,
    tagline: "Fast, secure hosting with the updates handled.",
    features: [
      "Managed cloud hosting on US servers",
      "Free SSL and CDN",
      "Daily off-site backups, kept 30 days",
      "Core, theme and plugin updates",
      "24/7 uptime monitoring and alerts",
      "Free migration from your current host",
    ],
    checkout: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_ESSENTIAL_MONTHLY ?? "",
      annual: process.env.NEXT_PUBLIC_STRIPE_LINK_ESSENTIAL_ANNUAL ?? "",
    },
  },
  {
    slug: "growth",
    name: "Growth",
    monthly: 99,
    annual: 990,
    tagline: "Everything in Essential, plus a team on call for changes.",
    features: [
      "Everything in Essential",
      "1 hour of content or design edits each month",
      "Weekly malware and security scans",
      "Speed tuning and Core Web Vitals checks",
      "Monthly performance report",
      "Next-business-day response",
    ],
    featured: true,
    checkout: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_GROWTH_MONTHLY ?? "",
      annual: process.env.NEXT_PUBLIC_STRIPE_LINK_GROWTH_ANNUAL ?? "",
    },
  },
  {
    slug: "commerce",
    name: "Commerce",
    monthly: 199,
    annual: 1990,
    tagline: "For stores and booking sites that cannot go down.",
    features: [
      "Everything in Growth",
      "3 hours of edits or small features each month",
      "WooCommerce, checkout and payment monitoring",
      "Staging site for safe changes",
      "Hourly backups during business hours",
      "Priority response within 4 business hours",
    ],
    checkout: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_COMMERCE_MONTHLY ?? "",
      annual: process.env.NEXT_PUBLIC_STRIPE_LINK_COMMERCE_ANNUAL ?? "",
    },
  },
];

export const careIncluded: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: HardDrive,
    title: "Managed cloud hosting",
    description:
      "Your site runs on dedicated cloud servers in US data centers, not crowded shared hosting.",
  },
  {
    icon: RefreshCw,
    title: "Updates, tested first",
    description:
      "We update WordPress, themes and plugins, and check the site after every update.",
  },
  {
    icon: ArchiveRestore,
    title: "Backups you can rely on",
    description:
      "Daily off-site backups with a restore tested every month, so a bad day is an hour, not a week.",
  },
  {
    icon: ShieldCheck,
    title: "Security and malware cleanup",
    description:
      "Firewall, scans and free cleanup if anything gets through while you are on a plan.",
  },
  {
    icon: Activity,
    title: "Uptime monitoring",
    description:
      "We are alerted within minutes if your site goes down, and we start fixing it before you notice.",
  },
  {
    icon: Gauge,
    title: "Speed tuning",
    description:
      "Caching, image optimization and a CDN keep pages fast for visitors and for Google.",
  },
  {
    icon: LockKeyhole,
    title: "You own everything",
    description:
      "Your domain, content and code stay yours. Leave any time and we hand over a full backup.",
  },
  {
    icon: FileBarChart,
    title: "Plain-English reports",
    description:
      "A short monthly note on what we updated, fixed and improved, with your uptime and speed.",
  },
];

export const careSteps = [
  {
    title: "Pick a plan",
    description: "Subscribe online, or send the form and we will reply within one business day.",
  },
  {
    title: "We move your site",
    description: "Free migration from your current host, with no downtime and no work on your side.",
  },
  {
    title: "We look after it",
    description: "Updates, backups, monitoring and your monthly edits, handled every month.",
  },
] as const;

export const careFaqs = [
  {
    question: "Which sites do you host?",
    answer:
      "WordPress and WooCommerce sites, static sites, and web apps we have built. If your site runs on something else, tell us on the form and we will confirm before you pay.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long-term contract. Monthly plans cancel any time before the next billing date. Annual plans are paid upfront and include two months free.",
  },
  {
    question: "What happens to unused edit hours?",
    answer:
      "Edit hours reset each month. Larger work, like a redesign or a new feature, is quoted separately before we start.",
  },
  {
    question: "What if my site is hacked?",
    answer:
      "If your site is on a plan and gets compromised, we clean it up and restore it at no extra cost. If it was hacked before joining, we quote the cleanup first.",
  },
  {
    question: "When is support available?",
    answer:
      "Support runs Monday to Friday, 8am to 6pm US Eastern. Uptime monitoring runs 24/7, and an outage jumps to the front of the queue.",
  },
  {
    question: "Do you work with agencies?",
    answer:
      "Yes. Agencies and freelancers can resell our care plans under their own brand at partner pricing. We stay invisible to your clients.",
  },
] as const;
