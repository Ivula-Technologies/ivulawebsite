import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="up">
          <Badge variant="accent" className="uppercase">
            {eyebrow}
          </Badge>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2
          className={cn(
            "max-w-3xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
