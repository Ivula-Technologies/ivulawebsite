import type { LucideIcon } from "lucide-react";
import {
  Users,
  Wallet,
  CalendarHeart,
  BarChart3,
  MessagesSquare,
  ShieldCheck,
  Megaphone,
  Layers,
  Building2,
  HeartHandshake,
  Sprout,
  Church,
} from "lucide-react";

/**
 * ============================================================================
 *  PRODUCTS = DATA, NOT PAGES
 * ============================================================================
 *  To add a new product, append an object to the `products` array below.
 *  Everything else — the /products grid, the /products/[slug] detail page,
 *  and the homepage "Our products" section — renders automatically from here.
 *
 *  Set `status: "coming-soon"` to show a teaser card with no detail page.
 * ============================================================================
 */

export type ProductStatus = "live" | "beta" | "coming-soon";

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductAudience {
  icon: LucideIcon;
  label: string;
  pain: string;
}

export interface ProductStep {
  title: string;
  description: string;
}

export interface ProductStat {
  /** Numeric target for the animated counter. */
  value: number;
  /** Optional suffix, e.g. "%", "x", "k". */
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Short product family label, e.g. "Ivula Cannopy". */
  fullName: string;
  status: ProductStatus;
  /** One-line elevator pitch (used on cards). */
  tagline: string;
  /** Hero headline on the product detail page. */
  headline: string;
  /** Hero subhead on the product detail page. */
  subhead: string;
  /** Longer paragraph used in overview sections. */
  description: string;
  /** Brand accent for the product (tailwind-friendly hsl pair). */
  accent: {
    from: string;
    to: string;
  };
  icon: LucideIcon;
  /** Placeholder screenshot — swap the file in /public/screenshots. */
  screenshot: string;
  audiences: ProductAudience[];
  features: ProductFeature[];
  steps: ProductStep[];
  stats: ProductStat[];
  /** Primary CTA target for this product. */
  cta: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}

export const products: Product[] = [
  {
    slug: "cannopy",
    name: "Cannopy",
    fullName: "Ivula Cannopy",
    status: "live",
    tagline:
      "All-in-one organization management for member-based communities.",
    headline: "Manage your members, money, and momentum — all in one place.",
    subhead:
      "Ivula Cannopy is the all-in-one platform for churches, nonprofits, youth groups, and cooperatives to manage members, track contributions, and grow engagement — without the spreadsheet chaos.",
    description:
      "Cannopy replaces the tangle of spreadsheets, group chats, and paper records that member-based organizations rely on. Keep one trusted record of every member, track every contribution, run events and communications, and see your community's health at a glance.",
    accent: { from: "#3450a8", to: "#06b0d4" },
    icon: Sprout,
    screenshot: "/screenshots/cannopy-dashboard.svg",
    audiences: [
      {
        icon: Church,
        label: "Churches & faith communities",
        pain: "Tithes in a notebook, members in your head, and no clear picture of who's drifting away.",
      },
      {
        icon: HeartHandshake,
        label: "Nonprofits & NGOs",
        pain: "Donor records scattered across spreadsheets and inboxes when your funders want clean reports.",
      },
      {
        icon: Users,
        label: "Youth & community groups",
        pain: "Chasing dues over WhatsApp and losing track of who showed up to what.",
      },
      {
        icon: Building2,
        label: "Cooperatives & SACCOs",
        pain: "Member contributions and balances that are painful to reconcile and easy to dispute.",
      },
    ],
    features: [
      {
        icon: Users,
        title: "Member directory",
        description:
          "One trusted, searchable record for every member — profiles, roles, groups, attendance, and history.",
      },
      {
        icon: Wallet,
        title: "Contributions & dues",
        description:
          "Record tithes, donations, dues, and pledges. See who's paid, who's pending, and full giving history.",
      },
      {
        icon: CalendarHeart,
        title: "Events & attendance",
        description:
          "Plan services, meetings, and programs. Track attendance and follow up with people who miss out.",
      },
      {
        icon: MessagesSquare,
        title: "Communications",
        description:
          "Reach the right group with announcements and reminders — no more copy-pasting across chats.",
      },
      {
        icon: BarChart3,
        title: "Insights & reports",
        description:
          "Growth, giving, and engagement trends in clear dashboards. Export clean reports for your board or funders.",
      },
      {
        icon: ShieldCheck,
        title: "Roles & permissions",
        description:
          "Give treasurers, admins, and leaders exactly the access they need — your data stays protected.",
      },
    ],
    steps: [
      {
        title: "Add your members",
        description:
          "Import a spreadsheet or add members in minutes. Cannopy becomes your single source of truth.",
      },
      {
        title: "Track money & activity",
        description:
          "Log contributions, run events, and send communications — everything connected to the right people.",
      },
      {
        title: "Watch momentum grow",
        description:
          "See engagement and giving trends, spot who needs follow-up, and make confident decisions.",
      },
    ],
    stats: [
      { value: 1, suffix: "", label: "Single source of truth" },
      { value: 90, suffix: "%", label: "Less spreadsheet wrangling" },
      { value: 60, suffix: "s", label: "To send an announcement" },
      { value: 24, suffix: "/7", label: "Access from any device" },
    ],
    cta: {
      primaryLabel: "Start free trial",
      primaryHref: "/pricing",
      secondaryLabel: "Request a demo",
      secondaryHref: "/contact",
    },
  },
  // ---------------------------------------------------------------------------
  // Future products: copy the shape above. A "coming-soon" product renders a
  // teaser card and is excluded from the [slug] detail routes automatically.
  // ---------------------------------------------------------------------------
  {
    slug: "more",
    name: "More on the way",
    fullName: "The Ivula family is growing",
    status: "coming-soon",
    tagline:
      "We're building a family of focused products for organizations worldwide.",
    headline: "More products are on the way.",
    subhead:
      "Cannopy is the first of many. We're building a growing family of focused, modern tools for the way organizations actually work.",
    description:
      "Ivula is a product studio. Cannopy is our flagship, but it's the first chapter — not the whole story.",
    accent: { from: "#16224a", to: "#506dc2" },
    icon: Layers,
    screenshot: "/screenshots/coming-soon.svg",
    audiences: [],
    features: [],
    steps: [],
    stats: [],
    cta: {
      primaryLabel: "Get product updates",
      primaryHref: "/contact",
      secondaryLabel: "See our vision",
      secondaryHref: "/#vision",
    },
  },
];

/** All products that have a real detail page. */
export const liveProducts = products.filter((p) => p.status !== "coming-soon");

/** Lookup helper for the [slug] route (live products only). */
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.status !== "coming-soon");
}

/** Lookup any product by slug, including coming-soon teasers. */
export function getAnyProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Slugs that should be statically generated. */
export function getProductSlugs(): string[] {
  return liveProducts.map((p) => p.slug);
}

/** The flagship product, surfaced prominently on the homepage. */
export const flagship = products.find((p) => p.slug === "cannopy")!;

/** Icons re-exported for the homepage audience/feature sections. */
export const audienceIcons = { Church, HeartHandshake, Users, Building2 };
export const trustIcon = ShieldCheck;
export const marketingIcon = Megaphone;
