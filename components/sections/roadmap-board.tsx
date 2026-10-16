import { CheckCircle2, Hammer, Telescope } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { roadmap, roadmapStageLabel, type RoadmapStage } from "@/lib/roadmap";
import { cn } from "@/lib/utils";

const stageStyle: Record<RoadmapStage, { icon: typeof CheckCircle2; tone: string }> = {
  shipped: { icon: CheckCircle2, tone: "text-emerald-600 dark:text-emerald-400" },
  building: { icon: Hammer, tone: "text-violet-600 dark:text-violet-300" },
  next: { icon: Telescope, tone: "text-amber-600 dark:text-amber-400" },
};

/** Three columns: shipped, building now, up next. */
export function RoadmapBoard({
  stages = ["shipped", "building", "next"],
  className,
}: {
  stages?: RoadmapStage[];
  className?: string;
}) {
  return (
    <RevealGroup
      className={cn(
        "grid gap-6",
        stages.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
        className
      )}
    >
      {stages.map((stage) => {
        const { icon: Icon, tone } = stageStyle[stage];
        const items = roadmap.filter((item) => item.stage === stage);
        return (
          <RevealItem key={stage} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <div className="flex items-center justify-between">
                <h3 className={cn("inline-flex items-center gap-2 font-display text-lg font-bold", tone)}>
                  <Icon className="size-5" /> {roadmapStageLabel[stage]}
                </h3>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  {items.length}
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {items.map((item) => (
                  <li
                    key={`${item.product}-${item.title}`}
                    className="rounded-2xl border border-border bg-background/60 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-400">
                        {item.product}
                      </p>
                      {item.when && (
                        <span className="text-xs text-muted-foreground">{item.when}</span>
                      )}
                    </div>
                    <p className="mt-1.5 font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
