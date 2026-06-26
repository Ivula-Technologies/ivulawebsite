import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { flagship } from "@/lib/products";

export function WhoItsFor() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Who it's for"
          title="If your organization runs on people, this is for you"
          description="Cannopy is built for the communities that hold the world together — and the specific headaches each one faces."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flagship.audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <RevealItem key={aud.label} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug">
                    {aud.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{aud.pain}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
