
import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import Logo from "@/components/layout/logo";
import LanguageSwitcher from "@/components/layout/language-switcher";
import MobileMenu from "@/components/layout/mobile-menu";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "المتجر" },
  { href: "/categories/bags", label: "الحقائب" },
  { href: "/categories/accessories", label: "الإكسسوارات" },
  { href: "/about", label: "من نحن" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e7ddd2] bg-[#fffdf9]/95 backdrop-blur">
      <div className="page-container">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <Logo />

          <nav
            aria-label="التنقل الرئيسي"
            className="hidden items-center gap-6 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6b4f3f] transition hover:text-[#c58f91]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/products"
              aria-label="البحث عن المنتجات"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#6b4f3f] transition hover:bg-[#f2e2e0]"
            >
              <Search size={20} />
            </Link>

            <Link
              href="/cart"
              aria-label="سلة المشتريات"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#6b4f3f] transition hover:bg-[#f2e2e0]"
            >
              <ShoppingBag size={20} />
            </Link>

            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
