export type ProjectMediaKind = "dashboard" | "photo" | "portal" | "site";

export interface Project {
  slug:
    | "canopy"
    | "kisumu-health"
    | "vemi-logistics"
    | "vlc-logistics"
    | "ack-aqua-hub"
    | "demosh-designs"
    | "security-ops"
    | "code-joy-academy"
    | "code-joy-lms"
    | "advisory-firm";
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  domain: string;
  media: string;
  mediaAlt: string;
  mediaKind: ProjectMediaKind;
  tags: readonly string[];
  /** Short case-study breakdown shown on the work cards. */
  challenge: string;
  solution: string;
  outcome: string;
  /** True when the client's name is kept off the site. */
  clientPrivate?: boolean;
  /** Optional recorded demo (e.g. a Loom link). */
  demo?: string;
}

/**
 * Selected work shown on the homepage. Keep external URLs here so project
 * cards, navigation, and structured content always point to one source.
 */
export const projects: readonly Project[] = [
  {
    slug: "canopy",
    eyebrow: "Ivula product",
    title: "Ivula Canopy",
    description:
      "One workspace for the people, events, attendance, communication, and insights that keep a community organization moving.",
    href: "https://canopy.ivulatechnologies.com/",
    domain: "canopy.ivulatechnologies.com",
    media: "/screenshots/canopy.webp",
    mediaAlt: "The Ivula Canopy website for churches and nonprofits",
    mediaKind: "dashboard",
    tags: ["SaaS product", "Operations", "Reporting"],
    challenge:
      "Community organizations were tracking members, volunteers, and attendance across spreadsheets, chat groups, and paper.",
    solution:
      "A SaaS workspace for people, events, attendance, announcements, and reports.",
    outcome:
      "Live in production with self-serve sign-up and a 14-day free trial.",
  },
  {
    slug: "kisumu-health",
    eyebrow: "Health referral app with AI",
    title: "Kisumu Mental Health Linkage",
    description:
      "A working prototype for a community mental health programme in Kisumu's informal settlements, built for the Adventist Community Development Organization (ACDO) West Kenya with the Kisumu County Department of Health.",
    domain: "Working prototype",
    media: "/projects/kisumu-health.webp",
    mediaAlt: "Kisumu Mental Health Linkage dashboard with referrals and follow-ups (synthetic data)",
    mediaKind: "site",
    tags: ["Health", "AI drafting", "Referrals"],
    challenge:
      "People screened in the community were referred on paper and often never reached care, and nobody could see where they dropped out.",
    solution:
      "Electronic referrals ranked by service, open slots and travel time, appointment reminders, tracing of missed visits, feedback to the referrer and an emergency path to an on-call clinician. Fixed rules decide; AI only drafts notes and weekly briefs.",
    outcome: "Prototype built on synthetic data for the county pilot proposal.",
    demo: "https://www.loom.com/share/36fb3b152d874cfc9159dbb9b590ed02",
  },
  {
    slug: "vemi-logistics",
    eyebrow: "Logistics marketplace",
    title: "Vemi Logistics",
    description:
      "A marketplace where businesses book verified trucks across East Africa, compare bids, pay by M-Pesa and follow the load on a map.",
    href: "https://vemi-logistics.vercel.app/",
    domain: "vemi-logistics.vercel.app",
    media: "/projects/vemi-logistics.webp",
    mediaAlt: "Vemi Logistics homepage with the headline Book a verified truck in minutes, not days",
    mediaKind: "site",
    tags: ["Web and Android app", "M-Pesa", "Kiswahili"],
    challenge:
      "Shippers spent days phoning brokers for a truck, while truck owners drove home empty after every delivery.",
    solution:
      "Shipper and carrier apps with checked carriers, bids, live trips, part loads, return loads, border papers and M-Pesa payouts, plus Android apps.",
    outcome:
      "Built and in testing with shippers and carriers before launch.",
  },
  {
    slug: "vlc-logistics",
    eyebrow: "Clearing and transport website",
    title: "VLC Logistics",
    description:
      "A six-page website for a Kenyan customs clearing and transport company, from the port to the customer's door.",
    href: "https://vlc-logistics.vercel.app/",
    domain: "vlc-logistics.vercel.app",
    media: "/projects/vlc-logistics.webp",
    mediaAlt: "VLC Logistics homepage with the headline Cleared, moved and delivered",
    mediaKind: "site",
    tags: ["Website", "Quote requests", "WhatsApp"],
    challenge:
      "A new clearing company needed to look established and make it easy for importers to ask for a quote.",
    solution:
      "Pages for customs, transport and warehousing, an East Africa route map, and quote buttons that open WhatsApp with the message already written.",
    outcome: "Live at vlc-logistics.vercel.app.",
  },
  {
    slug: "ack-aqua-hub",
    eyebrow: "Swim school website",
    title: "ACK Aqua Hub",
    description:
      "A bright website for a swimming, fitness and calisthenics centre in Lower Kabete, with prices, hours and booking by WhatsApp.",
    href: "https://ack-aqua-hub.vercel.app/",
    domain: "ack-aqua-hub.vercel.app",
    media: "/projects/ack-aqua-hub.webp",
    mediaAlt: "ACK Aqua Hub homepage with the headline Learn, Train, Transform",
    mediaKind: "site",
    tags: ["Website", "Video hero", "WhatsApp booking"],
    challenge:
      "Parents and swimmers kept calling to ask about prices, opening hours and how to book a lesson.",
    solution:
      "A multi-page site with video, clear prices and hours, and a message builder that books lessons on WhatsApp.",
    outcome: "Live at ack-aqua-hub.vercel.app.",
  },
  {
    slug: "demosh-designs",
    eyebrow: "Print and apparel website",
    title: "Demosh Designs",
    description:
      "A colourful website for a Lower Kabete studio that makes apparel, branding, personalised gifts and printing.",
    domain: "Launching soon",
    media: "/projects/demosh-designs.webp",
    mediaAlt: "Demosh Designs homepage with the headline Your idea, made real in apparel",
    mediaKind: "site",
    tags: ["Website", "Product catalogue", "Cyber services"],
    challenge:
      "Customers found the studio by word of mouth and had no single place to see products, prices and printing services.",
    solution:
      "Product and cyber-services pages with prices, a gallery, and quote requests that go straight to WhatsApp.",
    outcome: "Built and preparing to launch on the studio's own domain.",
  },
  {
    slug: "security-ops",
    eyebrow: "Security operations software",
    title: "Service and maintenance system",
    description:
      "A working demo for a Kenyan security installer: every client site, CCTV camera, fence and fire alarm in one system, from service visit to invoice.",
    domain: "Working demo",
    media: "/projects/security-ops.webp",
    mediaAlt: "Security operations demo with the headline Every site you protect, run from one system",
    mediaKind: "site",
    tags: ["Operations", "Field service", "Reporting"],
    challenge:
      "Installers earn most of their income from looking after sites, but visits, faults and reports lived in phones and paper.",
    solution:
      "A demo website and service system covering IP CCTV, access control, fire alarms, electric fences and monitoring.",
    outcome: "Demo built and presented, with a 30-day pilot offer on the table.",
    clientPrivate: true,
  },
  {
    slug: "code-joy-academy",
    eyebrow: "Education experience",
    title: "Code Joy Academy",
    description:
      "A warm, confident admissions experience for a Cambridge-aligned online school built around each learner.",
    href: "https://www.codejoyacademy.com/",
    domain: "codejoyacademy.com",
    media: "/projects/code-joy-classroom.jpg",
    mediaAlt: "A learner joining a Code Joy Academy online class",
    mediaKind: "photo",
    tags: ["Web experience", "Brand system", "Admissions"],
    challenge:
      "A new online school needed to earn parents' trust and turn visits into admissions enquiries.",
    solution:
      "A brand system and admissions-focused website that explains the program and guides families to apply.",
    outcome:
      "Live at codejoyacademy.com as the school's front door for new families.",
  },
  {
    slug: "code-joy-lms",
    eyebrow: "Learning platform",
    title: "Code Joy Academy LMS",
    description:
      "A protected learning home that brings classes, assignments, progress, attendance, and family accounts together.",
    href: "https://lms.codejoyacademy.com/",
    domain: "lms.codejoyacademy.com",
    media: "/projects/code-joy-lms.svg",
    mediaAlt: "Illustrated preview of the secure Code Joy Academy learning portal",
    mediaKind: "portal",
    tags: ["LMS", "Secure access", "Family accounts"],
    challenge:
      "Classes, assignments, and progress lived in separate tools, leaving families and teachers without one view.",
    solution:
      "A secure learning portal with role-based access for students, parents, and teachers.",
    outcome:
      "Live at lms.codejoyacademy.com, running day-to-day learning for the school.",
  },
  {
    slug: "advisory-firm",
    eyebrow: "Professional services website",
    title: "Accounting, tax & ESG advisory firm",
    description:
      "A content-rich website for a Kenyan advisory firm, with service pages, industry pages, an insights hub, ESG articles and a request-a-proposal flow.",
    domain: "Launching soon",
    media: "/projects/advisory-firm.webp",
    mediaAlt: "Homepage of the advisory firm website with the headline Count what matters",
    mediaKind: "portal",
    tags: ["WordPress", "Custom theme", "Content hub"],
    challenge:
      "A growing firm needed a site that explains tax, accounting and ESG services clearly and turns readers into proposal requests.",
    solution:
      "A custom WordPress theme the firm edits itself, with services, industries, insights, an ESG hub and a proposal form.",
    outcome:
      "Built and handed over, preparing for launch on the firm's own domain.",
    clientPrivate: true,
  },
] as const;
