import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { statusLabel, type ProductStatus } from "@/lib/products";
import { cn } from "@/lib/utils";

const variant = {
  live: "live",
  "early-access": "early",
  "coming-soon": "soon",
} as const;

export function StatusBadge({
  status,
  className,
}: {
  status: ProductStatus;
  className?: string;
}) {
  return (
    <Badge variant={variant[status]} className={cn("whitespace-nowrap", className)}>
      {status === "live" ? (
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
      ) : (
        <Sparkles className="size-3" />
      )}
      {statusLabel[status]}
    </Badge>
  );
}
