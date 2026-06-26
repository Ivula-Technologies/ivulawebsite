import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Cloud,
  Workflow,
  Boxes,
  Gauge,
  Lock,
  CreditCard,
  XCircle,
  Globe2,
  Sparkles,
} from "lucide-react";

/** Objection-killing FAQ shown on the homepage and contact page. */
export const faqs = [
  {
    question: "Is our data safe?",
    answer:
      "Yes. Your data is encrypted in transit and at rest, hosted on trusted cloud infrastructure, and access is controlled by roles you define. We never sell your data, and you can export it any time — it's always yours.",
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer:
      "No long-term contract. Start free, and when paid plans launch you'll pay month-to-month. Founding members lock in early pricing, but you're never locked into a contract.",
  },
  {
    question: "Can we cancel anytime?",
    answer:
      "Absolutely. There are no cancellation fees and no hoops to jump through. If Cannopy isn't right for your organization, you can leave whenever you like and take your data with you.",
  },
  {
    question: "Do you work with organizations outside Kenya?",
    answer:
      "Yes — Ivula is built for a global audience. We were founded in Nairobi, but Cannopy works for churches, nonprofits, cooperatives, and member groups anywhere in the world. Pricing is shown in USD.",
  },
  {
    question: "What if we're not technical?",
    answer:
      "Cannopy is designed for real people, not IT departments. Founding members also get hands-on, founder-level onboarding to import your data and get set up — so you're never on your own.",
  },
  {
    question: "Do you also build custom software?",
    answer:
      "Yes. Beyond our own products, Ivula Technologies builds custom software for businesses — web apps, internal tools, integrations, and more. Visit our Services page to request a quote.",
  },
] as const;

/** Founding-member offer perks. */
export const foundingPerks = [
  {
    title: "Founder-level onboarding",
    description:
      "We personally help you import members and get set up — no wrestling with a new tool alone.",
  },
  {
    title: "Locked-in early pricing",
    description:
      "Founding organizations keep early-bird pricing for life, even as we add features and plans.",
  },
  {
    title: "Direct line to the team",
    description:
      "Your feedback shapes the roadmap. Founding members get a direct channel to the people building Cannopy.",
  },
  {
    title: "Founding badge",
    description:
      "Be recognized as one of the first organizations to grow with Ivula Cannopy.",
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
    icon: Code2,
    title: "Web applications",
    description:
      "Modern, fast, scalable web apps built with the same stack and craft behind our own products.",
  },
  {
    icon: Smartphone,
    title: "Mobile experiences",
    description:
      "Responsive web and mobile-first experiences that feel native on every device.",
  },
  {
    icon: Workflow,
    title: "Internal tools & automation",
    description:
      "Dashboards, admin panels, and workflow automation that replace manual, error-prone processes.",
  },
  {
    icon: Cloud,
    title: "APIs & integrations",
    description:
      "Connect the systems you already use — payments, messaging, accounting, and more.",
  },
  {
    icon: Boxes,
    title: "SaaS product development",
    description:
      "From idea to launch: we partner with founders to design and ship production-grade SaaS.",
  },
  {
    icon: Gauge,
    title: "Performance & polish",
    description:
      "Audits and rebuilds that make existing products faster, cleaner, and a joy to use.",
  },
];

/** Why-Ivula trust points for the services page. */
export const serviceValues = [
  {
    title: "We build our own products",
    description:
      "We don't just ship and leave. We run the same software in production ourselves — so we sweat the details.",
  },
  {
    title: "Founder-led & physics-trained",
    description:
      "Led by a founder with a degree in Applied Physics & Computer Science. Rigorous thinking, real engineering.",
  },
  {
    title: "Global standard, fair pricing",
    description:
      "World-class craft from our base in Nairobi — international quality without international overhead.",
  },
] as const;

/** Vision / roadmap timeline for the homepage. */
export const vision = [
  {
    phase: "Today",
    title: "Cannopy, our flagship",
    description:
      "A focused organization-management platform for member-based communities, in active development with founding members.",
    icon: Sparkles,
  },
  {
    phase: "Next",
    title: "A growing product family",
    description:
      "More focused tools that solve real problems for organizations — built on the same modern foundation.",
    icon: Boxes,
  },
  {
    phase: "Always",
    title: "Custom software for business",
    description:
      "Partnering with companies worldwide to build the software they can't buy off the shelf.",
    icon: Code2,
  },
] as const;

/** FAQ-style trust icons reused elsewhere. */
export const trustHighlights = [
  { icon: Lock, label: "Encrypted & private" },
  { icon: CreditCard, label: "No contract" },
  { icon: XCircle, label: "Cancel anytime" },
  { icon: Globe2, label: "Used worldwide" },
] as const;
