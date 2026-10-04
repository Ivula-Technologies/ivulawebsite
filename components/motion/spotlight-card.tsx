"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a soft glow that follows the pointer. The position is written to
 * CSS variables directly, so moving the mouse never re-renders React.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn("spotlight-card group/spot relative", className)}
    >
      {children}
    </div>
  );
}
