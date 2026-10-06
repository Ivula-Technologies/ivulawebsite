import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { site, cta } from "@/lib/site";

const products = [
  { name: "Canopy", detail: "Volunteer management for churches and nonprofits" },
  { name: "LeadFast AI", detail: "Instant replies to new leads for contractors" },
  { name: "ProposalKit", detail: "Proposals, signatures and deposits in one link" },
] as const;

export function Founder() {
  const { founder } = site;
  return (
    <section id="founder" className="relative py-20 md:py-28">
      <div className="container-wide">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal direction="up">
            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
              <Image
                src={founder.photo}
                alt={`${founder.name}, ${founder.role} of ${site.name}`}
                width={960}
                height={1200}
                className="relative aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-soft"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal direction="up">
              <Badge variant="accent" className="w-fit uppercase">
                Meet the founder
              </Badge>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {founder.name}
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                {founder.role}, {site.name}
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-muted-foreground">
                {founder.firstName} started Ivula in Nairobi in 2022 with a simple
                idea: small organizations deserve software as well made as the
                tools big companies use, at a price they can actually afford.
                Today {founder.firstName} leads a growing family of products built for the US
                market, and the studio team that designs, builds and hosts
                products for founders and growing businesses.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <ul className="flex flex-col gap-3">
                {products.map((p) => (
                  <li key={p.name} className="flex gap-3 text-sm">
                    <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-brand-gradient" />
                    <span>
                      <span className="font-semibold text-foreground">{p.name}</span>
                      <span className="text-muted-foreground"> · {p.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
                <a
                  href={cta.mailto}
                  className="inline-flex items-center gap-2 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  <Mail className="size-4" />
                  Email {founder.firstName}
                </a>
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    className="inline-flex items-center gap-2 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
