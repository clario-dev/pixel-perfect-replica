import { describe, expect, it } from "vitest";
import { cakes, cakeCategories, homeSlides, cakeSlides, productSlides } from "@/data/products";

const suppliedCakes = [
  ["Chocolate Drip Delight", 80000, "Chocolate Cakes"],
  ["Princess Sofia Cake", 70000, "Birthday Cakes"],
  ["Pink Sunshine Roses Cake", 50000, "Birthday Cakes"],
  ["Lavender Luxury Cake", 70000, "Birthday Cakes"],
  ["Emerald Elegance Cake", 70000, "Birthday Cakes"],
  ["Royal Blue Rose Cake", 40000, "Celebration Cakes"],
  ["Pink Chocolate Drip Cake", 35000, "Chocolate Cakes"],
  ["Birthday Queen Cake", 35000, "Birthday Cakes"],
  ["Golden Blossom Cake", 800000, "Wedding Cakes"],
] as const;

describe("uploaded cake catalogue", () => {
  it.each(suppliedCakes)("%s has its supplied fixed UGX price %i and category %s", (name, price, category) => {
    const product = cakes.find((cake) => cake.name === name);
    expect(product).toBeDefined();
    expect(product?.price).toBe(price);
    expect(product?.startingFrom ?? false).toBe(false);
    expect(product?.category).toBe(category);
    expect(cakeCategories).toContain(category);
  });

  it.each(suppliedCakes)("includes %s in both homepage and cake slideshows", (name) => {
    const product = cakes.find((cake) => cake.name === name);
    expect(homeSlides.some((slide) => slide.src === product?.image)).toBe(true);
    expect(cakeSlides.some((slide) => slide.src === product?.image)).toBe(true);
  });

  it.each(suppliedCakes)("serves %s from a bundled image instead of a Lovable CDN pointer", (name) => {
    const product = cakes.find((cake) => cake.name === name);
    expect(product?.image).toMatch(/\.(webp|png)(\?.*)?$/);
    expect(product?.image).not.toContain("/__l5e/");
  });

  it("automatically includes future products and deduplicates shared photos", () => {
    const future = { id: "future", name: "Future cake", category: "Birthday Cakes", description: "", image: "/future-cake.webp", alt: "Future cake" };
    const slides = productSlides([...cakes, future, { ...future, id: "future-copy" }]);
    expect(slides.filter((slide) => slide.src === future.image)).toHaveLength(1);
  });
});