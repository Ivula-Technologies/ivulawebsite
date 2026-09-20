import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getProductSlugs } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/services", "/pricing", "/contact"];
  const productRoutes = getProductSlugs().map((slug) => `/products/${slug}`);

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));
}
