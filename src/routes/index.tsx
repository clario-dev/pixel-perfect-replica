import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MapPin, Heart, Sparkles, Gift, Clock, Star, Instagram, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { images, allProducts, cakes, bouquets } from "@/data/products";
import { ProductCard, WhatsAppButton, CtaBand, seo } from "@/components/site";
import { HomeSlideshow } from "@/components/home-slideshow";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: seo("Shami Cakes & Gifts Centre | Cakes, Bouquets & Gifts in Kayunga", "Handcrafted birthday cakes, money bouquets, flower bouquets and gift packaging in Kayunga, Uganda. Order easily on WhatsApp.") }),
  component: Home,
});

const categories = [
  { title: "Delicious Cakes", text: "Handcrafted cakes for every celebration.", image: images.chocolateCake, to: "/cakes" as const },
  { title: "Beautiful Flower Bouquets", text: "Roses, mixed blooms and money bouquets.", image: images.roseBouquet, to: "/bouquets" as const },
  { title: "Premium Gift Packaging", text: "Luxury boxes, bags and ribbon wrapping.", image: images.giftPackaging, to: "/gifts" as const },
];

const homeSlides = [
  { src: images.heroImg, alt: "Birthday cake with strawberries beside flowers and a gift box" },
  { src: images.roseBouquet, alt: "Pink roses and mixed flowers wrapped with ribbon" },
  { src: images.chocolateCake, alt: "Chocolate drip cake with fresh strawberries" },
  { src: images.moneyBouquet, alt: "Handcrafted money bouquet" },
  { src: images.giftPackaging, alt: "Elegant gift packaging with burgundy ribbons" },
  { src: images.weddingCake, alt: "Tiered wedding cake with pink roses" },
  { src: images.cupcakes, alt: "Pink and cream frosted cupcakes" },
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
  const homeRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setStep((current) => current + 1);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);
  useEffect(() => {
    const home = homeRef.current;
    if (!home || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

    const sections = home.querySelectorAll(":scope > section:not(:first-child)");
    sections.forEach((section) => {
      section.classList.add("motion-pending");
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
      sections.forEach((section) => section.classList.remove("motion-pending", "motion-visible"));
    };
  }, []);
  const featured = allProducts.filter((p) => p.featured).slice(0, 6);
  const best = [...cakes, ...bouquets].filter((p) => p.bestSeller).slice(0, 4);
  return (
    <div ref={homeRef} className="home-motion">
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
          <div className="relative">
            <HomeSlideshow slides={homeSlides} step={step} eager className="aspect-[1600/1104] rounded-[2rem] shadow-soft" />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-card/95 p-2 shadow-card">
              <Button size="icon" variant="ghost" className="rounded-full" aria-label="Previous photo" title="Previous photo" onClick={() => setStep((current) => current + homeSlides.length - 1)}><ChevronLeft /></Button>
              <span className="min-w-10 text-center text-sm font-semibold text-primary">{step % homeSlides.length + 1} / {homeSlides.length}</span>
              <Button size="icon" variant="ghost" className="rounded-full" aria-label={paused || reducedMotion ? "Play slideshow" : "Pause slideshow"} title={paused || reducedMotion ? "Play slideshow" : "Pause slideshow"} onClick={() => { setPaused(!(paused || reducedMotion)); setReducedMotion(false); }}>{paused || reducedMotion ? <Play /> : <Pause />}</Button>
              <Button size="icon" variant="ghost" className="rounded-full" aria-label="Next photo" title="Next photo" onClick={() => setStep((current) => current + 1)}><ChevronRight /></Button>
            </div>
          </div>
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
            <HomeSlideshow step={step} className="aspect-[4/5]" slides={c.to === "/cakes"
              ? [homeSlides[2], homeSlides[5], homeSlides[6], homeSlides[0]].filter((slide) => slide !== undefined)
              : c.to === "/bouquets" ? [homeSlides[1], homeSlides[3]].filter((slide) => slide !== undefined)
              : [{ src: c.image, alt: c.title }]} />
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
          {Array.from({ length: 6 }, (_, i) => (
            <HomeSlideshow key={i} slides={homeSlides} step={step + i} className="aspect-square rounded-2xl" />
          ))}
        </div>
      </section>

      <CtaBand title="Ready to make someone smile?" text="Tell us what you're celebrating and we'll create something beautiful for you." message="Hello Shami! I would like to place an order." />
    </div>
  );
}
