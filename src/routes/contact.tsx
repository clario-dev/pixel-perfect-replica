import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { WhatsAppButton, seo } from "@/components/site";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: seo("Contact Shami | Cakes & Gifts in Kayunga, Uganda", "Contact Shami Cakes & Gifts Centre in Kayunga District, Uganda. WhatsApp +256 765 797365.") }),
  component: Contact,
});

const field = "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-rose focus:ring-2 focus:ring-ring/30";

function Contact() {
  const [error, setError] = useState("");
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    if (!name || !message) { setError("Please enter your name and message."); return; }
    setError("");
    window.open(whatsappLink(`Hello Shami! My name is ${name}.\n\n${message}`), "_blank", "noopener");
  }
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center"><p className="eyebrow">Contact</p><h1 className="mt-3 text-5xl text-primary md:text-6xl">Get in Touch</h1></div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6 rounded-3xl bg-blush-gradient p-8 shadow-card">
          <h2 className="text-3xl text-primary">Shami Cakes & Gifts Centre</h2>
          <p className="flex items-center gap-3 text-primary"><MapPin className="h-5 w-5 text-rose" /> Kayunga District, Uganda</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-rose"><MessageCircle className="h-5 w-5 text-rose" /> WhatsApp: {WHATSAPP_DISPLAY}</a>
          <WhatsAppButton message="Hello Shami!" variant="whatsapp">Chat on WhatsApp</WhatsAppButton>
          <iframe title="Map of Kayunga District, Uganda" src="https://www.google.com/maps?q=Kayunga,Uganda&output=embed" loading="lazy" className="h-64 w-full rounded-2xl border-0" />
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl bg-card p-8 shadow-soft">
          <h2 className="text-3xl text-primary">Business Inquiry</h2>
          <label className="block text-sm font-semibold text-primary">Your Name *<input name="name" className={field} /></label>
          <label className="block text-sm font-semibold text-primary">Message *<textarea name="message" rows={6} className={field} /></label>
          {error && <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-rose">Send via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
