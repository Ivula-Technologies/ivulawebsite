/**
 * Central site configuration.
 * Swap brand details, contact info, and navigation here.
 */
export const site = {
  name: "Ivula Technologies",
  shortName: "Ivula",
  tagline: "A product studio building modern software for a global market.",
  description:
    "Ivula Technologies is a software product studio building modern SaaS and custom software for organizations worldwide. Our flagship product, Ivula Cannopy, helps member-based communities manage members, money, and momentum.",
  url: "https://ivulatechnologies.com",
  // Origin / authenticity story — not the core pitch.
  origin: "Founded in Nairobi, Kenya · Building for the world",
  contact: {
    // Email only — no phone number anywhere on the site (per brand guidance).
    email: "info@ivulatechnologies.com",
  },
  // Social links — fill in real handles when available.
  social: {
    linkedin: "#",
    x: "#",
    github: "#",
  },
} as const;

export const mainNav = [
  { title: "Products", href: "/products" },
  { title: "Services", href: "/services" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  Product: [
    { title: "Ivula Cannopy", href: "/products/cannopy" },
    { title: "All products", href: "/products" },
    { title: "Pricing", href: "/pricing" },
    { title: "Start free trial", href: "/pricing" },
  ],
  Company: [
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
    { title: "Our vision", href: "/#vision" },
  ],
  Resources: [
    { title: "How it works", href: "/#how-it-works" },
    { title: "FAQ", href: "/#faq" },
    { title: "Founding members", href: "/#founding" },
  ],
} as const;

/** Convenience helpers for CTA links used across the site. */
export const cta = {
  trialHref: "/pricing",
  trialLabel: "Start free trial",
  demoHref: "/contact",
  demoLabel: "Request a demo",
  mailto: `mailto:${site.contact.email}`,
} as const;
