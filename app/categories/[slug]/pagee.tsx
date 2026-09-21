
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedProductBySlug } from "@/lib/products/queries";
import {
  formatDZD,
  productDescription,
  productName,
} from "@/lib/products/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = await getPublishedProductBySlug(slug);

  return {
    title: product
      ? `${product.name_ar} | Atelier Noura`
      : "المنتج غير موجود | Atelier Noura",
    description: product?.description_ar ?? undefined,
  };
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  let product;

  try {
    product = await getPublishedProductBySlug(slug);
  } catch {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold">
          تعذر تحميل بيانات المنتج
        </h1>
        <p className="mt-3 text-stone-600">
          يرجى المحاولة مرة أخرى لاحقًا.
        </p>
        <Link className="mt-6 inline-block underline" href="/products">
          العودة إلى المنتجات
        </Link>
      </main>
    );
  }

  if (!product) notFound();

  const images = product.images ?? [];
  const description = productDescription(product, "ar");
  const available = product.stock_quantity > 0;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav className="mb-8 text-sm text-stone-500">
        <Link href="/" className="hover:text-stone-900">
          الرئيسية
        </Link>
        {" / "}
        <Link href="/products" className="hover:text-stone-900">
          المنتجات
        </Link>
        {" / "}
        <span className="text-stone-800">{product.name_ar}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <section aria-label="صور المنتج" className="space-y-4">
          {images.length > 0 ? (
            images.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100"
              >
                <Image
                  src={src}
                  alt={`${product.name_ar} - صورة ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-stone-100 text-stone-500">
              لا توجد صور مضافة لهذا المنتج
            </div>
          )}
        </section>

        <section className="md:sticky md:top-24 md:self-start">
          <p className="text-sm tracking-wide text-stone-500">
            ATELIER NOURA
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-stone-900">
            {productName(product, "ar")}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-xl font-semibold">
              {formatDZD(product.price)}
            </span>

            {product.compare_at_price !== null &&
              product.compare_at_price > product.price && (
                <span className="text-stone-500 line-through">
                  {formatDZD(product.compare_at_price)}
                </span>
              )}
          </div>

          <div className="mt-5">
            {available ? (
              <span className="text-sm text-emerald-700">
                متوفر للطلب
              </span>
            ) : (
              <span className="text-sm text-rose-700">
                نفد المخزون حاليًا
              </span>
            )}
          </div>

          {description && (
            <div className="mt-8 border-t border-stone-200 pt-6">
              <h2 className="font-medium">وصف المنتج</h2>
              <p className="mt-3 whitespace-pre-line leading-8 text-stone-600">
                {description}
              </p>
            </div>
          )}

          <div className="mt-8 rounded-xl bg-stone-50 p-4 text-sm leading-7 text-stone-600">
            تفاصيل التوصيل ومدة التحضير تُعرض ضمن خطوات إتمام الطلب.
          </div>

          <button
            type="button"
            disabled
            className="mt-6 w-full cursor-not-allowed rounded-full bg-stone-300 px-6 py-4 font-medium text-stone-600"
            aria-label="إضافة المنتج إلى السلة غير مفعّلة بعد"
          >
            {available ? "إضافة إلى السلة — ستُفعّل في جزء السلة" : "غير متوفر حاليًا"}
          </button>

          <p className="mt-3 text-xs text-stone-500">
            زر السلة غير موصول بعد؛ سيتم ربطه بنظام السلة في جزء لاحق.
          </p>
        </section>
      </div>
    </main>
  );
}
