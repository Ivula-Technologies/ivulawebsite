import type { LucideIcon } from "lucide-react";
import { Rocket, ShieldCheck, Server } from "lucide-react";
import type { ProductStatus } from "@/lib/products";

/**
 * The three ways to buy from Ivula besides the products: custom builds,
 * managed care for an existing site, and self-serve hosting.
 */
export interface Offer {
  slug: "studio" | "care-plans" | "hosting";
  icon: LucideIcon;
  name: string;
  status: ProductStatus;
  audience: string;
  price: string;
  priceNote: string;
  description: string;
  points: string[];
  href: string;
  cta: string;
}

export const offers: Offer[] = [
  {
    slug: "studio",
    icon: Rocket,
    name: "Ivula Studio",
    status: "live",
    audience: "Founders and growing businesses",
    price: "From $7,500",
    priceNote: "Fixed price, 50% to start",
    description:
      "The team behind our products builds yours: a SaaS MVP, an AI automation or an internal tool, scoped and priced up front.",
    points: [
      "Free written estimate within one business day",
      "Working software to review every week",
      "You own all the code, designs and accounts",
    ],
    href: "/services",
    cta: "Start a project",
  },
  {
    slug: "care-plans",
    icon: ShieldCheck,
    name: "Ivula Care Plans",
    status: "live",
    audience: "Small businesses with a website",
    price: "From $49/mo",
    priceNote: "Per site, no long-term contract",
    description:
      "Managed hosting, updates, backups, security and a team on call for edits, so your website is never the thing that breaks.",
    points: [
      "Free migration from your current host",
      "Daily off-site backups and uptime monitoring",
      "Monthly edit hours on Growth and Commerce",
    ],
    href: "/care-plans",
    cta: "See care plans",
  },
  {
    slug: "hosting",
    icon: Server,
    name: "Ivula Hosting",
    status: "early-access",
    audience: "Do-it-yourself site owners",
    price: "From $59/yr",
    priceNote: "Or KES 2,999/yr with M-Pesa",
    description:
      "Fast cPanel hosting with free SSL, email and one-click WordPress, at the same honest price every year you renew.",
    points: [
      "cPanel, free SSL and business email",
      "One-click WordPress and daily backups",
      "Pay by card in USD or M-Pesa in KES",
    ],
    href: "/hosting",
    cta: "See hosting plans",
  },
];

export type Currency = "usd" | "kes";

export interface HostingPlan {
  name: string;
  sites: number;
  disk: string;
  price: Record<Currency, string>;
  monthlyUsd: string;
  featured?: boolean;
}

/** Self-serve Ivula Hosting plans. Prices must match the Boche repo README. */
export const hostingPlans: HostingPlan[] = [
  {
    name: "Starter",
    sites: 1,
    disk: "5 GB",
    price: { usd: "$59", kes: "KES 2,999" },
    monthlyUsd: "$7",
  },
  {
    name: "Business",
    sites: 3,
    disk: "15 GB",
    price: { usd: "$119", kes: "KES 4,999" },
    monthlyUsd: "$13",
    featured: true,
  },
  {
    name: "Pro",
    sites: 10,
    disk: "30 GB",
    price: { usd: "$199", kes: "KES 9,999" },
    monthlyUsd: "$22",
  },
];

export const hostingIncluded = [
  "cPanel control panel",
  "Free SSL on every domain",
  "Business email accounts",
  "One-click WordPress (Softaculous)",
  "Daily backups",
  "Cloudflare CDN",
  "Ticket support, answered within one business day",
  "Same price when you renew",
] as const;
