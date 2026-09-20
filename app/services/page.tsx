import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Quote } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { services, serviceValues } from "@/lib/content";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Product & Automation Services",
  description:
    "Ivula Technologies provides product discovery, custom software, SaaS development, AI and workflow automation, cloud systems, APIs, and product optimization.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Software services"
        title={
          <>
            Build the capability your next stage{" "}
            <span className="text-gradient">actually needs.</span>
          </>
        }
        description="From product discovery and UX to AI automation, cloud systems, and full SaaS delivery, Ivula helps teams turn operational challenges into dependable software."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <a href="#quote">
              Discuss a project <ArrowRight className="size-4" />
            </a>
          </Button>
        </Magnetic>
        <Button asChild variant="outline" size="xl">
          <a href={cta.projectMailto}>
            <Mail className="size-4" /> Email us
          </a>
        </Button>
      </PageHero>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we build"
            title="A focused team from problem to product"
            description="Bring us a rough idea, a broken workflow, or an existing product that needs a stronger next version."
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
            description="We run our own software in production. That changes the questions we ask and the choices we make for yours."
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
                  Start with the problem, not the feature list
                </h2>
                <p className="text-pretty text-white/80">
                  Share who is affected, where the current process breaks down,
                  and what a better outcome would change. If there is a timeline
                  or budget range, include it so our first response can be useful.
                </p>
                <Magnetic>
                  <Button asChild variant="accent" size="xl">
                    <a href={cta.projectMailto}>
                      <Mail className="size-4" /> Discuss a project
                    </a>
                  </Button>
                </Magnetic>
                <p className="text-sm text-white/60">
                  Prefer to explore our products first?{" "}
                  <Link
                    href="/products"
                    className="font-medium text-cyan-300 underline-offset-4 hover:underline"
                  >
                    See what we&apos;ve built
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
