"use client";

import * as React from "react";
import { Check, Clock3, Moon, Sun, SunMoon } from "lucide-react";
import {
  useTheme,
  type ThemePreference,
} from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const options: Array<{
  value: ThemePreference;
  label: string;
  description: string;
  icon: typeof Sun;
}> = [
  {
    value: "auto",
    label: "Automatic",
    description: "Follow local day and night",
    icon: Clock3,
  },
  {
    value: "light",
    label: "Light",
    description: "Always use light mode",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    description: "Always use dark mode",
    icon: Moon,
  },
];

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, preference, setPreference } = useTheme();
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const hydrated = React.useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  React.useEffect(() => {
    if (!open) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const visiblePreference = hydrated ? preference : "auto";
  const visibleTheme = hydrated ? theme : "light";
  const ActiveIcon =
    visiblePreference === "auto" ? SunMoon : visibleTheme === "dark" ? Moon : Sun;

  return (
    <div ref={menuRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label="Choose color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        title={`Theme: ${preference}`}
        suppressHydrationWarning
        className="relative inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ActiveIcon className="size-[18px]" />
        {visiblePreference === "auto" && (
          <span className="absolute bottom-1.5 right-1.5 size-1.5 rounded-full bg-cyan-500 ring-2 ring-background" />
        )}
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Color theme"
          className="absolute right-0 top-12 z-[70] w-64 rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-soft-lg"
        >
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Appearance
          </p>
          {options.map((option) => {
            const Icon = option.icon;
            const active = option.value === preference;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setPreference(option.value);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{option.label}</span>
                  <span className="block text-xs text-muted-foreground">
                    {option.description}
                  </span>
                </span>
                {active && <Check className="size-4 text-cyan-500" />}
              </button>
            );
          })}
          <p className="px-3 pb-1 pt-2 text-[11px] leading-relaxed text-muted-foreground">
            Automatic uses your device&apos;s local time and timezone. No
            location permission is requested.
          </p>
        </div>
      )}
    </div>
  );
}
