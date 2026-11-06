import { createFileRoute } from "@tanstack/react-router";
import { bouquets, bouquetCategories, images } from "@/data/products";
import { PageHero, ProductGallery, WhatsAppButton, CtaBand, seo } from "@/components/site";
import { productMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/bouquets")({
  head: () => ({ meta: seo("Flower & Money Bouquets in Uganda | Shami Kayunga", "Rose bouquets, mixed flowers and creative money bouquets in Kayunga, Uganda. Order your bouquet on WhatsApp.") }),
  component: BouquetsPage,
});

function BouquetsPage() {
  return (
    <>
      <PageHero eyebrow="Flower Bouquets" title="Blooms That Speak From the Heart" text="Elegant roses, joyful mixed flowers and our signature money bouquets — every arrangement made to delight." image={images.roseBouquet} />
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-soft md:grid-cols-2">
          <div className="order-2 p-8 md:order-1 md:p-12">
            <p className="eyebrow !text-blush">Signature</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Money Bouquets</h2>
            <p className="mt-4 text-primary-foreground/85">Crisp banknotes, folded by hand into blooming roses and wrapped with satin ribbon. The perfect gift for graduations, birthdays and weddings — creative, generous and unforgettable.</p>
            <p className="mt-6 font-serif text-2xl text-blush">Request a Quote</p>
            <WhatsAppButton message={productMessage("Money Bouquet")} variant="whatsapp" className="mt-6">Order Your Bouquet</WhatsAppButton>
          </div>
          <img src={images.moneyBouquet} alt="Money bouquet of folded Ugandan shilling notes with burgundy ribbon" loading="lazy" width={1024} height={1024} className="order-1 h-full w-full object-cover md:order-2" />
        </div>
      </section>
      <ProductGallery products={bouquets} categories={bouquetCategories} cta="Order Your Bouquet" />
      <CtaBand title="Order Your Bouquet" text="Tell us the occasion, colours and budget — we'll arrange something beautiful." message="Hello Shami! I would like to order a bouquet." label="Order Your Bouquet" />
    </>
  );
}
