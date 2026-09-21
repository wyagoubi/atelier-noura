
export type Locale = "ar" | "fr";

export type Product = {
  id: string;
  slug: string;
  name_ar: string;
  name_fr: string | null;
  description_ar: string | null;
  description_fr: string | null;
  price: number;
  compare_at_price: number | null;
  images: string[] | null;
  category_slug: string | null;
  stock_quantity: number;
  is_published: boolean;
  created_at: string;
};

export type ProductCategory = {
  slug: string;
  name_ar: string;
  name_fr: string | null;
  description_ar: string | null;
  description_fr: string | null;
  image_url: string | null;
  is_active: boolean;
};

export function productName(product: Product, locale: Locale) {
  return locale === "fr"
    ? product.name_fr || product.name_ar
    : product.name_ar;
}

export function productDescription(product: Product, locale: Locale) {
  return locale === "fr"
    ? product.description_fr || product.description_ar || ""
    : product.description_ar || "";
}

export function formatDZD(price: number, locale: Locale = "ar") {
  return new Intl.NumberFormat(locale === "fr" ? "fr-DZ" : "ar-DZ", {
    style: "currency",
    currency: "DZD",
    maximumFractionDigits: 0,
  }).format(price);
}
