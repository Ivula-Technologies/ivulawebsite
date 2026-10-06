/**
 * Central site configuration.
 * Swap brand details, contact info, and navigation here.
 */
export const site = {
  name: "Ivula Technologies",
  shortName: "Ivula",
  tagline: "Building Solutions. Solving Problems.",
  description:
    "Ivula Technologies is a senior product and engineering studio that designs, builds, and launches SaaS products, AI automations, and custom platforms for startups and growing businesses.",
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
  canopy: {
    home: "https://canopy.ivulatechnologies.com",
    signup: "https://canopy.ivulatechnologies.com/signup",
    login: "https://canopy.ivulatechnologies.com/login",
  },
} as const;

export const mainNav = [
  { title: "Work", href: "/#work" },
  { title: "Services", href: "/services" },
  { title: "Engagements", href: "/#engagements" },
  { title: "Approach", href: "/#approach" },
  { title: "Care Plans", href: "/care-plans" },
  { title: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  "Selected work": [
    { title: "Ivula Canopy", href: "/products/canopy" },
    { title: "Code Joy Academy", href: "https://www.codejoyacademy.com/" },
    { title: "Code Joy Academy LMS", href: "https://lms.codejoyacademy.com/" },
    { title: "All products", href: "/products" },
  ],
  Company: [
    { title: "Services", href: "/services" },
    { title: "Hosting & care plans", href: "/care-plans" },
    { title: "Contact", href: "/contact" },
    { title: "About Ivula", href: "/#about" },
    { title: "Our founder", href: "/#founder" },
  ],
  Explore: [
    { title: "How we work", href: "/#approach" },
    { title: "FAQ", href: "/#faq" },
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
