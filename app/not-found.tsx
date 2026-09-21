
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-container flex min-h-[65vh] flex-col items-center justify-center py-16 text-center">
      <span className="text-sm font-semibold tracking-[0.25em] text-[#a87978]">
        ATELIER NOURA
      </span>

      <p className="mt-6 text-7xl font-bold text-[#6b4f3f]">
        404
      </p>

      <h1 className="mt-4 text-2xl font-semibold text-[#3f2d24]">
        عذرًا، لم نعثر على هذه الصفحة
      </h1>

      <p className="mt-3 max-w-md leading-7 text-[#81736a]">
        ربما تغيّر الرابط أو أن الصفحة لم تعد متاحة.
        يمكنك العودة إلى المتجر ومتابعة اكتشاف المجموعة.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          الصفحة الرئيسية
        </Link>

        <Link href="/products" className="btn btn-secondary">
          تصفحي المنتجات
        </Link>
      </div>
    </section>
  );
}
