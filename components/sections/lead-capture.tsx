import { CalendarClock, Clock, FileText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ProjectBriefForm } from "@/components/lead/project-brief-form";
import { site } from "@/lib/site";

const promises = [
  {
    icon: Clock,
    title: "Reply within one business day",
    description: "From a person who will actually work on your project.",
  },
  {
    icon: FileText,
    title: "A written estimate, free",
    description: "Scope, timeline, and cost range you can compare with anyone.",
  },
  {
    icon: ShieldCheck,
    title: "NDA on request",
    description: "Your idea stays yours. You own all code and designs.",
  },
];

/** Homepage closing section: what happens next + the project brief form. */
export function LeadCapture() {
  return (
    <section
      id="brief"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-secondary/30 py-20 md:py-28"
    >
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal direction="right" className="flex flex-col items-start gap-6">
            <Badge variant="accent" className="uppercase">
              Free project estimate
            </Badge>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm">
              Tell us what you want to build.{" "}
              <span className="text-gradient">We&apos;ll show you how.</span>
            </h2>
            <p className="max-w-lg text-pretty text-lg text-muted-foreground">
              Two minutes on the form is enough for us to come back with
              honest advice, a rough plan, and what it would take to ship.
            </p>
            <ul className="mt-2 flex flex-col gap-5">
              {promises.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {site.bookingUrl && (
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
              >
                <CalendarClock className="size-4" /> Prefer to talk? Book a
                30-minute call
              </a>
            )}
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <ProjectBriefForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
