import { VideoBackground, type HeroClip } from "@/components/shared/video-background";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

/**
 * Compact hero used at the top of interior pages (products, services, etc.),
 * always dark, over a looping tech video picked to fit the page.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  video = "network",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  video?: HeroClip;
}) {
  return (
    <section data-dark-hero className="dark relative overflow-hidden bg-navy-950 pt-28 pb-14 text-foreground md:pt-36 md:pb-20">
      <VideoBackground clip={video} />
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
