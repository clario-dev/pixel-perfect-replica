import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MapPin, MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/shami-logo.png";
import { WHATSAPP_DISPLAY, whatsappLink, productMessage, formatUGX } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

const nav = [
  { to: "/", label: "Home" },
  { to: "/cakes", label: "Cakes" },
  { to: "/bouquets", label: "Flower Bouquets" },
  { to: "/gifts", label: "Gift Packaging" },
  { to: "/custom-orders", label: "Custom Orders" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function WhatsAppButton({ message, children, variant = "primary", className = "" }: { message?: string; children: ReactNode; variant?: "primary" | "outline" | "whatsapp"; className?: string }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-rose",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    whatsapp: "bg-whatsapp text-whatsapp-foreground hover:opacity-90",
  }[variant];
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}>
      <MessageCircle className="h-4 w-4" aria-hidden /> {children}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Shami Cakes & Gifts Centre home">
          <img src={logo} alt="Shami Cakes & Gifts Centre logo" className="h-14 w-14 rounded-full" width={56} height={56} />
          <span className="hidden leading-tight sm:block">
            <span className="block font-serif text-2xl font-bold text-primary">SHAMI</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Cakes & Gifts Centre</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-rose"
              activeProps={{ className: "text-rose" }}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppButton message="Hello Shami! I would like to place an order." className="hidden !px-4 !py-2 sm:inline-flex">Order on WhatsApp</WhatsAppButton>
          <button onClick={() => setOpen(!open)} className="rounded-full p-2 text-primary lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="fade-up border-t border-border bg-blush-gradient px-6 py-6 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-serif text-2xl text-primary hover:bg-card/60">{n.label}</Link>
              </li>
            ))}
          </ul>
          <WhatsAppButton message="Hello Shami! I would like to place an order." variant="whatsapp" className="mt-4 w-full">Order on WhatsApp</WhatsAppButton>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Shami logo" className="mb-4 h-20 w-20 rounded-full" width={80} height={80} loading="lazy" />
          <p className="font-serif text-3xl font-bold">SHAMI</p>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">Cakes & Gifts Centre</p>
          <p className="mt-4 font-serif text-xl italic text-blush">"Making Every Celebration Sweeter."</p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/shami_cakes_and_gifts_centre" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-primary-foreground/30 p-2 transition hover:bg-rose">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@shamicakesandgiftscentre" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="rounded-full border border-primary-foreground/30 p-2 transition hover:bg-rose">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.6a2.9 2.9 0 1 1-2-2.7V9.4a6.3 6.3 0 1 0 5.4 6.2V8.7a8.2 8.2 0 0 0 3.8 1.2V6.7z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 font-serif text-xl">Quick Links</p>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {nav.filter((n) => n.to !== "/custom-orders").map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-blush">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-serif text-xl">Contact</p>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80"><MapPin className="h-4 w-4" /> Kayunga District, Uganda</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-blush">
            <MessageCircle className="h-4 w-4" /> WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-6 text-center text-xs text-primary-foreground/60">© 2026 Shami Cakes & Gifts Centre. All Rights Reserved.</p>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={whatsappLink("Hello Shami! I would like to place an order.")} target="_blank" rel="noopener noreferrer"
      aria-label="Chat with Shami on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition hover:scale-110">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return (
    <section className="bg-blush-gradient">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div className="fade-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-5xl text-primary md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">{text}</p>
        </div>
        {image && <img src={image} alt={title} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" width={1024} height={768} />}
      </div>
    </section>
  );
}

export function ProductCard({ product, cta = "Order on WhatsApp" }: { product: Product; cta?: string | undefined }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-square overflow-hidden bg-muted">
        <img src={product.image} alt={product.alt} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow !text-[0.62rem]">{product.category}</p>
        <h3 className="mt-2 text-2xl text-primary">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
        <p className="mt-4 font-serif text-xl font-semibold text-rose">
          {product.price ? `${product.startingFrom ? "Starting from " : ""}${formatUGX(product.price)}` : "Request a Quote"}
        </p>
        <WhatsAppButton message={productMessage(product.name)} className="mt-4 w-full">{cta}</WhatsAppButton>
      </div>
    </article>
  );
}

export function ProductGallery({ products, categories, cta }: { products: Product[]; categories: string[]; cta?: string }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? products : products.filter((p) => p.category === active);
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by category">
        {["All", ...categories].map((c) => (
          <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
            className={`rounded-full border px-4 py-2 text-sm transition ${active === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-rose hover:text-rose"}`}>
            {c}
          </button>
        ))}
      </div>
      {shown.length ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <ProductCard key={p.id} product={p} cta={cta} />)}
        </div>
      ) : (
        <div className="mx-auto max-w-md rounded-3xl bg-card p-10 text-center shadow-card">
          <p className="font-serif text-2xl text-primary">Made just for you</p>
          <p className="mt-2 text-sm text-muted-foreground">Ask us about {active.toLowerCase()} — we'll share designs and prices.</p>
          <WhatsAppButton message={productMessage(active)} className="mt-5">Request a Quote</WhatsAppButton>
        </div>
      )}
    </section>
  );
}

export function CtaBand({ title, text, message, label = "Order on WhatsApp" }: { title: string; text: string; message: string; label?: string }) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-burgundy-gradient px-8 py-14 text-center text-primary-foreground shadow-soft">
        <h2 className="text-4xl md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">{text}</p>
        <WhatsAppButton message={message} variant="whatsapp" className="mt-8">{label}</WhatsAppButton>
      </div>
    </section>
  );
}

export function seo(title: string, description: string) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
