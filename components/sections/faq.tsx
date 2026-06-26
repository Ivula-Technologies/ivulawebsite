import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/content";
import { cta, site } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions, answered"
              description="The things organizations ask us most — straight answers, no fine print."
            />
            <Reveal direction="up" className="mt-8">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-sm text-muted-foreground">
                  Still have a question?
                </p>
                <a
                  href={cta.mailto}
                  className="mt-2 inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  <Mail className="size-4" />
                  {site.contact.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
