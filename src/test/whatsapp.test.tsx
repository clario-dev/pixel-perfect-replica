import { describe, expect, it } from "vitest";
import { formatUGX, whatsappLink, productMessage } from "@/lib/whatsapp";
import { cakes, bouquets } from "@/data/products";

describe("pricing and WhatsApp", () => {
  it("formats UGX prices", () => expect(formatUGX(50000)).toBe("UGX 50,000"));
  it("SHAMI Sweet Cake starts from UGX 50,000", () => {
    const c = cakes.find((p) => p.id === "shami-sweet-cake")!;
    expect(c.price).toBe(50000);
    expect(c.startingFrom).toBe(true);
  });
  it("bouquets have no invented prices", () => expect(bouquets.every((b) => b.price === undefined)).toBe(true));
  it("links to Shami's WhatsApp number with product message", () => {
    const url = whatsappLink(productMessage("Birthday Cake"));
    expect(url.startsWith("https://wa.me/256765797365?text=")).toBe(true);
    expect(decodeURIComponent(url)).toContain("ordering your Birthday Cake");
  });
});
