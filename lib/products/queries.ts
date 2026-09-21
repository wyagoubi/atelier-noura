
import { createClient } from "@/lib/supabase/server";
import type { Product, ProductCategory } from "./types";

const PRODUCT_FIELDS =
  "id,slug,name_ar,name_fr,description_ar,description_fr,price,compare_at_price,images,category_slug,stock_quantity,is_published,created_at";

export async function getPublishedProducts(): Promise<Product[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_FIELDS)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch products:", error.message);
    throw new Error("تعذر تحميل المنتجات من قاعدة البيانات.");
  }

  return (data ?? []) as Product[];
}

export async function getPublishedProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_FIELDS)
    .eq("is_published", true)
    .eq("category_slug", categorySlug)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch category products:", error.message);
    throw new Error("تعذر تحميل منتجات هذا التصنيف.");
  }

  return (data ?? []) as Product[];
}

export async function getPublishedProductBySlug(
  slug: string
): Promise<Product | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_FIELDS)
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch product:", error.message);
    throw new Error("تعذر تحميل المنتج.");
  }

  return (data as Product | null) ?? null;
}

export async function getActiveCategoryBySlug(
  slug: string
): Promise<ProductCategory | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("categories")
    .select("slug,name_ar,name_fr,description_ar,description_fr,image_url,is_active")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch category:", error.message);
    throw new Error("تعذر تحميل التصنيف.");
  }

  return (data as ProductCategory | null) ?? null;
}
