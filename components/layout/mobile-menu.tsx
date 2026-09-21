
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "جميع المنتجات" },
  { href: "/categories/bags", label: "الحقائب" },
  { href: "/categories/accessories", label: "الإكسسوارات" },
  { href: "/categories/clothing", label: "الملابس" },
  { href: "/categories/skirts", label: "التنورات" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "اتصلي بنا" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-[#6b4f3f] transition hover:bg-[#f2e2e0]"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="إغلاق القائمة"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30"
            />

            <motion.nav
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.2 }}
              aria-label="القائمة الرئيسية"
              className="absolute inset-x-0 top-full z-50 border-t border-[#e7ddd2] bg-[#fffdf9] p-5 shadow-xl"
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[#6b4f3f] transition hover:bg-[#f2e2e0]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
