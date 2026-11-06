import { createFileRoute, Link } from "@tanstack/react-router";
import { cakes, cakeCategories, images } from "@/data/products";
import { PageHero, ProductGallery, WhatsAppButton, CtaBand, seo } from "@/components/site";
import { formatUGX, productMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/cakes")({
  head: () => ({ meta: seo("Cakes in Kayunga | Birthday & Custom Cakes | Shami", "Birthday, wedding, chocolate, red velvet and custom cakes in Kayunga, Uganda. SHAMI Sweet Cake starting from UGX 50,000.") }),
  component: CakesPage,
});

function CakesPage() {
  return (
    <>
      <PageHero eyebrow="Cakes Collection" title="Handcrafted Cakes" text="Birthday, wedding, chocolate, red velvet and fully customised cakes — baked fresh for your celebration." image={images.chocolateCake} />
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-card shadow-soft md:grid-cols-2">
          <img src={images.heroImg} alt="SHAMI Sweet Cake with strawberries and cream" loading="lazy" width={1600} height={1104} className="h-full w-full object-cover" />
          <div className="p-8 md:p-10">
            <p className="eyebrow">Special Offer</p>
            <h2 className="mt-2 text-4xl text-primary">SHAMI Sweet Cake</h2>
            <p className="mt-3 text-muted-foreground">Beautifully crafted sweet cakes made to turn your celebrations into unforgettable memories.</p>
            <p className="mt-6 font-serif text-3xl font-bold text-rose">Starting from {formatUGX(50000)}</p>
            <p className="mt-1 text-xs text-muted-foreground">Final price depends on size, design, ingredients and decoration.</p>
            <WhatsAppButton message={productMessage("SHAMI Sweet Cake")} className="mt-6">Order on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>
      <ProductGallery products={cakes} categories={cakeCategories} />
      <CtaBand title="Dreaming of a custom cake?" text="Share your idea, colours and theme — we'll design it just for you." message="Hello Shami! I would like to request a customised cake design." label="Request a Custom Cake" />
      <p className="pb-10 text-center text-sm"><Link to="/custom-orders" className="text-rose underline">Or fill in our custom order form</Link></p>
    </>
  );
}
