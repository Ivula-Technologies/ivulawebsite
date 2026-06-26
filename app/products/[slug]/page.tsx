import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { getProduct, getProductSlugs } from "@/lib/products";

interface PageProps {
  params: { slug: string };
}

/** Statically generate a page for every live product. */
export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.fullName} — ${product.tagline}`,
    description: product.subhead,
    openGraph: {
      title: `${product.fullName} — ${product.headline}`,
      description: product.subhead,
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductDetail slug={product.slug} />;
}
