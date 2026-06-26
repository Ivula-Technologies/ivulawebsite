import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, Rocket, Code2 } from "lucide-react";
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
    "Get in touch with Ivula Technologies. Email us to start a free trial of Cannopy, request a demo, or discuss custom software.",
};

const reasons = [
  {
    icon: Rocket,
    title: "Start a free trial",
    description:
      "Ready to get your organization onto Cannopy? Start free and we'll help you get set up.",
    label: "Start free trial",
    href: cta.trialHref,
    subject: "I'd like to start a free trial",
    internal: true,
  },
  {
    icon: MessageSquare,
    title: "Request a demo",
    description:
      "Want a guided walkthrough first? Email us and we'll arrange a personal demo.",
    label: "Email for a demo",
    subject: "I'd like to request a demo of Cannopy",
    internal: false,
  },
  {
    icon: Code2,
    title: "Custom software",
    description:
      "Have a project in mind? Tell us what you're building and we'll reply with next steps.",
    label: "Discuss a project",
    subject: "Custom software enquiry",
    internal: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="text-gradient">talk</span>
          </>
        }
        description="No forms, no funnels. Email us directly and you'll reach a real person on our team. We'd love to hear about your organization."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <a href={cta.mailto}>
              <Mail className="size-4" /> {site.contact.email}
            </a>
          </Button>
        </Magnetic>
      </PageHero>

      {/* Reasons / routes */}
      <section className="pb-12 pt-8">
        <div className="container-wide">
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              const mailHref = `${cta.mailto}?subject=${encodeURIComponent(
                reason.subject
              )}`;
              return (
                <RevealItem key={reason.title} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold">
                      {reason.title}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                    {reason.internal ? (
                      <Button asChild variant="outline" size="sm" className="w-fit">
                        <Link href={reason.href!}>
                          {reason.label} <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" size="sm" className="w-fit">
                        <a href={mailHref}>
                          {reason.label} <ArrowRight className="size-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Email highlight card */}
      <section className="py-12">
        <div className="container-wide">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-navy-900 px-8 py-14 text-center text-white shadow-soft-lg">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[130px]" />
              </div>
              <div className="relative mx-auto flex max-w-xl flex-col items-center gap-5">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <Mail className="size-7 text-cyan-300" />
                </span>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  Email us anytime
                </h2>
                <a
                  href={cta.mailto}
                  className="font-display text-xl font-semibold text-cyan-300 underline-offset-4 hover:underline sm:text-2xl"
                >
                  {site.contact.email}
                </a>
                <p className="text-sm text-white/70">
                  We&apos;re a real software studio — founded in Nairobi, Kenya,
                  building for organizations everywhere. We typically reply
                  within one business day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-3xl">
          <SectionHeading
            eyebrow="Before you ask"
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
