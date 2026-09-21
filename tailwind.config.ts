import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Brand tokens
        navy: {
          50: "#eef2fb",
          100: "#d6def5",
          200: "#aebfe9",
          300: "#7e96d8",
          400: "#506dc2",
          500: "#3450a8",
          600: "#283e85",
          700: "#1f2f66",
          800: "#16224a",
          900: "#0e1733",
          950: "#070c1d",
        },
        cyan: {
          50: "#ecfdff",
          100: "#cff8fe",
          200: "#a4effc",
          300: "#67e2f9",
          400: "#22cdee",
          500: "#06b0d4",
          600: "#088cb2",
          700: "#0e7091",
          800: "#155b76",
          900: "#164b64",
          950: "#083345",
        },
        // shadcn semantic tokens (HSL CSS vars)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-xl": ["6rem", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, hsl(var(--primary)) 0%, #3450a8 45%, #06b0d4 100%)",
        "aurora":
          "radial-gradient(40% 60% at 20% 20%, rgba(34,205,238,0.35) 0%, transparent 60%), radial-gradient(50% 60% at 80% 30%, rgba(80,109,194,0.45) 0%, transparent 55%), radial-gradient(60% 70% at 50% 90%, rgba(6,176,212,0.3) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,205,238,0.15), 0 18px 50px -12px rgba(6,176,212,0.45)",
        "soft": "0 10px 40px -15px rgba(14,23,51,0.25)",
        "soft-lg": "0 24px 70px -24px rgba(14,23,51,0.35)",
        "card-hover": "0 30px 80px -28px rgba(20,34,74,0.45)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-3%,0) scale(1.08)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "aurora-shift": "aurora-shift 14s ease-in-out infinite",
        "grid-pan": "grid-pan 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
