"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { flagship } from "@/lib/products";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              One platform for your members,
              <br className="hidden sm:block" /> money, and momentum
            </>
          }
          description="Everything a member-based organization needs — finally connected, instead of scattered across tools."
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          {/* Sticky visual */}
          <Reveal direction="right" className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-aurora opacity-60 blur-2xl" />
              <BrowserFrame
                src={flagship.screenshot}
                alt="Ivula Cannopy features preview"
                url="app.ivulatechnologies.com/dashboard"
              />
            </div>
          </Reveal>

          {/* Feature list */}
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {flagship.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <RevealItem key={feature.title} className="h-full">
                  <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-card-hover">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white dark:text-cyan-400">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        <Reveal direction="up" className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products/cannopy">
              Explore all of Cannopy <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
