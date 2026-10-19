import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { VisionMission } from "@/components/sections/vision-mission";
import { Founder } from "@/components/sections/founder";
import { dreams, journey, values } from "@/lib/company";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ivula",
  description:
    "Ivula Technologies' vision, mission and values, everything we have built since 2022, and the dreams we are working toward.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ivula"
        title={
          <>
            Built in Nairobi, <span className="text-gradient">made for the world.</span>
          </>
        }
        description="Ivula Technologies builds and runs its own software products, and designs, builds and hosts software for clients. This is why we do it, what we have made so far, and where we are going."
      >
        <Button asChild variant="gradient" size="xl">
          <Link href="/products">
            See our products <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="xl">
          <Link href={cta.projectHref}>{cta.projectLabel}</Link>
        </Button>
      </PageHero>

      <VisionMission showLink={false} />

      <section className="border-y border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading eyebrow="What we value" title="How we work" />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <RevealItem key={title} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our journey"
            title="Everything we have built so far"
            description="From one client website to a family of products, hosting and client work."
          />
          <ol className="relative mx-auto mt-14 max-w-3xl border-l-2 border-border pl-8">
            {journey.map((item, i) => (
              <li key={item.title} className="relative pb-10 last:pb-0">
                <Reveal direction="up" delay={Math.min(i * 0.04, 0.2)}>
                  <span className="absolute -left-[2.6rem] top-1 flex size-5 items-center justify-center rounded-full border-4 border-background bg-brand-gradient" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
                    {item.when}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-muted-foreground">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-navy-950 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 size-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-navy-500/40 blur-3xl" />
        <div className="container-wide relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              <Sparkles className="size-3.5" /> Our dreams
            </span>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm">
              Where we are going
            </h2>
            <p className="mt-4 text-pretty text-white/70">
              These are ambitions, not promises. They decide what we build next.
            </p>
          </div>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dreams.map((dream, i) => (
              <RevealItem key={dream.title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur">
                  <span className="font-display text-sm font-bold text-cyan-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">{dream.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{dream.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Founder />
    </>
  );
}
