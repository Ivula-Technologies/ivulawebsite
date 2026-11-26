import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { VideoBackground } from "@/components/shared/video-background";
import { homeApps, homeServices } from "@/lib/home";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
      {children}
    </p>
  );
}

/** Full-screen video hero with one sentence and two buttons. */
export function HomeHero() {
  return (
    <section
      data-dark-hero
      className="dark relative flex min-h-[88svh] items-center overflow-hidden bg-navy-950 pb-20 pt-32 text-foreground"
    >
      <VideoBackground clip="home" overlay="left" />
      <div className="container-wide relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Ivula Technologies · Nairobi</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              We build apps people use every day.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Our own apps serve churches, law firms, freelancers, families and
              truck owners. We build, look after and host yours too.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="gradient" size="xl">
                <Link href="#apps">
                  See our apps <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact#brief">Get a free estimate</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** One app per row, picture beside a few lines of text. */
export function HomeApps() {
  return (
    <section id="apps" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-2xl">
          <Eyebrow>Our apps</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
            What we have built.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Newest first. Screens show sample data.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {homeApps.map((app, i) => (
            <Reveal key={app.name}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <Link
                  href={app.href}
                  {...(app.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={cn(
                    "group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
                    i % 2 === 1 && "md:order-2"
                  )}
                >
                  <Image
                    src={app.image}
                    alt={app.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="max-w-lg">
                  <p className="text-sm font-medium text-muted-foreground">{app.kind}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">{app.name}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{app.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={app.href}
                      {...(app.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="inline-flex items-center gap-1.5 font-semibold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-400"
                    >
                      {app.linkLabel}
                      {app.external ? <ArrowUpRight className="size-4" /> : <ArrowRight className="size-4" />}
                    </Link>
                    {app.demo && (
                      <a
                        href={app.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-foreground underline-offset-4 hover:underline"
                      >
                        Watch the demo <ArrowUpRight className="size-4" />
                      </a>
                    )}
                    {app.price && <span className="text-sm text-muted-foreground">{app.price}</span>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The three newest client websites, with a link to the full Work page. */
export function HomeWork() {
  const recent = ["vlc-logistics", "ack-aqua-hub", "demosh-designs"].map(
    (slug) => projects.find((p) => p.slug === slug)!
  );
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Client websites</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Recent work for businesses.
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/work">
              See all our work <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {recent.map((p) => (
            <RevealItem key={p.slug}>
              <Link href="/work" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <Image
                    src={p.media}
                    alt={p.mediaAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.description}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Studio, Care Plans and Hosting as three picture cards. */
export function HomeServices() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-2xl">
          <Eyebrow>Work with us</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Build it, look after it, host it.
          </h2>
        </div>
        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {homeServices.map((s) => (
            <RevealItem key={s.name}>
              <Link href={s.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{s.description}</p>
                  <p className="mt-5 flex items-center justify-between text-sm font-semibold">
                    <span>{s.price}</span>
                    <span className="inline-flex items-center gap-1 text-cyan-700 dark:text-cyan-400">
                      Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** A photo of the founder and two lines, linking to the About page. */
export function HomeFounder() {
  const { founder } = site;
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-wide">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal>
            <Image
              src="/team/bius-candid.webp"
              alt={`${founder.name}, ${founder.role} of ${site.name}`}
              width={1600}
              height={1200}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A small team in Nairobi, building since 2022.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {founder.name} started Ivula to give small organizations software
              as good as big companies get, at a price they can afford. We build
              our own apps and build for clients with the same care.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-400"
            >
              Our story <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Closing call to action over a video. */
export function HomeCta() {
  return (
    <section data-dark-hero className="dark relative overflow-hidden bg-navy-950 py-24 text-foreground md:py-32">
      <VideoBackground clip="network" />
      <div className="container-wide relative text-center">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Have an idea for an app or a website?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Tell us about it. You get a written estimate within one business day.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gradient" size="xl">
            <Link href="/contact#brief">
              Get a free estimate <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link href="/book/">Book a call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
