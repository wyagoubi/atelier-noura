
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number | null;
  imageUrl?: string | null;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  available?: boolean;
};

type ProductCardProps = {
  product: ProductCardData;
  onAddToCart?: (product: ProductCardData) => void;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-DZ", {
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const available = product.available !== false;

  return (
    <article className="product-card group overflow-hidden rounded-2xl border border-[#e7ddd2] bg-[#fffdf9] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(63,45,36,0.10)]">
      <Link
        href={`/products/${product.slug}`}
        className="block"
        aria-label={`عرض ${product.name}`}
      >
        <div className="product-image-frame relative aspect-[4/5]">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="product-image"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-[#efe6da] text-sm text-[#81736a]">
              صورة المنتج
            </div>
          )}

          <div className="absolute start-3 top-3 flex flex-wrap gap-2">
            {product.isNew && (
              <span className="rounded-full bg-[#fffdf9] px-3 py-1 text-xs font-semibold text-[#6b4f3f] shadow-sm">
                جديد
              </span>
            )}

            {product.isOnSale && (
              <span className="rounded-full bg-[#c58f91] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                تخفيض
              </span>
            )}

            {product.isFeatured && (
              <span className="rounded-full bg-[#6b4f3f] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                مميز
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link
          href={`/products/${product.slug}`}
          className="line-clamp-2 min-h-12 font-medium text-[#3f2d24] transition hover:text-[#c58f91]"
        >
          {product.name}
        </Link>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-semibold text-[#6b4f3f]">
            {formatPrice(product.price)} دج
          </span>

          {product.compareAtPrice &&
            product.compareAtPrice > product.price && (
              <span className="text-sm text-[#81736a] line-through">
                {formatPrice(product.compareAtPrice)} دج
              </span>
            )}
        </div>

        <button
          type="button"
          disabled={!available || !onAddToCart}
          onClick={() => onAddToCart?.(product)}
          className="btn btn-primary mt-4 w-full text-sm"
        >
          <ShoppingBag size={17} />
          {!available
            ? "غير متوفر"
            : "أضيفي إلى السلة"}
        </button>
      </div>
    </article>
  );
}
