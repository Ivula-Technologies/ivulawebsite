import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { deliverySteps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-y border-border bg-secondary/30 py-20 md:py-28"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="How we work"
          title="Clear decisions before heavy development"
          description="A practical delivery process keeps the team focused on outcomes, makes progress visible, and reduces expensive surprises."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step) => {
            const Icon = step.icon;
            return (
              <RevealItem key={step.number} className="h-full">
                <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="absolute right-5 top-3 font-display text-6xl font-bold text-cyan-500/[0.08]">
                    {step.number}
                  </span>
                  <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <Icon className="size-5" />
                  </span>
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                      Step {step.number}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal direction="up" className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
