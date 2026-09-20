"use client";

import * as React from "react";

export type Theme = "light" | "dark";
export type ThemePreference = "auto" | Theme;

interface ThemeContextValue {
  theme: Theme;
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "ivula-theme";

function getAutomaticTheme(date = new Date()): Theme {
  const localHour = date.getHours() + date.getMinutes() / 60;
  return localHour >= 18.5 || localHour < 6.5 ? "dark" : "light";
}

function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "auto";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "auto" || saved === "light" || saved === "dark") {
      return saved;
    }

    // Keep an explicit choice made with the previous two-state theme control.
    const legacy = localStorage.getItem("theme");
    return legacy === "light" || legacy === "dark" ? legacy : "auto";
  } catch {
    return "auto";
  }
}

function resolveTheme(preference: ThemePreference): Theme {
  return preference === "auto" ? getAutomaticTheme() : preference;
}

function applyTheme(preference: ThemePreference, theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.dataset.themeMode = preference;
  root.style.colorScheme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, preference);
    localStorage.removeItem("theme");
  } catch {
    // The visual theme still works when storage is unavailable.
  }
}

/**
 * Lightweight theme provider (no extra dependency). Automatic mode follows
 * the visitor's browser-local time and timezone: light between 06:30–18:30,
 * dark overnight. An explicit light/dark choice is persisted in localStorage.
 * The inline script in app/layout.tsx applies the class before paint.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = React.useState<ThemePreference>(
    getStoredPreference
  );
  const [theme, setThemeState] = React.useState<Theme>(() =>
    resolveTheme(getStoredPreference())
  );

  const setPreference = React.useCallback((next: ThemePreference) => {
    const resolved = resolveTheme(next);
    setPreferenceState(next);
    setThemeState(resolved);
    applyTheme(next, resolved);
  }, []);

  // Re-apply after a Strict Mode development remount, which can restore the
  // attributes declared by the server-rendered root element.
  React.useLayoutEffect(() => {
    applyTheme(preference, theme);
  }, [preference, theme]);

  React.useEffect(() => {
    if (preference !== "auto") return;

    const refreshAutomaticTheme = () => {
      if (document.visibilityState === "hidden") return;
      const next = getAutomaticTheme();
      setThemeState((current) => {
        if (current !== next) applyTheme("auto", next);
        return next;
      });
    };

    const timer = window.setInterval(refreshAutomaticTheme, 60_000);
    window.addEventListener("focus", refreshAutomaticTheme);
    document.addEventListener("visibilitychange", refreshAutomaticTheme);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", refreshAutomaticTheme);
      document.removeEventListener("visibilitychange", refreshAutomaticTheme);
    };
  }, [preference]);

  React.useEffect(() => {
    const syncAcrossTabs = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY || !event.newValue) return;
      if (
        event.newValue !== "auto" &&
        event.newValue !== "light" &&
        event.newValue !== "dark"
      ) {
        return;
      }
      const next = event.newValue as ThemePreference;
      const resolved = resolveTheme(next);
      setPreferenceState(next);
      setThemeState(resolved);
      applyTheme(next, resolved);
    };

    window.addEventListener("storage", syncAcrossTabs);
    return () => window.removeEventListener("storage", syncAcrossTabs);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, preference, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
