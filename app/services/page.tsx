import type { Metadata } from "next";
import { ArrowRight, Mail, Quote } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { services, serviceValues } from "@/lib/content";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Ivula Technologies builds custom software for businesses worldwide — web apps, internal tools, integrations, and full SaaS products.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom software"
        title={
          <>
            Software you can&apos;t <span className="text-gradient">buy off the shelf</span>
          </>
        }
        description="We build the same modern, production-grade software behind our own products — for businesses worldwide. From a single internal tool to a full SaaS platform."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <a href="#quote">
              Request a quote <ArrowRight className="size-4" />
            </a>
          </Button>
        </Magnetic>
        <Button asChild variant="outline" size="xl">
          <a href={cta.mailto}>
            <Mail className="size-4" /> Email us
          </a>
        </Button>
      </PageHero>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we build"
            title="Full-stack product engineering"
            description="One team, end to end — design, build, ship, and iterate."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <RevealItem key={service.title} className="h-full">
                  <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Why Ivula */}
      <section className="border-y border-border bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why Ivula"
            title="A product studio, not a code shop"
            description="We run our own software in production. That changes how we build yours."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {serviceValues.map((value) => (
              <RevealItem key={value.title} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <Quote className="size-7 text-cyan-500" />
                  <h3 className="font-display text-lg font-bold">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-navy-900 px-8 py-16 text-center text-white shadow-soft-lg md:px-16">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-0 size-80 rounded-full bg-cyan-500/30 blur-[120px]" />
                <div className="absolute -right-10 bottom-0 size-80 rounded-full bg-navy-400/40 blur-[120px]" />
              </div>
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
                <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl md:text-display-sm">
                  Tell us what you&apos;re building
                </h2>
                <p className="text-pretty text-white/80">
                  Send us a few lines about your project — goals, timeline, and
                  budget if you have one — and we&apos;ll get back to you with
                  next steps. No forms, no funnels, just a real reply.
                </p>
                <Magnetic>
                  <Button asChild variant="accent" size="xl">
                    <a
                      href={`${cta.mailto}?subject=Custom%20software%20enquiry`}
                    >
                      <Mail className="size-4" /> Request a quote
                    </a>
                  </Button>
                </Magnetic>
                <p className="text-sm text-white/60">
                  Prefer to explore our products first?{" "}
                  <a
                    href="/products"
                    className="font-medium text-cyan-300 underline-offset-4 hover:underline"
                  >
                    See what we&apos;ve built
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
