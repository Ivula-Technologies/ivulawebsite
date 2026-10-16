import Image from "next/image";
import { getProduct } from "@/lib/products";
import { cn } from "@/lib/utils";

/**
 * A product's own logo mark on a soft tile, or its icon on the brand
 * gradient when the product has no logo yet. Resolved by slug so it can be
 * used from server and client components alike.
 */
export function ProductMark({
  slug,
  size = "md",
  className,
}: {
  slug: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const product = getProduct(slug);
  if (!product) return null;
  const Icon = product.icon;
  const box = {
    sm: "size-9 rounded-xl",
    md: "size-12 rounded-2xl",
    lg: "size-16 rounded-[1.25rem]",
  }[size];
  const inner = { sm: "size-6", md: "size-8", lg: "size-11" }[size];

  if (product.logo) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center border border-border bg-white shadow-soft",
          box,
          className
        )}
      >
        <Image
          src={product.logo}
          alt=""
          width={96}
          height={96}
          className={cn("object-contain", inner)}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-white shadow-soft",
        box,
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${product.accent.from}, ${product.accent.to})`,
      }}
    >
      <Icon className={cn(size === "sm" ? "size-4" : size === "md" ? "size-6" : "size-8")} />
    </span>
  );
}
