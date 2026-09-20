import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { vision } from "@/lib/content";

export function Vision() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Ivula"
          title="A software partner that thinks like an owner"
          description="Founded in Nairobi in 2022, Ivula combines the care of a product team with the practical discipline of an engineering partner."
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Vertical timeline line */}
          <span className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-500/50 via-border to-transparent md:block" />

          <div className="flex flex-col gap-8">
            {vision.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <Reveal key={phase.title} direction="up" delay={i * 0.1}>
                  <div className="flex gap-5 md:gap-8">
                    <div className="relative flex-shrink-0">
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                        <Icon className="size-6" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 rounded-3xl border border-border bg-card p-7 shadow-soft">
                      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                        {phase.phase}
                      </span>
                      <h3 className="font-display text-xl font-bold">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
