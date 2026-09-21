import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { getProduct, getProductSlugs } from "@/lib/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Statically generate a page for every live product. */
export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.fullName} — ${product.tagline}`,
    description: product.subhead,
    openGraph: {
      title: `${product.fullName} — ${product.headline}`,
      description: product.subhead,
      url: `/products/${product.slug}`,
    },
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage(props: PageProps) {
  const params = await props.params;
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductDetail slug={product.slug} />;
}
