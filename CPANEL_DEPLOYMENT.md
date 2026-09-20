# cPanel deployment

This site is configured as a static Next.js export for standard cPanel/Apache hosting.

## Build

Use Node.js 20 or newer.

```bash
npm ci
npm run build
```

A successful build creates an `out/` directory.

## Upload to cPanel

1. In cPanel, open **File Manager**.
2. Open the document root for `ivulatechnologies.com` (normally `public_html/`, unless the domain is configured with a different document root).
3. Back up or remove the old website files from that document root.
4. Upload the **contents of `out/`**, not the `out` folder itself.
5. Confirm that `index.html`, `_next/`, `products/`, `services/`, `pricing/`, and `contact/` are directly inside the document root.
6. In cPanel **SSL/TLS Status**, enable AutoSSL for the domain.
7. Test the temporary/server URL if available before changing DNS.

## DNS cutover

Only after the cPanel copy is working:

1. Point the domain's authoritative DNS back to the DNS provider you intend to use (for HostPinnacle-managed DNS, use the nameservers shown in your HostPinnacle account).
2. In the DNS zone, point the root domain and `www` to the cPanel hosting account as instructed by HostPinnacle.
3. Wait for DNS propagation.
4. Verify both:
   - https://ivulatechnologies.com
   - https://www.ivulatechnologies.com
5. Remove the old Vercel domain/project only after the cPanel site is confirmed live.

## Important

The current site is suitable for static export because its contact actions are `mailto:` links and the product detail pages are generated at build time. If server-side APIs, authentication, or server actions are added later, the deployment strategy will need to change.
