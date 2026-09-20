/**
 * Central site configuration.
 * Swap brand details, contact info, and navigation here.
 */
export const site = {
  name: "Ivula Technologies",
  shortName: "Ivula",
  tagline: "Building Solutions. Solving Problems.",
  description:
    "Ivula Technologies designs and builds practical software products, AI-powered workflows, and custom platforms that help organizations work smarter and grow with confidence.",
  url: "https://www.ivulatechnologies.com",
  origin: "Founded in Nairobi in 2022 · Building for the world",
  contact: {
    email: "info@ivulatechnologies.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ivula-technologies-ltd",
  },
  canopy: {
    home: "https://canopy.ivulatechnologies.com",
    signup: "https://canopy.ivulatechnologies.com/signup",
    login: "https://canopy.ivulatechnologies.com/login",
  },
} as const;

export const mainNav = [
  { title: "Products", href: "/products" },
  { title: "Services", href: "/services" },
  { title: "Approach", href: "/#approach" },
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  Product: [
    { title: "Ivula Canopy", href: "/products/canopy" },
    { title: "All products", href: "/products" },
    { title: "Start Canopy free", href: site.canopy.signup },
    { title: "Canopy sign in", href: site.canopy.login },
  ],
  Company: [
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
    { title: "About Ivula", href: "/#about" },
  ],
  Explore: [
    { title: "How we work", href: "/#approach" },
    { title: "FAQ", href: "/#faq" },
    { title: "LinkedIn", href: site.social.linkedin },
  ],
} as const;

/** Convenience helpers for CTA links used across the site. */
export const cta = {
  projectHref: "/contact",
  projectLabel: "Discuss a project",
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
