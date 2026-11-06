import { createFileRoute } from "@tanstack/react-router";
import { Package, ShoppingBag, Ribbon, Scissors, Heart, Crown } from "lucide-react";
import { gifts, giftCategories, images } from "@/data/products";
import { PageHero, ProductGallery, CtaBand, seo } from "@/components/site";

export const Route = createFileRoute("/gifts")({
  head: () => ({ meta: seo("Gift Packaging in Kayunga | Luxury Gift Boxes | Shami", "Luxury gift boxes, decorative bags, ribbon packaging and custom wrapping for every occasion in Kayunga, Uganda.") }),
  component: GiftsPage,
});

const options = [
  { icon: Package, label: "Luxury gift boxes" },
  { icon: ShoppingBag, label: "Decorative gift bags" },
  { icon: Ribbon, label: "Ribbon packaging" },
  { icon: Scissors, label: "Custom gift wrapping" },
  { icon: Heart, label: "Personalized gift arrangements" },
  { icon: Crown, label: "Premium presentation boxes" },
];

function GiftsPage() {
  return (
    <>
      <PageHero eyebrow="Gift Packaging" title="Gifts, Beautifully Presented" text="Luxury boxes, ribbons and thoughtful arrangements that make every gift unforgettable." image={images.giftPackaging} />
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 pt-16 md:grid-cols-3">
        {options.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-rose"><Icon className="h-5 w-5" /></span>
            <span className="font-serif text-lg text-primary">{label}</span>
          </div>
        ))}
      </section>
      <ProductGallery products={gifts} categories={giftCategories} cta="Customise Your Gift" />
      <CtaBand title="Customise Your Gift" text="Choose the box, colours, ribbons and contents — we'll wrap it to perfection." message="Hello Shami! I would like to customise a gift package." label="Customise Your Gift" />
    </>
  );
}
