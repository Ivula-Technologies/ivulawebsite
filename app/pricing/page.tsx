import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Crown, Mail, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { faqs } from "@/lib/content";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start Ivula Cannopy free. Paid plans are coming soon — founding members lock in early pricing for life. USD pricing, no contract, cancel anytime.",
};

const plans = [
  {
    name: "Free trial",
    price: "$0",
    cadence: "to start",
    description:
      "Get your organization set up and see Cannopy in action — no card required.",
    features: [
      "Add and manage your members",
      "Track contributions & dues",
      "Events & attendance",
      "Core dashboards & reports",
    ],
    cta: { label: "Start free trial", href: cta.trialHref },
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Founding member",
    price: "Early pricing",
    cadence: "locked in for life",
    description:
      "Be one of our first organizations. Founder-level onboarding and early pricing that never goes up.",
    features: [
      "Everything in the free trial",
      "Founder-level onboarding & data import",
      "Early pricing locked in for life",
      "Direct line to the team",
      "Founding-member badge",
    ],
    cta: { label: "Become a founding member", href: cta.mailto, external: true },
    variant: "gradient" as const,
    highlight: true,
  },
  {
    name: "Paid plans",
    price: "Coming soon",
    cadence: "USD pricing",
    description:
      "Full plans with advanced features are on the way. Founding members keep their early pricing.",
    features: [
      "Advanced reporting & exports",
      "More team roles & permissions",
      "Integrations & automation",
      "Priority support",
    ],
    cta: { label: "Get notified", href: cta.mailto, external: true },
    variant: "outline" as const,
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Start free. <span className="text-gradient">Grow on your terms.</span>
          </>
        }
        description="No published prices yet — and that's good news for you. Start free today, and as a founding organization you'll lock in early pricing for life. Pricing shown in USD."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <Link href={cta.trialHref}>
              {cta.trialLabel} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Magnetic>
        <Button asChild variant="outline" size="xl">
          <a href={cta.mailto}>
            <Mail className="size-4" /> Talk to us
          </a>
        </Button>
      </PageHero>

      {/* Plans */}
      <section className="pb-8 pt-8">
        <div className="container-wide">
          <RevealGroup className="grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <RevealItem key={plan.name} className="h-full">
                <div
                  className={
                    "relative flex h-full flex-col rounded-3xl border p-8 shadow-soft transition-all duration-300 " +
                    (plan.highlight
                      ? "border-cyan-500/40 bg-card shadow-glow lg:-translate-y-3"
                      : "border-border bg-card hover:-translate-y-1 hover:shadow-card-hover")
                  }
                >
                  {plan.highlight && (
                    <Badge
                      variant="accent"
                      className="absolute -top-3 left-8 uppercase"
                    >
                      <Crown className="size-3.5 text-amber-500" /> Most popular
                    </Badge>
                  )}
                  <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-muted-foreground">
                      {plan.cadence}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 flex-shrink-0 text-cyan-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {"external" in plan.cta && plan.cta.external ? (
                      <Button asChild variant={plan.variant} size="lg" className="w-full">
                        <a href={plan.cta.href}>{plan.cta.label}</a>
                      </Button>
                    ) : (
                      <Button asChild variant={plan.variant} size="lg" className="w-full">
                        <Link href={plan.cta.href}>{plan.cta.label}</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal direction="up" className="mt-10">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-6 text-center sm:flex-row sm:justify-center sm:text-left">
              <Sparkles className="size-5 text-cyan-500" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  No contract. Cancel anytime.
                </span>{" "}
                Your data is always yours to export. Founding pricing is honored
                for life.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title="No surprises"
            description="The questions organizations ask before they start."
          />
          <Reveal direction="up" className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
