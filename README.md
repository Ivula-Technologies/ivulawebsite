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

The project brief and care plan forms POST to `public/lead.php` (set in `.env.production`), which emails each enquiry to info@ivulatechnologies.com with Reply-To set to the visitor. It needs PHP's `mail()`, which cPanel provides. To use a form service instead, build with `NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://formspree.io/f/...`; with an empty value the forms fall back to opening a pre-filled email.

How it holds up, with nothing to run or maintain:

- **No lost leads.** Every lead is written to `~/ivula-data/leads-YYYY-MM.jsonl` (next to `public_html`, never served) before it is emailed. If the email fails, the visitor still sees "sent" and the lead is in that file (cPanel File Manager).
- **Spam and floods.** Same-site posts only, a hidden honeypot field, at most 5 posts per IP and 30 in total per hour, and messages with more than 3 links or exact repeats are logged but not emailed.
- **Tests.** `bash tests/lead-php.sh` runs all of this against PHP's built-in server; CI runs it on every PR.

## Monitoring

Use [UptimeRobot](https://uptimerobot.com) (free, checks every 5 minutes, emails you when something is down). Add two HTTP(S) monitors:

1. `https://www.ivulatechnologies.com/` (keyword monitor for `Ivula`) catches the site being down or blank.
2. `https://www.ivulatechnologies.com/lead.php?health` goes red when PHP mail is missing, the lead folder is not writable, or an email failed to send in the last 24 hours. When it alerts, check `~/ivula-data/` for the saved lead and cPanel → Email Deliverability.

## Caching

`public/.htaccess` makes pages revalidate on every visit (an upload shows at once), keeps hashed `/_next/static/` files for a year, and images and videos for a month. It also compresses text and sets security headers. Turn on HTTPS with cPanel → Domains → Force HTTPS Redirect.

On cPanel/Apache, the former `/products/cannopy` and `/products/leadfast` URLs permanently redirect through `public/.htaccess`.

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
