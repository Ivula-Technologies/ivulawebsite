import { AuroraBackground } from "@/components/shared/aurora-background";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

/**
 * Compact hero used at the top of interior pages (products, services, etc.).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <AuroraBackground />
      <div className="container-wide relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow && (
            <Reveal direction="up">
              <Badge variant="accent" className="uppercase">
                {eyebrow}
              </Badge>
            </Reveal>
          )}
          <Reveal direction="up" delay={0.05}>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-display-md">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
                {description}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal direction="up" delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
