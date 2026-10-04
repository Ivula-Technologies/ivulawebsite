# Launching care plans: setup checklist

The `/care-plans` page works as soon as it is deployed: without payment links,
every plan button scrolls to the sign-up form, which emails
`info@ivulatechnologies.com` (or posts to `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` when
set). Add Stripe links when billing is ready and the buttons go straight to
checkout.

## 1. Company and payments (owner action)

- [ ] Form the US LLC (Stripe Atlas, Doola or Firstbase), get the EIN.
- [ ] Open a USD business account (Mercury, Relay or Wise Business).
- [ ] Create the Stripe account under the LLC; turn on cards, ACH Direct Debit,
      Apple Pay and Google Pay.
- [ ] Diary the yearly Form 5472 + pro forma 1120 filing (foreign-owned LLC).

## 2. Stripe products and Payment Links

In Stripe → Product catalog, create one product per plan with two recurring
prices:

| Product | Monthly price | Yearly price |
| --- | --- | --- |
| Essential care plan | $49 / month | $490 / year |
| Growth care plan | $99 / month | $990 / year |
| Commerce care plan | $199 / month | $1,990 / year |

For each of the six prices, create a Payment Link:

- Collect the customer's **website address** with a custom text field.
- Require the client to accept terms, linking to the service agreement.
- After payment, redirect to `https://www.ivulatechnologies.com/care-plans/?plan=<slug>#start`
  so the client can send migration details.
- Turn on the Stripe customer portal so clients can update cards and cancel.

## 3. Build-time environment variables

Set these where the site is built (local `.env.local`, CI, or the machine that
runs `npm run build` before uploading `out/` to cPanel):

```bash
NEXT_PUBLIC_STRIPE_LINK_ESSENTIAL_MONTHLY=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_ESSENTIAL_ANNUAL=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_GROWTH_MONTHLY=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_GROWTH_ANNUAL=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_COMMERCE_MONTHLY=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_COMMERCE_ANNUAL=https://buy.stripe.com/...
# Optional, shared with the project brief form:
NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://formspree.io/f/...
```

Payment Links are public URLs, so they are safe in the static build. Never put
Stripe secret keys here.

## 4. Hosting stack

- [ ] Cloudways (or RunCloud/SpinupWP on your own server) with a server in a US
      East region. Start with one 2–4 GB server; add more at ~15 sites each.
- [ ] Off-site backups to a different provider (e.g. Backblaze B2 or S3).
- [ ] Uptime monitor (UptimeRobot, Better Stack) with a public status page at
      `status.ivulatechnologies.com`.
- [ ] Multi-site dashboard for updates (MainWP or ManageWP).
- [ ] Support inbox `support@` and abuse/DMCA inboxes `abuse@`, `dmca@`.
- [ ] Register a DMCA designated agent with the US Copyright Office.

## 5. Legal documents

Templates in this folder — have a US lawyer review before the first client:

- [Service agreement](./service-agreement.md)
- [Service level agreement](./sla.md)
- [Acceptable use policy](./acceptable-use-policy.md)

Publish the final versions on the site and link them from the Stripe Payment
Links' terms checkbox.

## 6. Agency partner pricing

Suggested white-label partner pricing (partner bills their own client):

| Plan | Retail | Partner price |
| --- | --- | --- |
| Essential | $49 | $29 |
| Growth | $99 | $65 |
| Commerce | $199 | $135 |

Partners get unbranded reports and support through their own email address.
