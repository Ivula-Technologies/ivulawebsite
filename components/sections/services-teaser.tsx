import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/content";

export function ServicesTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal direction="right">
            <div className="flex flex-col items-start gap-6">
              <Badge variant="accent" className="uppercase">
                <Code2 className="size-3.5" /> What we do
              </Badge>
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm">
                From operational friction to dependable software.
              </h2>
              <p className="max-w-lg text-pretty text-lg text-muted-foreground">
                Ivula brings product strategy, design, engineering, AI, and
                cloud capability into one focused team. We can shape a new idea,
                automate a painful workflow, or strengthen a product that has
                outgrown its first version.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild variant="default" size="lg">
                  <Link href="/services">
                    Explore services <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Discuss a project</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(0, 4).map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform group-hover:scale-110 dark:bg-white dark:text-navy-900">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-bold">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
