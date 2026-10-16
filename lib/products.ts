import type { LucideIcon } from "lucide-react";
import {
  Users,
  CalendarHeart,
  BarChart3,
  MessagesSquare,
  ShieldCheck,
  Building2,
  HeartHandshake,
  Sprout,
  Church,
  GraduationCap,
  Zap,
  Hammer,
  Wrench,
  Home,
  Mail,
  Inbox,
  Clock,
  FileSignature,
  PenLine,
  Wallet,
  FileText,
  Briefcase,
  Palette,
  BookOpen,
  ScanBarcode,
  BellRing,
  Smartphone,
  Library,
  Scale,
  Landmark,
  Gavel,
  FolderLock,
  CalendarClock,
  Fingerprint,
} from "lucide-react";

/**
 * ============================================================================
 *  PRODUCTS = DATA, NOT PAGES
 * ============================================================================
 *  To add a product, append an object to the `products` array below. The
 *  /products grid, the /products/[slug] detail page, the homepage product
 *  family, the footer and the sitemap all render from here.
 *
 *  status:
 *    "live"         taking paying customers today
 *    "early-access" built, opening to a first group of customers
 *    "coming-soon"  in active development; the page collects interest
 * ============================================================================
 */

export type ProductStatus = "live" | "early-access" | "coming-soon";

export const statusLabel: Record<ProductStatus, string> = {
  live: "Live",
  "early-access": "Early access",
  "coming-soon": "Coming soon",
};

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

export interface ProductPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  featured?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  /** Product name as customers see it, e.g. "Ivula Canopy". */
  fullName: string;
  status: ProductStatus;
  /** Who it is for, in a few words (cards and the hero switcher). */
  category: string;
  /** Where we sell it first. */
  market: string;
  /** One-line elevator pitch (used on cards). */
  tagline: string;
  /** Hero headline on the product detail page. */
  headline: string;
  /** Hero subhead on the product detail page. */
  subhead: string;
  /** Brand colours taken from the product's own logo. */
  accent: { from: string; to: string };
  icon: LucideIcon;
  /** Product logo mark in /public/brands. Falls back to the icon. */
  logo?: string;
  /** Wide wordmark in /public/brands, shown on the detail page. */
  wordmark?: string;
  /** Screenshot of the product in /public/screenshots. */
  screenshot: string;
  /** Domain shown in the browser frame. */
  domain: string;
  /** Short "from" price for cards, e.g. "From $29/mo". */
  priceFrom: string;
  plans: ProductPlan[];
  pricingNote: string;
  audienceTitle: string;
  audiences: ProductAudience[];
  features: ProductFeature[];
  steps: ProductStep[];
  closing: { title: string; body: string; points: string[] };
  cta: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}

const email = "info@ivulatechnologies.com";
const mailto = (subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const products: Product[] = [
  {
    slug: "canopy",
    name: "Canopy",
    fullName: "Ivula Canopy",
    status: "live",
    category: "Churches & nonprofits",
    market: "United States",
    tagline:
      "Volunteers, members, events and attendance for churches and nonprofits, in one clear workspace.",
    headline: "Run your people-powered programs from one clear workspace.",
    subhead:
      "Canopy helps churches, nonprofits, youth programs and community teams manage people, volunteers, events, attendance, announcements and reports without scattered spreadsheets.",
    accent: { from: "#1f5c3f", to: "#d99a2b" },
    icon: Sprout,
    logo: "/brands/canopy-mark.svg",
    screenshot: "/screenshots/canopy.webp",
    domain: "canopy.ivulatechnologies.com",
    priceFrom: "From $29/mo",
    plans: [
      { name: "Starter", price: "$29", period: "/mo", description: "Up to 150 people" },
      { name: "Growth", price: "$59", period: "/mo", description: "Up to 750 people", featured: true },
      { name: "Pro", price: "$119", period: "/mo", description: "Unlimited people" },
    ],
    pricingNote:
      "14-day free trial, no card needed. Founding churches get 50% off for their first 12 months.",
    audienceTitle: "Built for people-powered organizations",
    audiences: [
      {
        icon: Church,
        label: "Churches & ministries",
        pain: "Keep members, ministries, services, events and care teams visible from one workspace.",
      },
      {
        icon: HeartHandshake,
        label: "Nonprofits & volunteer groups",
        pain: "Coordinate volunteers, attendance and reporting without duplicate spreadsheets.",
      },
      {
        icon: Users,
        label: "Youth & community programs",
        pain: "Organize teams, chapters, activities and participation as your community grows.",
      },
      {
        icon: GraduationCap,
        label: "Educational programs",
        pain: "Support cohorts, clubs and student groups with clearer records and reporting.",
      },
    ],
    features: [
      {
        icon: Users,
        title: "People directory",
        description:
          "Members, volunteers, staff and donors organized with the context your team needs.",
      },
      {
        icon: Building2,
        title: "Volunteer coordination",
        description:
          "Group people into teams, ministries and committees with clear leaders.",
      },
      {
        icon: CalendarHeart,
        title: "Events & attendance",
        description:
          "Plan activities, record participation and see which programs keep people connected.",
      },
      {
        icon: BarChart3,
        title: "Engagement dashboard",
        description:
          "Turn day-to-day activity into insight about participation and growth.",
      },
      {
        icon: MessagesSquare,
        title: "Announcements",
        description:
          "Reach the right people with one update instead of scattered texts and email threads.",
      },
      {
        icon: ShieldCheck,
        title: "Reports & exports",
        description:
          "Clear reports and CSV exports for board meetings, funders and planning.",
      },
    ],
    steps: [
      { title: "Create your workspace", description: "Set up your church or organization in minutes." },
      { title: "Bring your people in", description: "Add members, volunteers and staff so everyone works from one list." },
      { title: "Coordinate programs", description: "Create teams, events and shifts that match how you operate." },
      { title: "Report with confidence", description: "Brief your board, funders and leaders from live dashboards." },
    ],
    closing: {
      title: "Ready to ditch the spreadsheet chaos?",
      body: "Try Canopy with your own organization for 14 days. No credit card required.",
      points: ["14-day free trial", "No credit card", "Built for lean teams"],
    },
    cta: {
      primaryLabel: "Start free for 14 days",
      primaryHref: "https://canopy.ivulatechnologies.com/signup",
      secondaryLabel: "Request a demo",
      secondaryHref: mailto("Ivula Canopy demo request"),
    },
  },
  {
    slug: "leadfast",
    name: "LeadFast AI",
    fullName: "LeadFast AI",
    status: "early-access",
    category: "Home service contractors",
    market: "United States",
    tagline:
      "Replies to every new lead in seconds with a personal, AI-written message, so contractors win the job first.",
    headline: "Answer every lead before your competitor even sees it.",
    subhead:
      "LeadFast AI catches the enquiries from your website form, writes a personal reply in your voice, sends it in seconds and keeps every lead in one private dashboard.",
    accent: { from: "#3b0764", to: "#f5a800" },
    icon: Zap,
    logo: "/brands/leadfast-icon.webp",
    wordmark: "/brands/leadfast-logo.webp",
    screenshot: "/screenshots/leadfast.webp",
    domain: "leadfast.ivulatechnologies.com",
    priceFrom: "From $49/mo",
    plans: [
      { name: "Starter", price: "$49", period: "/mo", description: "100 instant replies a month" },
      { name: "Pro", price: "$99", period: "/mo", description: "Unlimited instant replies", featured: true },
    ],
    pricingNote: "14-day free trial, no card needed. Cancel any time.",
    audienceTitle: "Built for crews who are on the job, not at a desk",
    audiences: [
      {
        icon: Hammer,
        label: "Remodelers & builders",
        pain: "Big-ticket leads go to whoever answers first. LeadFast answers while you are on site.",
      },
      {
        icon: Wrench,
        label: "Plumbers, HVAC & electricians",
        pain: "Urgent jobs cannot wait for an evening callback. Customers hear back in seconds.",
      },
      {
        icon: Home,
        label: "Roofers, landscapers & cleaners",
        pain: "Seasonal rushes bury the inbox. Every lead still gets a fast, personal reply.",
      },
    ],
    features: [
      {
        icon: Inbox,
        title: "Instant lead capture",
        description: "Connect your website form and every enquiry lands in LeadFast the moment it is sent.",
      },
      {
        icon: Zap,
        title: "AI-written replies",
        description: "A personal reply that mentions the job, written in your business voice.",
      },
      {
        icon: Mail,
        title: "Sent in seconds",
        description: "The reply is emailed automatically, day or night, while you keep working.",
      },
      {
        icon: Clock,
        title: "Speed-to-lead tracking",
        description: "See how fast each lead was answered and which ones still need a call.",
      },
      {
        icon: ShieldCheck,
        title: "Private by design",
        description: "Each business sees only its own leads, enforced in the database.",
      },
      {
        icon: BarChart3,
        title: "One lead dashboard",
        description: "Every enquiry and reply in one place, instead of scattered across inboxes.",
      },
    ],
    steps: [
      { title: "Connect your form", description: "Point your website contact form at LeadFast." },
      { title: "Set your voice", description: "Tell it your services, area and how you like to sound." },
      { title: "Win the first reply", description: "Every new lead gets an answer in seconds, every time." },
    ],
    closing: {
      title: "The first contractor to reply usually wins the job.",
      body: "Join early access and let LeadFast answer your next lead in seconds.",
      points: ["14-day free trial", "No credit card", "Set up in an afternoon"],
    },
    cta: {
      primaryLabel: "Get early access",
      primaryHref: mailto("LeadFast AI early access"),
      secondaryLabel: "Visit LeadFast AI",
      secondaryHref: "https://leadfast.ivulatechnologies.com",
    },
  },
  {
    slug: "shelfkeeper",
    name: "ShelfKeeper",
    fullName: "ShelfKeeper",
    status: "early-access",
    category: "Homeschooling families",
    market: "United States and Kenya",
    tagline:
      "A community where homeschooling families borrow, buy and sell the books their children need, from other parents nearby.",
    headline: "The right books for your kids, from families like yours.",
    subhead:
      "ShelfKeeper is a social platform for homeschooling families. List the books on your shelves, borrow from other parents for a small fee, or buy and sell the ones your children have outgrown.",
    accent: { from: "#0f2747", to: "#f5b301" },
    icon: BookOpen,
    logo: "/brands/shelfkeeper-icon.webp",
    wordmark: "/brands/shelfkeeper-logo.webp",
    screenshot: "/screenshots/shelfkeeper.webp",
    domain: "shelfkeeper.ivulatechnologies.com",
    priceFrom: "Free to join",
    plans: [
      { name: "Free", price: "$0", description: "Join, browse and list up to 50 books" },
      { name: "Pro", price: "$5", period: "/mo", description: "Up to 1,000 books", featured: true },
      { name: "Co-op Host", price: "$15", period: "/mo", description: "Unlimited books and 5 helpers for a co-op" },
    ],
    pricingNote:
      "Pay by card or PayPal, or with M-Pesa in Kenya. Borrowing fees are set by the family lending the book.",
    audienceTitle: "Made for homeschooling families and co-ops",
    audiences: [
      { icon: Home, label: "Homeschooling parents", pain: "Find the next book in the curriculum without paying full price for something used for one term." },
      { icon: Users, label: "Homeschool co-ops", pain: "Pool your families' shelves into one library the whole group can borrow from." },
      { icon: GraduationCap, label: "Growing readers", pain: "Keep good books moving to the next child instead of sitting in a box." },
      { icon: Library, label: "Families with full shelves", pain: "Lend for a small fee or sell the books your children have outgrown." },
    ],
    features: [
      {
        icon: Library,
        title: "Browse nearby shelves",
        description: "See what other families have to lend or sell, by grade, subject or curriculum.",
      },
      {
        icon: BookOpen,
        title: "Borrow for a small fee",
        description: "Borrow from another parent at the fee they set, with due dates and deposits recorded.",
      },
      {
        icon: Wallet,
        title: "Buy and sell",
        description: "Pass on outgrown books and pick up the ones you need, family to family.",
      },
      {
        icon: ScanBarcode,
        title: "Scan to list",
        description: "Scan a barcode with your phone and the title, author and cover fill in for you.",
      },
      {
        icon: BellRing,
        title: "Automatic reminders",
        description: "Borrowers get a friendly email before, on and after the due date.",
      },
      {
        icon: Smartphone,
        title: "Card, PayPal or M-Pesa",
        description: "Pay the way that works where you live, including M-Pesa in Kenya.",
      },
    ],
    steps: [
      { title: "Join free", description: "Create your family's shelf, no card needed." },
      { title: "List your books", description: "Scan them in and mark each one to lend, sell or keep." },
      { title: "Borrow, buy or sell", description: "Find what your children need from families like yours." },
    ],
    closing: {
      title: "Every good book deserves a second reader.",
      body: "Join the families building ShelfKeeper's homeschool community, free to start.",
      points: ["Free to join", "Families only, private by default", "No card needed"],
    },
    cta: {
      primaryLabel: "Join ShelfKeeper",
      primaryHref: "https://shelfkeeper.ivulatechnologies.com",
      secondaryLabel: "Ask a question",
      secondaryHref: mailto("ShelfKeeper question"),
    },
  },
  {
    slug: "proposalkit",
    name: "ProposalKit",
    fullName: "ProposalKit",
    status: "coming-soon",
    category: "Freelancers & consultants",
    market: "United States",
    tagline:
      "Proposal, contract, e-signature and deposit in one link, so freelancers get a yes and get paid faster.",
    headline: "Send one link. Get the signature and the deposit.",
    subhead:
      "ProposalKit lets freelancers and consultants write a proposal, attach the contract, collect an e-signature and take the deposit, all from one shareable link your client opens without an account.",
    accent: { from: "#0f1a3e", to: "#00c2ff" },
    icon: FileSignature,
    screenshot: "/screenshots/proposalkit.webp",
    domain: "proposalkit.ivulatechnologies.com",
    priceFrom: "From $29/mo",
    plans: [
      { name: "Solo", price: "$29", period: "/mo", description: "10 new proposals a month" },
      { name: "Pro", price: "$59", period: "/mo", description: "Unlimited proposals, your brand only", featured: true },
    ],
    pricingNote: "Launch pricing. 14-day free trial, no card needed.",
    audienceTitle: "For independents who sell their own work",
    audiences: [
      { icon: Palette, label: "Designers & creatives", pain: "Stop chasing signatures over email and PDFs." },
      { icon: Briefcase, label: "Consultants", pain: "Look polished from the first proposal to the paid deposit." },
      { icon: PenLine, label: "Developers & agencies", pain: "Get the deposit in before the work starts, every time." },
    ],
    features: [
      {
        icon: FileText,
        title: "Block editor and templates",
        description: "Write proposals fast from templates you can make your own.",
      },
      {
        icon: FileSignature,
        title: "E-signature",
        description: "Clients draw or type their signature, with a full audit trail.",
      },
      {
        icon: Wallet,
        title: "Deposit on signing",
        description: "The deposit is paid at signature and goes straight to your bank through Stripe.",
      },
      {
        icon: Mail,
        title: "Signed PDF to both sides",
        description: "Both parties get the signed copy by email automatically.",
      },
      {
        icon: BarChart3,
        title: "Pipeline at a glance",
        description: "See which proposals are sent, viewed, signed and paid.",
      },
      {
        icon: ShieldCheck,
        title: "No client login",
        description: "Your client opens one secure link. Nothing to install, nothing to sign up for.",
      },
    ],
    steps: [
      { title: "Write the proposal", description: "Start from a template and add your scope and price." },
      { title: "Share one link", description: "Your client reads, signs and pays from the same page." },
      { title: "Start the work paid", description: "The deposit lands in your bank and both sides get the PDF." },
    ],
    closing: {
      title: "Be first in line when ProposalKit opens.",
      body: "Join the waitlist and we will email you the day it launches, with launch pricing locked in.",
      points: ["Launch pricing", "14-day free trial", "Made for US freelancers"],
    },
    cta: {
      primaryLabel: "Join the waitlist",
      primaryHref: mailto("ProposalKit waitlist"),
      secondaryLabel: "Ask a question",
      secondaryHref: mailto("ProposalKit question"),
    },
  },
  {
    slug: "wakilinivo",
    name: "WakiliNivo",
    fullName: "WakiliNivo",
    status: "early-access",
    category: "Law firms",
    market: "Kenya first",
    tagline:
      "Practice management for law firms: clients and KYC, conflict checks, matters, court diary, files and undertakings.",
    headline: "The whole law firm, in one secure system.",
    subhead:
      "WakiliNivo brings client intake and KYC, conflict checks, matters, the court diary and bring-ups, physical files, safe custody, mail and undertakings into one platform built for how Kenyan firms work.",
    accent: { from: "#14254a", to: "#c9a227" },
    icon: Scale,
    logo: "/brands/wakilinivo-icon.webp",
    wordmark: "/brands/wakilinivo-logo.webp",
    screenshot: "/screenshots/wakilinivo.webp",
    domain: "wakilinivo.com",
    priceFrom: "Early access",
    plans: [],
    pricingNote:
      "Opening to a first group of firms. Pricing is per firm, agreed during onboarding.",
    audienceTitle: "Built for firms of every size",
    audiences: [
      { icon: Landmark, label: "Partners", pain: "See every matter, deadline and undertaking across the firm." },
      { icon: Gavel, label: "Advocates & pupils", pain: "Never miss a court date, bring-up or critical deadline." },
      { icon: FolderLock, label: "Registry & admin", pain: "Know where every physical file and deed is, and who has it." },
    ],
    features: [
      {
        icon: Fingerprint,
        title: "Clients and KYC",
        description: "Intake with duplicate detection, KYC checklists, risk rating and PEP flags.",
      },
      {
        icon: ShieldCheck,
        title: "Conflict checks",
        description: "Fuzzy matching on names, IDs and KRA PINs, with ethical walls and an audited override.",
      },
      {
        icon: Briefcase,
        title: "Matters",
        description: "Templates for conveyancing, litigation, banking and debt recovery that set up the work.",
      },
      {
        icon: CalendarClock,
        title: "Court diary and bring-ups",
        description: "Court dates, cause lists, clash warnings and bring-ups that escalate on time.",
      },
      {
        icon: FolderLock,
        title: "Files and safe custody",
        description: "Barcode file register, check-out history and a safe custody register.",
      },
      {
        icon: Mail,
        title: "Mail and undertakings",
        description: "Route incoming mail, diarise served documents and track undertakings to discharge.",
      },
    ],
    steps: [
      { title: "Set up your firm", description: "Branches, roles and permissions, with two-factor sign-in." },
      { title: "Bring in your matters", description: "Import clients and open files with KYC and conflicts cleared." },
      { title: "Run the diary", description: "Every open file has a next date, and nothing slips." },
    ],
    closing: {
      title: "Bring your firm onto WakiliNivo early.",
      body: "We are onboarding a first group of firms in Kenya. Tell us about your practice.",
      points: ["Built for Kenyan practice", "Bank-grade access rules", "Full audit trail"],
    },
    cta: {
      primaryLabel: "Request early access",
      primaryHref: mailto("WakiliNivo early access"),
      secondaryLabel: "Visit wakilinivo.com",
      secondaryHref: "https://wakilinivo.com",
    },
  },
];

/** Lookup helper for the [slug] route. */
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Kept for callers that resolved teasers separately. */
export const getAnyProduct = getProduct;

/** Slugs that should be statically generated. */
export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

/** The flagship product, surfaced prominently on the homepage. */
export const flagship = products.find((p) => p.slug === "canopy")!;
