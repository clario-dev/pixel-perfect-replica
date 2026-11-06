import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import logo from "@/assets/shami-logo.png.asset.json";
import { images } from "@/data/products";
import { CtaBand, seo } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: seo("About Shami | Cakes and Gifts Centre Uganda", "The story behind Shami Cakes & Gifts Centre in Kayunga District, Uganda — cakes, bouquets and gifts made with love.") }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-blush-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="fade-up">
            <p className="eyebrow">About Us</p>
            <h1 className="mt-3 text-5xl text-primary md:text-6xl">The Story Behind Shami</h1>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>Shami Cakes & Gifts Centre is passionate about creating beautiful cakes, stunning flower bouquets, and thoughtful gift presentations.</p>
              <p>Our mission is simple: to make every celebration sweeter, every surprise more special, and every gift more memorable.</p>
              <p>From handcrafted cakes to creative money bouquets and elegant gift packaging, we put love, creativity, and attention to detail into everything we do.</p>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"><MapPin className="h-4 w-4 text-rose" /> Kayunga District, Uganda.</p>
          </div>
          <div className="relative">
            <img src={images.cupcakes} alt="Shami cupcakes with pink frosting" width={1024} height={1024} className="rounded-[2rem] shadow-soft" />
            <img src={logo.url} alt="Shami logo" width={140} height={140} className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full shadow-soft" />
          </div>
        </div>
      </section>
      <CtaBand title="Let's celebrate together" text="Message us to start planning your next sweet moment." message="Hello Shami! I would like to know more about your products." />
    </>
  );
}
