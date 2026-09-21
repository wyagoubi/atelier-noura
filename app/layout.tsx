
import type { Metadata } from "next";
import { Cairo, Lato } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Atelier Noura | لمسة من الخياطة اليدوية",
    template: "%s | Atelier Noura",
  },
  description:
    "اكتشفي عالم Atelier Noura، حيث تلتقي الخياطة اليدوية بالتفاصيل الأنيقة.",
  applicationName: "Atelier Noura",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "Atelier Noura",
    description: "قطع مصنوعة بعناية ولمسة يدوية مميزة.",
    siteName: "Atelier Noura",
    locale: "ar_DZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body className="font-arabic">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
