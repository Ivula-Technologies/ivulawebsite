import type { LucideIcon } from "lucide-react";
import {
  Users,
  CalendarHeart,
  BarChart3,
  MessagesSquare,
  ShieldCheck,
  Layers,
  Building2,
  HeartHandshake,
  Sprout,
  Church,
  GraduationCap,
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
  /** Short product family label, e.g. "Ivula Canopy". */
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
  /** Product preview asset served from /public/screenshots. */
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
    slug: "canopy",
    name: "Canopy",
    fullName: "Ivula Canopy",
    status: "live",
    tagline:
      "One clear workspace for people-powered organizations.",
    headline: "Run your people-powered programs from one clear workspace.",
    subhead:
      "Ivula Canopy helps nonprofits, churches, youth programs, and community teams manage people, volunteers, events, attendance, announcements, and reports without scattered spreadsheets.",
    description:
      "Canopy replaces disconnected spreadsheets, group chats, and paper records with one dependable source of truth. Give staff and volunteer leaders the context they need to coordinate programs, understand participation, and report with confidence.",
    accent: { from: "#3450a8", to: "#06b0d4" },
    icon: Sprout,
    screenshot: "/screenshots/canopy-dashboard.svg",
    audiences: [
      {
        icon: HeartHandshake,
        label: "Nonprofits & volunteer groups",
        pain: "Coordinate volunteers, attendance, outreach, and leadership reporting without duplicate spreadsheets.",
      },
      {
        icon: Church,
        label: "Churches & ministries",
        pain: "Keep members, ministries, services, events, and care teams visible from one operational workspace.",
      },
      {
        icon: Users,
        label: "Youth & community programs",
        pain: "Organize teams, chapters, activities, and participation as your community grows.",
      },
      {
        icon: GraduationCap,
        label: "Educational programs",
        pain: "Support cohorts, clubs, student groups, and extracurricular programs with clearer records and reporting.",
      },
    ],
    features: [
      {
        icon: Users,
        title: "People directory",
        description:
          "Keep members, volunteers, staff, donors, and stakeholders organized with the context your team needs.",
      },
      {
        icon: Building2,
        title: "Volunteer coordination",
        description:
          "Group people into teams, ministries, committees, projects, or departments with clear leadership assignments.",
      },
      {
        icon: CalendarHeart,
        title: "Events & attendance",
        description:
          "Plan activities, record participation, and understand which programs are keeping people connected.",
      },
      {
        icon: BarChart3,
        title: "Engagement dashboard",
        description:
          "Turn day-to-day activity into useful insight about participation, volunteer activity, and growth.",
      },
      {
        icon: MessagesSquare,
        title: "Announcements",
        description:
          "Reach the right people quickly with centralized updates instead of scattered texts and email threads.",
      },
      {
        icon: ShieldCheck,
        title: "Reports & exports",
        description:
          "Create clear reports and CSV exports for board meetings, team reviews, funders, and operational planning.",
      },
    ],
    steps: [
      {
        title: "Create your workspace",
        description:
          "Set up your nonprofit, church, youth program, or community organization.",
      },
      {
        title: "Bring your people in",
        description:
          "Add members, volunteers, staff, and stakeholders so everyone works from the same list.",
      },
      {
        title: "Coordinate programs",
        description:
          "Create teams, events, shifts, and activities that match how your organization operates.",
      },
      {
        title: "Track participation",
        description:
          "Capture attendance, volunteer hours, and engagement signals as the work happens.",
      },
      {
        title: "Report with confidence",
        description:
          "Use dashboards and exports to brief staff, boards, funders, and program leaders.",
      },
    ],
    stats: [],
    cta: {
      primaryLabel: "Start free for 14 days",
      primaryHref: "https://canopy.ivulatechnologies.com/signup",
      secondaryLabel: "Request a demo",
      secondaryHref:
        "mailto:info@ivulatechnologies.com?subject=Ivula%20Canopy%20demo%20request",
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
      "Canopy is the first of many. We're building a growing family of focused, modern tools for the way organizations actually work.",
    description:
      "Ivula is a product studio. Canopy is our flagship, but it's the first chapter — not the whole story.",
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
      secondaryHref: "/#about",
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
export const flagship = products.find((p) => p.slug === "canopy")!;
