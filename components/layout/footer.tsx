
import Link from "next/link";
import Logo from "@/components/layout/logo";
import { Instagram, Mail, Phone } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "اتصلي بنا" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/shipping-returns", label: "التوصيل والاستبدال" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e7ddd2] bg-[#efe6da]">
      <div className="page-container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#81736a]">
              قطع مصنوعة بعناية، وتفاصيل تحمل لمسة الخياطة اليدوية.
              اكتشفي مجموعتنا واختاري ما يناسبك.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#3f2d24]">
              روابط مهمة
            </h2>

            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6b4f3f] transition hover:text-[#c58f91]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#3f2d24]">
              تواصلي معنا
            </h2>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#6b4f3f]">
              <a
                href="mailto:contact@ateliernoura.dz"
                className="flex items-center gap-3"
              >
                <Mail size={17} />
                <span>البريد الإلكتروني</span>
              </a>

              <a
                href="tel:+213000000000"
                className="flex items-center gap-3"
              >
                <Phone size={17} />
                <span>رقم الهاتف</span>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <Instagram size={17} />
                <span>إنستغرام</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-[#81736a]">
              بيانات التواصل قابلة للتعديل عند إعداد المتجر.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[#d9cbbc] pt-5 text-center text-xs text-[#81736a]">
          © {new Date().getFullYear()} Atelier Noura. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
