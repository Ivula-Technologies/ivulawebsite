# Ivula Technologies website

Corporate marketing site for [Ivula Technologies](https://www.ivulatechnologies.com), built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

The site has two clear conversion paths:

- Custom software, AI automation, cloud systems, and product engineering
- Ivula Canopy, the company's flagship organization-management product

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
```

## Main routes

- `/` — corporate positioning, services, products, delivery approach, company story, and FAQ
- `/services` — product engineering and automation capabilities
- `/products` — product portfolio
- `/products/canopy` — Ivula Canopy overview
- `/pricing` — every product, service and hosting price on one page
- `/about` — vision, mission, values, journey and dreams
- `/contact` — guided enquiry paths

## Lead forms

The project brief and care plan forms POST to `public/lead.php` (set in `.env.production`), which emails each enquiry to info@ivulatechnologies.com with Reply-To set to the visitor. It needs PHP's `mail()`, which cPanel provides. It accepts same-site requests only and at most 5 per IP per hour. To use a form service instead, build with `NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://formspree.io/f/...`; with an empty value the forms fall back to opening a pre-filled email.

On cPanel/Apache, the former `/products/cannopy` URL permanently redirects to the correctly spelled route through `public/.htaccess`.

## Content and configuration

| Content | File |
| --- | --- |
| Company details, navigation, email, external Canopy URLs | `lib/site.ts` |
| Product data and product CTAs | `lib/products.ts` |
| Services, delivery process, company values, and FAQs | `lib/content.ts` |
| Global metadata and organization structured data | `app/layout.tsx` |
| Search engine routes | `app/sitemap.ts`, `app/robots.ts` |
| Official brand assets | `public/ivula-mark.svg`, `public/ivula-logo.svg` |

Product cards and detail pages are data-driven. To add another live product, append an entry to `products` in `lib/products.ts`; its detail route will be generated automatically.

## Deployment notes

- The site uses local font packages, so production builds do not depend on Google Fonts being reachable.
- No environment variables are required for the current marketing site.
- Contact links use the email address configured in `lib/site.ts`.
- Canopy trial and sign-in links point to `canopy.ivulatechnologies.com`.
- Production builds create a static `out/` directory for cPanel; upload its contents, including the hidden `.htaccess` file.
