# Care plan runbook

How the team delivers care plans, from a new sign-up to the monthly routine.

## New client onboarding (target: live within 2 business days)

1. **Within 1 business day of sign-up:** reply from `support@`, confirm the plan,
   and ask for access: current host login (or a full backup), WordPress admin,
   domain registrar or DNS login.
2. **Check fit:** PHP version, plugins, site size, signs of malware. If it was
   already hacked, quote cleanup before migrating.
3. **Billing:** if they used the form, send the Stripe Payment Link for their
   plan. Do not start migration until the first payment succeeds.
4. **Migrate:** create the app on the server, copy files and database, add SSL,
   test on the temporary URL (forms, checkout, logins, mobile).
5. **Cut over DNS** at a low-traffic time (US evening). Keep the old host live
   for 7 days.
6. **Set up care:** add to the backup schedule, uptime monitor, update dashboard,
   and the client tracker.
7. **Welcome email:** what is now handled, how to request edits, support hours,
   and the status page link.

## Monthly routine (per site)

| When | Task |
| --- | --- |
| Weekly | Apply updates on staging or with a pre-update backup, then check key pages |
| Weekly | Security scan (Growth, Commerce) |
| Monthly | Test-restore one backup to a scratch app, then delete it |
| Monthly | Speed check (PageSpeed Insights mobile) and fix regressions |
| Monthly | Send the report: updates applied, uptime, speed, edits done, hours left |
| Monthly | Log hours used per client to check margin |

## Incidents

1. Uptime alert fires → on-call person acknowledges within the SLA time.
2. Check server status first (one server down = many clients affected).
3. Fix or restore from the latest clean backup.
4. Email the client: what happened, how long, what was done.
5. Note it in the client tracker; apply service credits if the month's uptime
   falls under 99.9%.

**On-call:** US support hours (8am to 6pm Eastern) are 3pm to 1am in Nairobi,
so support runs as an afternoon and evening shift. Nairobi mornings cover the US
night. Set a rota so critical alerts are answered 24/7 within the SLA times.

## Hacked site

1. Take the site offline behind a maintenance page.
2. Restore the last clean backup, then update everything and rotate all
   passwords and salts.
3. Scan again, then bring it back online and tell the client what happened.

## Cancellation

1. Confirm in writing and cancel the Stripe subscription at period end.
2. Send a full backup (files + database) within 5 business days.
3. Keep the site live 14 days, then remove it from the server, monitor and
   dashboard. Keep backups 30 days, then delete.

## Monthly numbers to review

- Active clients and MRR per plan
- Churned clients and the reason
- Average hours per client per plan vs. included hours
- Server cost per site
