import type { Metadata } from "next";
import { ArrowRight, Check, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ivula Canopy Trial",
  description:
    "Try Ivula Canopy free for 14 days. No credit card required. Organize people, volunteers, events, attendance, announcements, and reports in one workspace.",
  alternates: { canonical: "/pricing" },
};

const trialFeatures = [
  "Create your organization's workspace",
  "Organize people, volunteers, and teams",
  "Plan events and record attendance",
  "Share announcements and review reports",
];

const trialFaqs = [
  {
    question: "Do I need a credit card to start?",
    answer:
      "No. You can explore Ivula Canopy for 14 days without entering card details.",
  },
  {
    question: "Who is Canopy built for?",
    answer:
      "Canopy is designed for growing nonprofits, churches, youth programs, volunteer groups, and community organizations that coordinate people and programs.",
  },
  {
    question: "What can we manage during the trial?",
    answer:
      "You can set up your organization, add people and teams, create events, record attendance, share announcements, and explore dashboards and reports.",
  },
  {
    question: "Can we request a guided walkthrough?",
    answer:
      "Yes. Email our team and tell us a little about your organization. We will arrange a practical walkthrough around the work you need to manage.",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Ivula Canopy"
        title={
          <>
            Try your real workflow{" "}
            <span className="text-gradient">before you decide.</span>
          </>
        }
        description="Start with a 14-day free trial of Ivula Canopy. No credit card required — just a practical way to see whether one clear workspace can replace scattered records and tools."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <a href={cta.trialHref}>
              Start free for 14 days <ArrowRight className="size-4" />
            </a>
          </Button>
        </Magnetic>
        <Button asChild variant="outline" size="xl">
          <a href={cta.demoHref}>
            <Mail className="size-4" /> Request a demo
          </a>
        </Button>
      </PageHero>

      <section className="pb-10 pt-8">
        <div className="container-wide">
          <RevealGroup className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <RevealItem className="h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-cyan-500/30 bg-card p-8 shadow-glow sm:p-10">
                <div className="absolute -right-24 -top-24 size-64 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                    14-day free trial
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold">
                    Explore Canopy with your team
                  </h2>
                  <p className="mt-4 max-w-2xl text-muted-foreground">
                    Begin with the operations that matter most to your
                    organization and see how Canopy fits the way your people
                    already work.
                  </p>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {trialFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <Button asChild variant="gradient" size="lg">
                      <a href={cta.trialHref}>
                        Start the free trial <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </RevealItem>

            <RevealItem className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-border bg-secondary/35 p-8 shadow-soft sm:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                  <ShieldCheck className="size-6" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold">
                  Need help evaluating the fit?
                </h2>
                <p className="mt-4 flex-1 text-muted-foreground">
                  Tell us about your programs, team, and current administrative
                  challenges. We will focus the conversation on the workflows
                  that matter to you.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-8 w-fit">
                  <a href={cta.demoHref}>
                    Request a walkthrough <Mail className="size-4" />
                  </a>
                </Button>
              </div>
            </RevealItem>
          </RevealGroup>

          <Reveal direction="up" className="mx-auto mt-10 max-w-5xl">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-6 text-center sm:flex-row sm:justify-center sm:text-left">
              <Sparkles className="size-5 text-cyan-500" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  No card required.
                </span>{" "}
                Start with your organization, people, and programs, then decide
                whether Canopy is the right operational home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <SectionHeading
            eyebrow="Trial FAQ"
            title="Know what to expect"
            description="Straight answers before you create your workspace."
          />
          <Reveal direction="up" className="mt-12">
            <Accordion items={trialFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
