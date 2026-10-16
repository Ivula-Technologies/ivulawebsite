import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { HostingPlans } from "@/components/hosting/hosting-plans";
import { hostingIncluded } from "@/lib/offers";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Hosting",
  description:
    "Ivula Hosting: cPanel web hosting with free SSL, email, one-click WordPress and daily backups from $59 a year, or KES 2,999 a year with M-Pesa.",
  alternates: { canonical: "/hosting" },
};

export default function HostingPage() {
  return (
    <>
      <PageHero
        eyebrow="Ivula Hosting · ivulahosting.co.ke"
        title={
          <>
            Honest web hosting,{" "}
            <span className="text-gradient">same price every year.</span>
          </>
        }
        description="cPanel hosting with free SSL, business email, one-click WordPress and daily backups. Pay by card in US dollars or with M-Pesa in Kenya shillings. Ivula Hosting is part of Ivula Technologies and runs at ivulahosting.co.ke."
      >
        <Button asChild variant="gradient" size="xl">
          <a href={site.hosting}>
            Visit ivulahosting.co.ke <ArrowRight className="size-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="xl">
          <Link href="/care-plans">
            <ShieldCheck className="size-4" /> Want us to run it for you?
          </Link>
        </Button>
      </PageHero>

      <section id="plans" className="scroll-mt-20 pb-16 pt-8">
        <div className="container-wide">
          <HostingPlans />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading eyebrow="Every plan includes" title="Everything a small website needs" />
          <Reveal direction="up" className="mx-auto mt-12 max-w-4xl">
            <ul className="grid gap-4 sm:grid-cols-2">
              {hostingIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-medium shadow-soft"
                >
                  <Check className="size-4 shrink-0 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal direction="up">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-cyan-500/30 bg-card p-8 shadow-glow sm:p-10 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold">
                  Rather not manage it yourself?
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Ivula Care Plans add updates, security, uptime monitoring and
                  monthly edits on top of hosting, from $49 a month.
                </p>
              </div>
              <Button asChild variant="outline" size="lg" className="w-fit shrink-0">
                <Link href="/care-plans">
                  See care plans <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
