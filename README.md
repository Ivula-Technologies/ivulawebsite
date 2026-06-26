# Ivula Technologies — Marketing Website

A world-class, award-quality marketing site for **Ivula Technologies**, a software
product studio, and its flagship product **Ivula Cannopy** — an organization-management
platform for churches, nonprofits, youth groups, cooperatives, and member-based
communities.

Built to market the **company** and a **growing family of products**, with an
extensible, data-driven product architecture so new products can be added without
redesigning anything.

---

## ✨ Highlights

- **Next.js 14 (App Router) + TypeScript**
- **Tailwind CSS** with a custom navy + cyan brand system and full **dark mode**
- **shadcn-style** components, customized (not a default template look)
- **Framer Motion** for component/scroll/route animation + **Lenis** smooth scrolling
- Animated **aurora/grid hero**, scroll reveals, animated counters, magnetic CTAs,
  page transitions, micro-interactions
- **Fully accessible & `prefers-reduced-motion`-aware** — all motion is gated, so it
  never hurts usability or Lighthouse
- **Products as data** — add a product by editing one file
- Email-only contact (no phone, no form backend) — deploys to **Vercel** as-is

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Requires Node 18.17+ (Node 20+ recommended).

---

## 🗂 Project structure

```
app/
  layout.tsx              # Root layout: fonts, providers, header/footer, metadata
  page.tsx                # Homepage (composes the sections below)
  products/page.tsx       # /products — data-driven product grid
  products/[slug]/page.tsx# /products/[slug] — reusable product detail template
  services/page.tsx       # /services — custom software dev + "request a quote"
  pricing/page.tsx        # /pricing — free-trial / founding-member framing
  contact/page.tsx        # /contact — email-only contact
  not-found.tsx           # Custom 404

components/
  layout/                 # Header, Footer, PageTransition
  sections/               # Homepage sections (hero, features, faq, ...)
  product/                # ProductCard + ProductDetail template (extensible)
  shared/                 # Logo, AuroraBackground, BrowserFrame, PageHero, ...
  motion/                 # Reveal, AnimatedCounter, Magnetic, reduced-motion hook
  providers/              # ThemeProvider (dark mode), LenisProvider (smooth scroll)
  ui/                     # Button, Badge, Accordion, Slot (shadcn-style primitives)

lib/
  products.ts             # ⭐ SINGLE SOURCE OF TRUTH for all products
  site.ts                 # Brand name, contact email, navigation, CTA config
  content.ts              # FAQ, founding-member perks, services, vision timeline
  utils.ts                # cn() helper

public/
  favicon.svg
  screenshots/            # 🔁 PLACEHOLDER images — swap with real screenshots
```

---

## ➕ How to add a new product (the important part)

**Products are data, not pages.** The `/products` grid, the `/products/[slug]`
detail pages, and the homepage "Our products" section all render from a single
array.

1. Open **`lib/products.ts`**.
2. Copy the `cannopy` object and append a new entry to the `products` array:

```ts
{
  slug: "newproduct",                    // → /products/newproduct
  name: "NewProduct",
  fullName: "Ivula NewProduct",
  status: "live",                        // "live" | "beta" | "coming-soon"
  tagline: "One-line pitch for cards.",
  headline: "Big hero headline.",
  subhead: "Supporting hero paragraph.",
  description: "Longer overview paragraph.",
  accent: { from: "#3450a8", to: "#06b0d4" },   // card/gradient accent
  icon: SomeLucideIcon,                  // import from lucide-react at the top
  screenshot: "/screenshots/newproduct.svg",
  audiences: [ /* { icon, label, pain } */ ],
  features:  [ /* { icon, title, description } */ ],
  steps:     [ /* { title, description } */ ],
  stats:     [ /* { value, suffix?, prefix?, label } */ ],
  cta: {
    primaryLabel: "Start free trial", primaryHref: "/pricing",
    secondaryLabel: "Request a demo", secondaryHref: "/contact",
  },
},
```

3. Drop a screenshot at the `screenshot` path. **Done** — the new product now
   appears in the grid, gets its own detail page, and shows on the homepage.

**Roadmap teaser:** set `status: "coming-soon"` to render a non-clickable
"more coming" teaser card (see the `more` entry) with no detail page. The detail
routes (`getProductSlugs`) automatically skip coming-soon products.

---

## 🎨 Swapping brand assets & content

| What | Where |
| --- | --- |
| Company name, tagline, **contact email**, nav, social links | `lib/site.ts` |
| FAQ, founding-member perks, services, vision timeline | `lib/content.ts` |
| Logo mark / wordmark | `components/shared/logo.tsx` (inline SVG) + `public/favicon.svg` |
| Brand colors / gradients / shadows | `tailwind.config.ts` + CSS vars in `app/globals.css` |
| Fonts | `app/layout.tsx` (`next/font` — Inter + Sora by default) |
| Product screenshots | `public/screenshots/*` (all placeholders are clearly marked) |

> **Contact:** the site is **email-only** by design — no phone number appears
> anywhere. The contact email is set once in `lib/site.ts`
> (`site.contact.email`) and reused in the header, footer, and contact section
> via `mailto:` links. The primary CTA everywhere is **Start free trial**.

### Replacing placeholder screenshots

The files in `public/screenshots/` are hand-built SVG placeholders with a
comment marking them as such. Replace them with real exports (SVG, PNG, or JPG —
just keep the same filename, or update the `screenshot` path in `lib/products.ts`).
A 16:10 aspect ratio fits the `BrowserFrame` best.

---

## ♿ Accessibility & performance

- Semantic landmarks, skip-to-content link, keyboard-navigable menus & accordion.
- Every animation checks `prefers-reduced-motion` (via `usePrefersReducedMotion`)
  **and** a global CSS fallback in `globals.css` — reduced motion users get an
  instant, static experience.
- Lenis smooth scroll is disabled entirely under reduced motion.
- Animations use GPU-friendly transforms/opacity and lazy `whileInView` triggers
  to stay at 60fps.

---

## ▲ Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel (it auto-detects Next.js — no config needed).
3. Deploy. There is **no backend or environment variable** required; contact is
   handled entirely via `mailto:` links.

---

## 📝 Notes for the team

- All marketing copy lives in `lib/*.ts` and the section components — no CMS.
- The flagship product (Cannopy) is wired up; the architecture is ready for
  products #2, #3, … with zero layout work.
- Search the codebase for `PLACEHOLDER` to find everything intended to be swapped.
