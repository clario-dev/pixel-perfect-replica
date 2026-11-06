import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, ImagePlus, CheckCircle2 } from "lucide-react";
import { PageHero, seo } from "@/components/site";
import { customOrderMessage, whatsappLink } from "@/lib/whatsapp";
import { images } from "@/data/products";

export const Route = createFileRoute("/custom-orders")({
  head: () => ({ meta: seo("Custom Cakes & Gifts Uganda | Custom Orders | Shami", "Request a customised cake, bouquet or gift package from Shami in Kayunga, Uganda. Your request opens directly in WhatsApp.") }),
  component: CustomOrders,
});

const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-rose focus:ring-2 focus:ring-ring/30";

function CustomOrders() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const data = { fullName: get("fullName"), whatsapp: get("whatsapp"), category: get("category"), occasion: get("occasion"), deliveryDate: get("deliveryDate"), budget: get("budget"), details: get("details"), hasImage: !!preview };
    if (!data.fullName || !data.whatsapp || !data.category || !data.details) {
      setError("Please fill in your name, WhatsApp number, product category and design details.");
      return;
    }
    if (!/^[+\d\s()-]{7,}$/.test(data.whatsapp)) {
      setError("Please enter a valid WhatsApp number.");
      return;
    }
    setError("");
    const win = window.open(whatsappLink(customOrderMessage(data)), "_blank", "noopener");
    if (!win) window.location.href = whatsappLink(customOrderMessage(data));
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Custom Orders" title="Design Something Special" text="Tell us your idea and we'll create a cake, bouquet or gift that's truly yours. Your request opens in WhatsApp so we can chat directly." image={images.weddingCake} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl bg-card p-8 shadow-soft md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-primary">Full Name *<input name="fullName" className={`${field} mt-1.5`} autoComplete="name" required /></label>
            <label className="block text-sm font-semibold text-primary">WhatsApp Number *<input name="whatsapp" type="tel" placeholder="+256 ..." className={`${field} mt-1.5`} required /></label>
            <label className="block text-sm font-semibold text-primary">Product Category *
              <select name="category" className={`${field} mt-1.5`} defaultValue="" required>
                <option value="" disabled>Select a category</option>
                <option>Cake</option><option>Bouquet</option><option>Gift Packaging</option><option>Other</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-primary">Occasion<input name="occasion" placeholder="e.g. Birthday" className={`${field} mt-1.5`} /></label>
            <label className="block text-sm font-semibold text-primary">Preferred Delivery Date<input name="deliveryDate" type="date" className={`${field} mt-1.5`} /></label>
            <label className="block text-sm font-semibold text-primary">Budget (UGX)<input name="budget" inputMode="numeric" placeholder="e.g. 100,000" className={`${field} mt-1.5`} /></label>
          </div>
          <label className="block text-sm font-semibold text-primary">Design or Customisation Details *
            <textarea name="details" rows={5} placeholder="Colours, flavours, size, message on the cake..." className={`${field} mt-1.5`} required />
          </label>
          <div>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-input p-4 text-sm text-muted-foreground hover:border-rose">
              <ImagePlus className="h-5 w-5 text-rose" /> Inspiration image (optional)
              <input type="file" accept="image/*" className="sr-only" onChange={(e) => { const file = e.target.files?.[0]; setPreview(file ? URL.createObjectURL(file) : null); }} />
            </label>
            {preview && (
              <div className="mt-3 flex items-center gap-3">
                <img src={preview} alt="Your inspiration preview" className="h-20 w-20 rounded-xl object-cover" />
                <p className="text-xs text-muted-foreground">WhatsApp links can't carry images — please attach this photo in the WhatsApp chat after it opens.</p>
              </div>
            )}
          </div>
          {error && <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}
          {sent && !error && (
            <p role="status" className="flex items-start gap-2 rounded-xl bg-muted px-4 py-3 text-sm text-primary">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> WhatsApp has opened with your request. Press send in WhatsApp to deliver it to Shami.
            </p>
          )}
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground transition hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> Send Request via WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}
