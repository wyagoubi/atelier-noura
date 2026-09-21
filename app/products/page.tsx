
import Link from "next/link";
import Image from "next/image";
import { getPublishedProducts } from "@/lib/products/queries";
import {
  formatDZD,
  productName,
  type Product,
} from "@/lib/products/types";

export const metadata = {
  title: "جميع المنتجات | Atelier Noura",
  description: "اكتشفي منتجات Atelier Noura المصنوعة بعناية.",
};

function ProductTile({ product }: { product: Product }) {
  const image = product.images?.[0];

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          {image ? (
            <Image
              src={image}
              alt={product.name_ar}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-stone-500">
              لا توجد صورة لهذا المنتج
            </div>
          )}
        </div>

        <div className="space-y-2 p-4">
          <h2 className="font-medium text-stone-900">
            {productName(product, "ar")}
          </h2>
          <p className="font-semibold text-stone-800">
            {formatDZD(product.price)}
          </p>
          {product.stock_quantity <= 0 && (
            <span className="text-sm text-rose-700">نفد المخزون</span>
          )}
        </div>
      </Link>
    </article>
  );
}

export default async function ProductsPage() {
  let products: Product[];

  try {
    products = await getPublishedProducts();
  } catch {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold">جميع المنتجات</h1>
        <p className="mt-4 text-stone-600">
          تعذر تحميل المنتجات الآن. يرجى المحاولة لاحقًا.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <p className="text-sm text-stone-500">Atelier Noura</p>
        <h1 className="mt-2 text-3xl font-semibold text-stone-900">
          جميع المنتجات
        </h1>
        <p className="mt-3 text-stone-600">
          قطع مختارة تُصنع بعناية وحب.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 p-12 text-center">
          <h2 className="text-xl font-medium">لا توجد منتجات منشورة حاليًا</h2>
          <p className="mt-2 text-stone-600">
            ستظهر المنتجات هنا بعد إضافتها ونشرها من لوحة الإدارة.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
