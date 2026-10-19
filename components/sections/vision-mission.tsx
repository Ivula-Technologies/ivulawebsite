import Link from "next/link";
import { ArrowRight, Eye, Flag } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { mission, vision } from "@/lib/company";

/** Vision and mission side by side, with a link to the full story. */
export function VisionMission({ showLink = true }: { showLink?: boolean }) {
  const cards = [
    { icon: Eye, ...vision },
    { icon: Flag, ...mission },
  ];
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why we exist"
          title="Vision and mission"
          description="What we are building toward, and how we work every day to get there."
        />
        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, statement, detail }, i) => (
            <RevealItem key={title} className="h-full">
              <div
                className={
                  i === 0
                    ? "relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white shadow-soft-lg sm:p-10"
                    : "relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-10"
                }
              >
                {i === 0 && (
                  <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-cyan-500/30 blur-3xl" />
                )}
                <span
                  className={
                    i === 0
                      ? "relative inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300"
                      : "inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white"
                  }
                >
                  <Icon className="size-6" />
                </span>
                <p
                  className={
                    i === 0
                      ? "relative mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300"
                      : "mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400"
                  }
                >
                  {title}
                </p>
                <p className="relative mt-3 text-balance font-display text-2xl font-bold leading-snug sm:text-3xl">
                  {statement}
                </p>
                <p
                  className={
                    i === 0
                      ? "relative mt-5 text-pretty text-white/75"
                      : "mt-5 text-pretty text-muted-foreground"
                  }
                >
                  {detail}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        {showLink && (
          <Reveal direction="up" className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Our story, values and dreams <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
