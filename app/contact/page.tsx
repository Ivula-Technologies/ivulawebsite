import type { Metadata } from "next";
import { ArrowRight, Code2, Handshake, Mail, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
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
    label: "Discuss a project",
    href: cta.projectMailto,
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
            Let&apos;s solve something{" "}
            <span className="text-gradient">worth solving.</span>
          </>
        }
        description="Tell us what is not working, what you want to make possible, and where you are in the journey. You'll reach a real person on our team."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <a href={cta.projectMailto}>
              <Mail className="size-4" /> {site.contact.email}
            </a>
          </Button>
        </Magnetic>
      </PageHero>

      <section className="pb-12 pt-8">
        <div className="container-wide">
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

      <section className="py-12">
        <div className="container-wide">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-navy-900 px-8 py-14 text-center text-white shadow-soft-lg">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[130px]" />
              </div>
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <Mail className="size-7 text-cyan-300" />
                </span>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  A useful first message is simple
                </h2>
                <a
                  href={cta.projectMailto}
                  className="font-display text-xl font-semibold text-cyan-300 underline-offset-4 hover:underline sm:text-2xl"
                >
                  {site.contact.email}
                </a>
                <p className="text-sm leading-relaxed text-white/70">
                  Include the problem, who experiences it, what you have tried,
                  and the outcome you want. If you already have a timeline or
                  budget range, include that too — it helps us give you a more
                  useful first response.
                </p>
              </div>
            </div>
          </Reveal>
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
