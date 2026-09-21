
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getActiveCategoryBySlug,
  getPublishedProductsByCategory,
} from "@/lib/products/queries";
import {
  formatDZD,
  productName,
  type Product,
} from "@/lib/products/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = await getActiveCategoryBySlug(slug);

  return {
    title: category
      ? `${category.name_ar} | Atelier Noura`
      : "التصنيف غير موجود | Atelier Noura",
  };
}

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
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-stone-500">
              لا توجد صورة
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="font-medium">{productName(product, "ar")}</h2>
          <p className="mt-2 font-semibold">{formatDZD(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const category = await getActiveCategoryBySlug(slug);
  if (!category) notFound();

  let products: Product[];

  try {
    products = await getPublishedProductsByCategory(slug);
  } catch {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold">{category.name_ar}</h1>
        <p className="mt-4 text-stone-600">
          تعذر تحميل منتجات هذا التصنيف. يرجى المحاولة لاحقًا.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link
        href="/products"
        className="text-sm text-stone-500 hover:text-stone-900"
      >
        ← جميع المنتجات
      </Link>

      <header className="mb-10 mt-6">
        <h1 className="text-3xl font-semibold">{category.name_ar}</h1>
        {category.description_ar && (
          <p className="mt-3 max-w-2xl text-stone-600">
            {category.description_ar}
          </p>
        )}
      </header>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 p-12 text-center">
          <h2 className="text-xl font-medium">
            لا توجد منتجات منشورة في هذا التصنيف
          </h2>
          <p className="mt-2 text-stone-600">
            أضيفي منتجات إلى هذا التصنيف وانشريها لتظهر هنا.
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
