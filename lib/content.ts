import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Cloud,
  Workflow,
  Gauge,
  Compass,
  Rocket,
  RefreshCw,
  Handshake,
  Lightbulb,
  LifeBuoy,
  Sparkles,
} from "lucide-react";

/** Practical sales questions shown on the homepage and contact page. */
export const faqs = [
  {
    question: "What kinds of software does Ivula build?",
    answer:
      "We design and build web platforms, SaaS products, mobile-first experiences, internal tools, APIs, cloud systems, and AI-powered workflow automation. We can take a product from early discovery through launch or improve an existing system.",
  },
  {
    question: "Can you help before we have a complete specification?",
    answer:
      "Yes. We can begin with a focused discovery engagement to clarify the problem, users, priorities, risks, and first release. The result is a practical scope and roadmap your team can evaluate before committing to a larger build.",
  },
  {
    question: "Do you work with teams outside Kenya?",
    answer:
      "Yes. Ivula was founded in Nairobi and works remotely with organizations in different markets. We structure communication, reviews, and handover so distributed teams always know what is happening next.",
  },
  {
    question: "How do you estimate timeline and cost?",
    answer:
      "After understanding the problem and the smallest useful release, we share a clear scope, delivery stages, assumptions, and commercial proposal. Larger ideas can be phased so you validate value before expanding the investment.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We plan for handover from the start and can continue with monitoring, improvements, and product support. The exact arrangement depends on your team, internal capacity, and how quickly the product needs to evolve.",
  },
  {
    question: "What is Ivula Canopy?",
    answer:
      "Ivula Canopy is our organization-management platform for nonprofits, churches, youth programs, volunteer groups, and community teams. It brings people, events, attendance, announcements, engagement insights, and reports into one workspace.",
  },
] as const;

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Custom software development services. */
export const services: Service[] = [
  {
    icon: Compass,
    title: "Product discovery & UX",
    description:
      "Turn a rough idea or operational problem into a clear product scope, user journey, prototype, and delivery roadmap.",
  },
  {
    icon: Code2,
    title: "Web platforms & SaaS",
    description:
      "Design and build secure customer portals, internal platforms, marketplaces, and subscription software that can grow with you.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first products",
    description:
      "Create responsive web and mobile experiences that stay fast, clear, and usable across the devices your customers rely on.",
  },
  {
    icon: Workflow,
    title: "AI & workflow automation",
    description:
      "Reduce repetitive work with practical AI, RPA, dashboards, and automated workflows connected to your real operations.",
  },
  {
    icon: Cloud,
    title: "Cloud systems & APIs",
    description:
      "Build dependable backends, APIs, integrations, and cloud infrastructure that make data and business systems work together.",
  },
  {
    icon: Gauge,
    title: "Product rescue & optimization",
    description:
      "Audit and improve products that are slow, hard to use, difficult to maintain, or struggling to reach a reliable launch.",
  },
];

export const deliverySteps = [
  {
    icon: Compass,
    number: "01",
    title: "Understand the problem",
    description:
      "We align on users, business goals, current constraints, and the outcome that would make the work worthwhile.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Shape the right solution",
    description:
      "We turn the opportunity into a focused scope, experience, technical approach, and realistic release plan.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build and launch",
    description:
      "You see progress in working increments, review key decisions, and launch with a product your team can operate confidently.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Learn and improve",
    description:
      "After launch, we use real feedback and product data to prioritize improvements instead of guessing what to build next.",
  },
] as const;

/** Why-Ivula trust points for the services page. */
export const serviceValues = [
  {
    title: "Product thinking, not just tickets",
    description:
      "We challenge assumptions, protect the core outcome, and help you choose the smallest release that can create real value.",
  },
  {
    title: "Close, transparent collaboration",
    description:
      "You get clear checkpoints, visible progress, and direct conversations with the people shaping and building the product.",
  },
  {
    title: "Built to last beyond launch",
    description:
      "We make deliberate choices around maintainability, security, ownership, and handover so the product can keep growing.",
  },
] as const;

/** Studio story for the homepage. */
export const vision = [
  {
    phase: "We own the outcome",
    title: "Product-minded by default",
    description:
      "We build our own products, including Ivula Canopy. That operator perspective changes how we prioritize, test, launch, and support client work.",
    icon: Handshake,
  },
  {
    phase: "We solve before we scale",
    title: "Clarity before complexity",
    description:
      "The goal is not to add more technology. It is to remove friction with the simplest dependable system that can move the organization forward.",
    icon: Sparkles,
  },
  {
    phase: "We stay useful",
    title: "A partner beyond the release",
    description:
      "From product discovery to post-launch improvement, we adapt the partnership to the capability and pace your team actually needs.",
    icon: LifeBuoy,
  },
] as const;
