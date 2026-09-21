/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Export the marketing site as plain static files so it can be hosted
  // directly from cPanel/Apache without a long-running Node.js process.
  output: "export",

  // Produce directory-style routes such as /services/index.html. This works
  // cleanly on standard cPanel/Apache hosting.
  trailingSlash: true,

  // Next.js image optimization requires a Next.js server. Disable it for the
  // static cPanel build; the browser will serve the exported image assets.
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
