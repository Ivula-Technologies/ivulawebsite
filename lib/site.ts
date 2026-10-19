/**
 * Central site configuration.
 * Swap brand details, contact info, and navigation here.
 */
export const site = {
  name: "Ivula Technologies",
  shortName: "Ivula",
  tagline: "Building Solutions. Solving Problems.",
  description:
    "Ivula Technologies builds and runs its own SaaS products (Canopy, LeadFast AI, ShelfKeeper, ProposalKit and WakiliNivo) and designs, builds and hosts custom software for startups and growing businesses.",
  url: "https://www.ivulatechnologies.com",
  origin: "Founded in Nairobi in 2022 · Building for the world",
  contact: {
    email: "info@ivulatechnologies.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ivula-technologies-ltd",
  },
  /**
   * Lead capture. The site is a static export, so the project brief form
   * posts to a third-party form endpoint (e.g. Formspree, Web3Forms, Basin).
   * Set NEXT_PUBLIC_LEAD_FORM_ENDPOINT at build time to enable it; without
   * it the form falls back to opening a pre-filled email.
   */
  leadFormEndpoint: process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT ?? "",
  /** Optional scheduling link (Calendly, Cal.com). Shown when set. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  /** Founder profile, shown in the homepage founder section. */
  founder: {
    name: "Bius Michael Joseph",
    firstName: "Bius",
    role: "Founder & CEO",
    photo: "/team/bius-portrait-4x5.webp",
    linkedin: "",
  },
  hosting: "https://ivulahosting.co.ke",
  canopy: {
    home: "https://canopy.ivulatechnologies.com",
    signup: "https://canopy.ivulatechnologies.com/signup",
    login: "https://canopy.ivulatechnologies.com/login",
  },
} as const;

export const mainNav = [
  { title: "Products", href: "/products" },
  { title: "Services", href: "/services" },
  { title: "Hosting", href: "https://ivulahosting.co.ke" },
  { title: "Work", href: "/#work" },
  { title: "Roadmap", href: "/roadmap" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  Products: [
    { title: "Ivula Canopy", href: "/products/canopy" },
    { title: "LeadFast AI", href: "/products/leadfast" },
    { title: "ShelfKeeper", href: "/products/shelfkeeper" },
    { title: "ProposalKit", href: "/products/proposalkit" },
    { title: "WakiliNivo", href: "/products/wakilinivo" },
  ],
  Services: [
    { title: "Ivula Studio", href: "/services" },
    { title: "Care Plans", href: "/care-plans" },
    { title: "Ivula Hosting", href: "/hosting" },
    { title: "ivulahosting.co.ke", href: "https://ivulahosting.co.ke" },
  ],
  Company: [
    { title: "About Ivula", href: "/about" },
    { title: "Client work", href: "/#work" },
    { title: "Roadmap", href: "/roadmap" },
    { title: "Meet the founder", href: "/#founder" },
    { title: "FAQ", href: "/#faq" },
    { title: "Contact", href: "/contact" },
    { title: "LinkedIn", href: site.social.linkedin },
  ],
} as const;

/** Convenience helpers for CTA links used across the site. */
export const cta = {
  projectHref: "/contact#brief",
  projectLabel: "Get a free estimate",
  workHref: "/#work",
  workLabel: "View selected work",
  canopyHref: site.canopy.home,
  canopyLabel: "Explore Canopy",
  trialHref: site.canopy.signup,
  trialLabel: "Start Canopy free",
  signInHref: site.canopy.login,
  demoHref: `mailto:${site.contact.email}?subject=${encodeURIComponent(
    "Ivula Canopy demo request"
  )}`,
  demoLabel: "Request a Canopy demo",
  mailto: `mailto:${site.contact.email}`,
  projectMailto: `mailto:${site.contact.email}?subject=${encodeURIComponent(
    "Custom software project enquiry"
  )}`,
  partnershipMailto: `mailto:${site.contact.email}?subject=${encodeURIComponent(
    "Partnership conversation"
  )}`,
} as const;
