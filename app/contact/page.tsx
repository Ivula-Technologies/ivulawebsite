import type { Metadata } from "next";
import { ArrowRight, Code2, Handshake, Mail, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { ProjectBriefForm } from "@/components/lead/project-brief-form";
import { faqs } from "@/lib/content";
import { cta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ivula Technologies to discuss custom software, AI and workflow automation, product development, or an Ivula Canopy demo.",
  alternates: { canonical: "/contact" },
};

const reasons = [
  {
    icon: Code2,
    title: "Build or improve software",
    description:
      "Share the problem, the users, and the outcome you need. We can help shape, build, launch, or rescue the product.",
    label: "Fill in the project brief",
    href: "#brief",
  },
  {
    icon: MessageSquare,
    title: "Explore Ivula Canopy",
    description:
      "Tell us how your nonprofit, church, or community team works and we'll focus the walkthrough on your real operations.",
    label: "Request a Canopy demo",
    href: cta.demoHref,
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "Have a strategic, delivery, or ecosystem partnership in mind? Start with the opportunity and what success could look like.",
    label: "Start a partnership conversation",
    href: cta.partnershipMailto,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Get a free estimate{" "}
            <span className="text-gradient">for your project.</span>
          </>
        }
        description="Tell us what you want to build or fix. Within one business day, a real person on our team replies with honest advice, a rough plan, and a cost range."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <a href="#brief">
              Start your brief <ArrowRight className="size-4" />
            </a>
          </Button>
        </Magnetic>
        {site.bookingUrl ? (
          <Button asChild variant="outline" size="xl">
            <a href={site.bookingUrl} target="_blank" rel="noreferrer">
              Book a 30-minute call
            </a>
          </Button>
        ) : (
          <Button asChild variant="outline" size="xl">
            <a href={cta.projectMailto}>
              <Mail className="size-4" /> {site.contact.email}
            </a>
          </Button>
        )}
      </PageHero>

      <section id="brief" className="scroll-mt-24 pb-12 pt-4">
        <div className="container-wide max-w-4xl">
          <Reveal direction="up">
            <ProjectBriefForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-12 pt-8">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Other ways to reach us"
            title="Not a new build? We can still help"
            className="mb-12"
          />
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <RevealItem key={reason.title} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="font-display text-lg font-bold">
                      {reason.title}
                    </h2>
                    <p className="flex-1 text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-fit">
                      <a href={reason.href}>
                        {reason.label} <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide max-w-3xl">
          <SectionHeading
            eyebrow="Before we talk"
            title="Common questions"
          />
          <Reveal direction="up" className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
