export type ProjectMediaKind = "dashboard" | "photo" | "portal";

export interface Project {
  slug: "canopy" | "code-joy-academy" | "code-joy-lms";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  domain: string;
  media: string;
  mediaAlt: string;
  mediaKind: ProjectMediaKind;
  tags: readonly string[];
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
    media: "/screenshots/canopy-dashboard.svg",
    mediaAlt: "Illustrated preview of the Ivula Canopy organization dashboard",
    mediaKind: "dashboard",
    tags: ["SaaS product", "Operations", "Reporting"],
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
  },
] as const;
