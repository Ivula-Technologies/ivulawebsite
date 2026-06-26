"use client";

import { cn } from "@/lib/utils";

/**
 * Layered animated aurora + grid backdrop for hero sections.
 * Pure CSS animation (GPU transforms) — cheap and respects reduced motion
 * via the global media query in globals.css.
 */
export function AuroraBackground({
  className,
  withGrid = true,
}: {
  className?: string;
  withGrid?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Aurora blobs */}
      <div className="absolute -left-1/4 top-[-20%] h-[60vh] w-[60vh] rounded-full bg-cyan-400/30 blur-[120px] animate-aurora-shift" />
      <div className="absolute right-[-10%] top-[-10%] h-[55vh] w-[55vh] rounded-full bg-navy-400/40 blur-[130px] animate-aurora-shift [animation-delay:-4s]" />
      <div className="absolute bottom-[-25%] left-1/3 h-[60vh] w-[60vh] rounded-full bg-cyan-500/25 blur-[120px] animate-aurora-shift [animation-delay:-8s]" />

      {/* Moving grid */}
      {withGrid && (
        <div className="absolute inset-0 bg-grid opacity-[0.5] mask-radial dark:opacity-[0.18]" />
      )}

      {/* Top vignette for header legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
