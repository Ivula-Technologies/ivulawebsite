"use client";

import Link from "next/link";
import { ArrowRight, Crown, Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { foundingPerks } from "@/lib/content";
import { cta } from "@/lib/site";

export function FoundingMember() {
  return (
    <section id="founding" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-navy-900 text-white shadow-soft-lg">
          {/* Aurora accents */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 size-80 rounded-full bg-cyan-500/30 blur-[120px]" />
            <div className="absolute -right-10 bottom-0 size-80 rounded-full bg-navy-400/40 blur-[120px]" />
            <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          </div>

          <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-start gap-6">
              <Badge variant="glass" className="uppercase">
                <Crown className="size-3.5 text-amber-300" /> Founding members
              </Badge>
              <Reveal direction="up">
                <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl md:text-display-sm">
                  Be a founding organization on Cannopy
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.05}>
                <p className="max-w-lg text-pretty text-white/80">
                  We&apos;re onboarding our first organizations now. Founding
                  members get white-glove setup, a direct line to our team, and
                  early pricing locked in for life — no logos or testimonials
                  required, just real partnership.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <div className="flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <Button asChild variant="accent" size="xl">
                      <Link href={cta.trialHref}>
                        {cta.trialLabel}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </Magnetic>
                  <Button
                    asChild
                    size="xl"
                    className="bg-white/10 text-white hover:bg-white/20"
                  >
                    <a href={cta.mailto}>Become a founding member</a>
                  </Button>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="font-display text-2xl font-bold text-cyan-300">
                    <AnimatedCounter value={100} suffix="%" />
                  </span>
                  founder-led onboarding for every early organization
                </div>
              </Reveal>
            </div>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {foundingPerks.map((perk) => (
                <RevealItem key={perk.title} className="h-full">
                  <div className="flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.08]">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
                      <Check className="size-5" />
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-white/70">{perk.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
