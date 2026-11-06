import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Heart, Sparkles, Gift, Clock, Star, Instagram } from "lucide-react";
import { images, allProducts, cakes, bouquets } from "@/data/products";
import { ProductCard, WhatsAppButton, CtaBand, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: seo("Shami Cakes & Gifts Centre | Cakes, Bouquets & Gifts in Kayunga", "Handcrafted birthday cakes, money bouquets, flower bouquets and gift packaging in Kayunga, Uganda. Order easily on WhatsApp.") }),
  component: Home,
});

const categories = [
  { title: "Delicious Cakes", text: "Handcrafted cakes for every celebration.", image: images.chocolateCake, to: "/cakes" as const },
  { title: "Beautiful Flower Bouquets", text: "Roses, mixed blooms and money bouquets.", image: images.roseBouquet, to: "/bouquets" as const },
  { title: "Premium Gift Packaging", text: "Luxury boxes, bags and ribbon wrapping.", image: images.giftPackaging, to: "/gifts" as const },
];

const reasons = [
  { icon: Heart, title: "Made with love", text: "Every cake and bouquet is crafted by hand with care." },
  { icon: Sparkles, title: "Creative designs", text: "Custom ideas brought to life, just the way you imagine." },
  { icon: Gift, title: "Beautiful presentation", text: "Elegant packaging that makes every gift feel special." },
  { icon: Clock, title: "Easy ordering", text: "Simply message us on WhatsApp — quick and friendly." },
];

const occasions = ["Birthdays", "Weddings", "Anniversaries", "Graduations", "Valentine's Day", "Baby Showers", "Christmas", "Corporate Events"];

const testimonials = [
  { quote: "The birthday cake was beautiful and delicious. Everyone asked where I got it!", name: "Customer review" },
  { quote: "The money bouquet was the highlight of the graduation. So creative!", name: "Customer review" },
  { quote: "Gift wrapping was elegant and thoughtful. Highly recommend Shami.", name: "Customer review" },
];

function Home() {
  const featured = allProducts.filter((p) => p.featured).slice(0, 6);
  const best = [...cakes, ...bouquets].filter((p) => p.bestSeller).slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden bg-blush-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-[1fr_1.1fr] md:py-24">
          <div className="fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-1.5 text-xs font-semibold text-primary">
              <MapPin className="h-3.5 w-3.5 text-rose" /> Proudly Serving Kayunga, Uganda.
            </p>
            <h1 className="mt-6 text-5xl leading-[1.05] text-primary md:text-7xl">Sweet Moments. <em className="text-rose">Beautiful Memories.</em></h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">From delicious handcrafted cakes to stunning flower bouquets and beautifully wrapped gifts, Shami makes every celebration special.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/cakes" className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-rose">Explore Our Collection</Link>
              <WhatsAppButton message="Hello Shami! I would like to place an order." variant="outline">Order on WhatsApp</WhatsAppButton>
            </div>
          </div>
          <img src={images.heroImg} alt="Elegant pink birthday cake beside a rose bouquet and burgundy gift box" width={1600} height={1104} className="fade-up w-full rounded-[2rem] object-cover shadow-soft" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="eyebrow">Welcome</p>
        <h2 className="mt-3 text-4xl text-primary md:text-5xl">Welcome to Shami Cakes & Gifts Centre</h2>
        <p className="mt-6 text-lg text-muted-foreground">At Shami, we believe every special moment deserves something beautiful. Whether you're celebrating a birthday, surprising someone you love, or making an ordinary day unforgettable, we create sweet treats and thoughtful gifts that speak from the heart.</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
        {categories.map((c) => (
          <Link key={c.title} to={c.to} className="group relative overflow-hidden rounded-3xl shadow-card">
            <img src={c.image} alt={c.title} loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/92 p-5 backdrop-blur">
              <h3 className="text-2xl text-primary">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.text}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center"><p className="eyebrow">Featured</p><h2 className="mt-2 text-4xl text-primary md:text-5xl">Featured Creations</h2></div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{featured.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center"><p className="eyebrow">Loved by our customers</p><h2 className="mt-2 text-4xl text-primary md:text-5xl">Best Sellers</h2></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{best.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center"><p className="eyebrow">Why Shami</p><h2 className="mt-2 text-4xl text-primary md:text-5xl">Why Choose Shami?</h2></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-card p-8 text-center shadow-card">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted text-rose"><Icon /></span>
              <h3 className="mt-5 text-2xl text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blush-gradient py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="eyebrow">Special occasions</p>
          <h2 className="mt-2 text-4xl text-primary md:text-5xl">For Every Moment Worth Celebrating</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {occasions.map((o) => <span key={o} className="rounded-full bg-card px-5 py-2.5 font-serif text-lg text-primary shadow-card">{o}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center"><p className="eyebrow">Testimonials</p><h2 className="mt-2 text-4xl text-primary md:text-5xl">Sweet Words</h2></div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-3xl bg-card p-8 shadow-card">
              <div className="flex gap-1 text-rose">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 font-serif text-xl italic text-primary">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-center gap-2 text-primary"><Instagram className="h-5 w-5" /><h2 className="text-3xl">Follow Our Sweet Journey</h2></div>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {[images.heroImg, images.moneyBouquet, images.cupcakes, images.roseBouquet, images.giftPackaging, images.weddingCake].map((src, i) => (
            <img key={i} src={src} alt="Shami creation from our social gallery" loading="lazy" width={300} height={300} className="aspect-square w-full rounded-2xl object-cover transition hover:opacity-80" />
          ))}
        </div>
      </section>

      <CtaBand title="Ready to make someone smile?" text="Tell us what you're celebrating and we'll create something beautiful for you." message="Hello Shami! I would like to place an order." />
    </>
  );
}
