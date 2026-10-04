import type { Metadata } from "next";
import { ArrowRight, Handshake, Mail } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { PlanPricing } from "@/components/care-plans/plan-pricing";
import { CarePlanForm } from "@/components/care-plans/care-plan-form";
import { careFaqs, careIncluded, careSteps } from "@/lib/care-plans";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Hosting & Care Plans",
  description:
    "Managed hosting, updates, backups, security and monthly edits for your business website, from $49 a month. Free migration and no long-term contract.",
  alternates: { canonical: "/care-plans" },
};

const partnerMailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  "White-label care plan partnership"
)}`;

export default function CarePlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Hosting & care plans"
        title={
          <>
            Your website, hosted and{" "}
            <span className="text-gradient">looked after every month.</span>
          </>
        }
        description="Fast managed hosting, updates, backups, security and a team on call for edits, in one flat monthly plan. Free migration, no long-term contract."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <a href="#plans">
              See plans <ArrowRight className="size-4" />
            </a>
          </Button>
        </Magnetic>
        <Button asChild variant="outline" size="xl">
          <a href="#start">
            <Mail className="size-4" /> Ask about your site
          </a>
        </Button>
      </PageHero>

      <section id="plans" className="scroll-mt-20 pb-16 pt-8 md:pb-24">
        <div className="container-wide">
          <PlanPricing />
          <Reveal direction="up" className="mt-8 text-center text-sm text-muted-foreground">
            Prices are per site in US dollars. Need more than five sites? Ask us for volume pricing.
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Included in every plan"
            title="The work that keeps a site fast, safe and online"
            description="The jobs that slip when a website has no owner. We do them every month, so you never have to think about them."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careIncluded.map(({ icon: Icon, title, description }) => (
              <RevealItem key={title} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading eyebrow="How it works" title="Switch in three steps" />
          <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {careSteps.map((step, i) => (
              <RevealItem key={step.title} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <span className="font-display text-sm font-bold text-cyan-600 dark:text-cyan-400">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="container-wide">
          <Reveal direction="up">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-cyan-500/30 bg-card p-8 shadow-glow sm:p-10 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-5">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                  <Handshake className="size-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    Agency or freelancer? Resell our care plans.
                  </h2>
                  <p className="mt-2 max-w-xl text-muted-foreground">
                    Offer hosting and maintenance under your own brand at partner
                    pricing. We do the work behind the scenes; you keep the client
                    and the margin.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" size="lg" className="w-fit shrink-0">
                <a href={partnerMailto}>
                  Become a partner <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="start"
        className="relative scroll-mt-20 border-t border-border bg-secondary/30 py-20 md:py-28"
      >
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal direction="right" className="flex flex-col items-start gap-5">
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Tell us about your site.{" "}
                <span className="text-gradient">We&apos;ll handle the move.</span>
              </h2>
              <p className="max-w-lg text-lg text-muted-foreground">
                We check your site, confirm the right plan and send a secure
                payment link. Migration is free and takes most sites less than
                two business days.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <CarePlanForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <SectionHeading eyebrow="Care plan FAQ" title="Straight answers" />
          <Reveal direction="up" className="mt-12">
            <Accordion items={careFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
