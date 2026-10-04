import Link from "next/link";
import { ArrowRight, Check, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { engagements } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Productized entry offers, rendered from `engagements` in lib/content.ts. */
export function Engagements() {
  return (
    <section id="engagements" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Ways to start"
          title="Pick the first step that fits where you are"
          description="Every engagement starts with a free call and a written estimate. No retainers to unlock, no surprise invoices."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagements.map((engagement) => {
            const Icon = engagement.icon;
            return (
              <RevealItem key={engagement.slug} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col gap-6 rounded-3xl border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
                    engagement.featured
                      ? "border-cyan-500/50 ring-1 ring-cyan-500/30"
                      : "border-border"
                  )}
                >
                  {engagement.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold">
                        {engagement.name}
                      </h3>
                      <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Clock className="size-3.5" /> {engagement.timeline}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {engagement.headline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {engagement.description}
                    </p>
                  </div>
                  <ul className="flex flex-1 flex-col gap-3">
                    {engagement.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={engagement.featured ? "gradient" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    <Link href={`/contact?type=${engagement.slug}#brief`}>
                      {engagement.cta} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
