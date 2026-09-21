import Image from "next/image";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import { ProjectReel } from "@/components/sections/project-reel";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${project.title} at ${project.domain}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/35 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-border",
          project.mediaKind === "dashboard" &&
            "aspect-[16/10] bg-gradient-to-br from-navy-950 via-navy-900 to-cyan-950 p-4 sm:p-6",
          project.mediaKind === "photo" && "aspect-[4/3]",
          project.mediaKind === "portal" && "aspect-[4/3] bg-[#07152e]"
        )}
      >
        <Image
          src={project.media}
          alt={project.mediaAlt}
          fill
          sizes={
            project.slug === "canopy"
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 1024px) 100vw, 42vw"
          }
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.035]",
            project.mediaKind === "dashboard" &&
              "!inset-4 !size-[calc(100%-2rem)] rounded-xl object-cover object-top shadow-2xl sm:!inset-6 sm:!size-[calc(100%-3rem)]",
            project.mediaKind === "photo" && "object-cover",
            project.mediaKind === "portal" && "object-cover object-center"
          )}
        />
        {project.mediaKind === "photo" && (
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
        )}
        <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/20 bg-navy-950/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:right-6 sm:top-6">
          <ExternalLink className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
            {project.eyebrow}
          </p>
          <span className="text-xs text-muted-foreground">{project.domain}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
            Visit project <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function SelectedWork() {
  const [canopy, academy, lms] = projects;

  return (
    <section id="work" className="relative overflow-hidden border-y border-border py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] dark:opacity-20" />
      <div className="container-wide relative">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="flex flex-col items-start">
            <Reveal>
              <Badge variant="accent" className="uppercase">
                <Layers3 className="size-3.5" /> Selected work
              </Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-3xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm">
                Products people can understand, trust, and use.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:ml-auto">
              A selection of platforms we have shaped and shipped—from
              organization operations to online education and connected
              learning.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-12">
          <RevealItem className="lg:col-span-7">
            <ProjectCard project={canopy} />
          </RevealItem>
          <RevealItem className="lg:col-span-5">
            <ProjectCard project={academy} />
          </RevealItem>
          <RevealItem className="lg:col-span-5">
            <ProjectCard project={lms} />
          </RevealItem>
          <RevealItem className="lg:col-span-7">
            <ProjectReel />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
