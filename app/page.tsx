
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";

const categories = [
  {
    title: "الحقائب",
    description: "حقائب بلمسات يدوية وتفاصيل مميزة",
    href: "/categories/bags",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    imageAlt: "حقيبة أنيقة ضمن صورة إلهامية للمتجر",
  },
  {
    title: "الإكسسوارات",
    description: "تفاصيل صغيرة تضيف لمسة خاصة",
    href: "/categories/accessories",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "أقمشة وأزياء ضمن صورة إلهامية",
  },
  {
    title: "الملابس",
    description: "تصاميم بخامات وتفاصيل ناعمة",
    href: "/categories/clothing",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "ملابس ضمن صورة إلهامية",
  },
  {
    title: "التنورات",
    description: "اختيارات أنيقة لمختلف المناسبات",
    href: "/categories/skirts",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85",
    imageAlt: "إطلالة ملابس ضمن صورة إلهامية",
  },
];

const faqs = [
  {
    question: "كيف يمكنني تقديم طلب؟",
    answer:
      "اختاري المنتج الذي يعجبك، أضيفيه إلى السلة، ثم أكملي بيانات التوصيل وأرسلي الطلب.",
  },
  {
    question: "هل يمكنني اختيار اللون أو المقاس؟",
    answer:
      "تظهر الخيارات المتاحة في صفحة المنتج عندما تكون محددة من إدارة المتجر.",
  },
  {
    question: "هل يتوفر التوصيل إلى ولايتي؟",
    answer:
      "تُعرض خيارات التوصيل والأسعار المتاحة حسب الولاية عند إتمام الطلب.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#efe6da]">
        <div className="page-container grid min-h-[560px] items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="animate-rise-in relative z-10">
            <span className="mb-5 inline-flex rounded-full border border-[#cdb9a5] bg-[#fffdf9]/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#6b4f3f]">
              تفاصيل تُصنع بحب
            </span>

            <h1 className="max-w-xl text-4xl leading-[1.4] font-bold text-[#3f2d24] sm:text-5xl lg:text-6xl">
              أناقة تبدأ من
              <span className="block text-[#a87978]">
                لمسة يدوية
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#81736a] sm:text-lg">
              اكتشفي عالم Atelier Noura، حيث تلتقي الخياطة
              اليدوية بالتفاصيل الهادئة والتصاميم المصنوعة بعناية.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">
                اكتشفي المجموعة
                <span aria-hidden="true">←</span>
              </Link>

              <Link href="/about" className="btn btn-secondary">
                قصتنا
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#81736a]">
              <span>خياطة يدوية</span>
              <span>اهتمام بالتفاصيل</span>
              <span>تصاميم مميزة</span>
            </div>
          </div>

          <div className="animate-fade-in relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#cdb9a5]/70" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#d9cbbc]">
              <Image
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=85"
                alt="أدوات وأقمشة للخياطة اليدوية"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3f2d24]/35 via-transparent to-transparent" />

              <div className="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/30 bg-[#fffdf9]/90 p-4 backdrop-blur-sm">
                <p className="text-xs text-[#81736a]">
                  Atelier Noura
                </p>
                <p className="mt-1 text-lg font-semibold text-[#3f2d24]">
                  لكل تفصيلة حكاية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-spacing">
        <div className="page-container">
          <SectionHeading
            title="اكتشفي أقسامنا"
            description="اختاري القسم الأقرب إلى ذوقك واستكشفي التصاميم المتاحة."
            centered
          />

          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                href={category.href}
                key={category.href}
                className="product-card group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e9dfd1]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="product-image"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3f2d24]/75 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-white/85">
                      {category.description}
                    </p>
                    <span className="mt-3 inline-block text-sm">
                      اكتشفي القسم ←
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="section-spacing bg-[#fffdf9]">
        <div className="page-container">
          <SectionHeading
            title="وصل حديثًا"
            description="تصفحي أحدث الإضافات إلى مجموعة Atelier Noura."
            href="/products?sort=newest"
          />

          <div className="surface-card flex flex-col items-center justify-center px-5 py-14 text-center">
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2e2e0] text-2xl text-[#a87978]">
              ✧
            </span>

            <h3 className="text-lg font-semibold text-[#3f2d24]">
              قريبًا، اكتشفي أحدث التصاميم
            </h3>

            <p className="mt-2 max-w-md text-sm leading-7 text-[#81736a]">
              ستظهر هنا المنتجات الجديدة المنشورة من لوحة إدارة المتجر.
            </p>

            <Link href="/products" className="btn btn-secondary mt-5">
              تصفحي المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-spacing">
        <div className="page-container">
          <SectionHeading
            title="اختيارات مميزة"
            description="مساحة لعرض المنتجات التي تختارها إدارة المتجر."
            href="/products?featured=true"
          />

          <div className="surface-card flex flex-col items-center justify-center px-5 py-12 text-center">
            <h3 className="text-lg font-semibold text-[#3f2d24]">
              اختيارات Atelier Noura
            </h3>

            <p className="mt-2 max-w-md text-sm leading-7 text-[#81736a]">
              ستُعرض المنتجات المميزة هنا بعد ربط الصفحة بقاعدة البيانات.
            </p>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="section-spacing bg-[#efe6da]">
        <div className="page-container grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-[#d9cbbc]">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
              alt="أدوات ومستلزمات صناعة يدوية"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide text-[#a87978]">
              حكاية العلامة
            </span>

            <h2 className="section-heading mt-3">
              وراء كل قطعة،
              <br />
              لمسة من العناية
            </h2>

            <p className="mt-5 leading-8 text-[#81736a]">
              في Atelier Noura، نحتفي بجمال التفاصيل وبالعمل
              اليدوي الذي يمنح كل تصميم طابعًا خاصًا.
              نؤمن أن البساطة المدروسة والخامات المختارة بعناية
              تصنع فرقًا في كل قطعة.
            </p>

            <Link href="/about" className="btn btn-primary mt-7">
              اكتشفي قصتنا
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="page-container max-w-4xl">
          <SectionHeading
            title="أسئلة شائعة"
            description="إجابات تساعدك على التسوق بسهولة."
            centered
          />

          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#e7ddd2] bg-[#fffdf9] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#3f2d24]">
                  {faq.question}
                  <span className="text-[#a87978] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-[#81736a]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-4 pb-16">
        <div className="page-container overflow-hidden rounded-[2rem] bg-[#6b4f3f] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="text-sm tracking-wide text-white/70">
            Atelier Noura
          </p>

          <h2 className="mt-3 text-2xl leading-relaxed font-semibold sm:text-3xl">
            اكتشفي قطعة تعبّر عنك
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/75">
            تصفحي المجموعة واختاري تصميمك المفضل.
          </p>

          <Link
            href="/products"
            className="btn mt-6 bg-[#fffdf9] text-[#6b4f3f] hover:bg-[#f2e2e0]"
          >
            تسوقي الآن
          </Link>
        </div>
      </section>
    </>
  );
}
