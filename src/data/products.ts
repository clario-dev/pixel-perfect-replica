import heroImg from "@/assets/hero-cake-bouquet.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import roseBouquet from "@/assets/rose-bouquet.jpg";
import moneyBouquet from "@/assets/money-bouquet.jpg";
import giftPackaging from "@/assets/gift-packaging.jpg";

export const images = { heroImg, weddingCake, chocolateCake, cupcakes, roseBouquet, moneyBouquet, giftPackaging };

/** Edit products and prices here. Leave `price` undefined to show "Request a Quote". */
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  price?: number;
  startingFrom?: boolean;
  featured?: boolean;
  bestSeller?: boolean;
};

export const cakeCategories = [
  "Birthday Cakes", "Wedding Cakes", "Anniversary Cakes", "Graduation Cakes", "Customised Cakes",
  "Chocolate Cakes", "Vanilla Cakes", "Strawberry Cakes", "Red Velvet Cakes", "Celebration Cakes",
  "Cupcakes and Sweet Treats",
];

export const bouquetCategories = [
  "Rose Bouquets", "Mixed Flower Bouquets", "Money Bouquets", "Money Flowers", "Birthday Bouquets",
  "Anniversary Bouquets", "Romantic Bouquets", "Graduation Bouquets", "Surprise Bouquets", "Customised Bouquets",
];

export const giftCategories = [
  "Birthday Gifts", "Wedding Gifts", "Anniversary Gifts", "Valentine's Day", "Graduation Gifts",
  "Baby Showers", "Corporate Gifts", "Romantic Surprises", "Christmas Gifts", "Special Occasions",
];

export const cakes: Product[] = [
  { id: "shami-sweet-cake", name: "SHAMI Sweet Cake", category: "Celebration Cakes", price: 50000, startingFrom: true, featured: true, bestSeller: true,
    description: "Beautifully crafted sweet cakes made to turn your celebrations into unforgettable memories.",
    image: heroImg, alt: "SHAMI Sweet Cake decorated with fresh strawberries and pink cream" },
  { id: "birthday-cake", name: "Birthday Cake", category: "Birthday Cakes", featured: true,
    description: "Soft, joyful layers finished with your colours, name and message.", image: heroImg, alt: "Pink and cream birthday cake with strawberries in Kayunga" },
  { id: "wedding-cake", name: "Wedding Cake", category: "Wedding Cakes", featured: true,
    description: "Elegant tiered cakes with sugar roses for your most special day.", image: weddingCake, alt: "Three-tier white wedding cake with pink sugar roses" },
  { id: "anniversary-cake", name: "Anniversary Cake", category: "Anniversary Cakes",
    description: "A romantic centrepiece to celebrate years of love.", image: weddingCake, alt: "Elegant anniversary cake with pink roses" },
  { id: "graduation-cake", name: "Graduation Cake", category: "Graduation Cakes",
    description: "Celebrate the achievement with a cake as proud as you are.", image: heroImg, alt: "Celebration cake for graduation" },
  { id: "custom-cake", name: "Customised Cake", category: "Customised Cakes",
    description: "Share your idea and we will design a cake that is uniquely yours.", image: weddingCake, alt: "Custom designed cake by Shami" },
  { id: "chocolate-cake", name: "Chocolate Drip Cake", category: "Chocolate Cakes", bestSeller: true,
    description: "Rich chocolate sponge with glossy ganache drip and fresh strawberries.", image: chocolateCake, alt: "Chocolate drip cake topped with strawberries" },
  { id: "vanilla-cake", name: "Vanilla Cream Cake", category: "Vanilla Cakes",
    description: "Light vanilla sponge with silky cream — a timeless favourite.", image: heroImg, alt: "Vanilla cream cake with pink piping" },
  { id: "strawberry-cake", name: "Strawberry Cake", category: "Strawberry Cakes", bestSeller: true,
    description: "Fresh strawberries and whipped cream on fluffy layers.", image: heroImg, alt: "Strawberry cake with whipped cream" },
  { id: "red-velvet-cake", name: "Red Velvet Cake", category: "Red Velvet Cakes",
    description: "Velvety crimson sponge with smooth cream cheese frosting.", image: chocolateCake, alt: "Red velvet celebration cake" },
  { id: "cupcakes", name: "Cupcakes & Sweet Treats", category: "Cupcakes and Sweet Treats", bestSeller: true,
    description: "Pretty frosted cupcakes, perfect for parties and sweet surprises.", image: cupcakes, alt: "Pink and cream frosted cupcakes with sugar flowers" },
];

export const bouquets: Product[] = [
  { id: "money-bouquet", name: "Money Bouquet", category: "Money Bouquets", featured: true, bestSeller: true,
    description: "Crisp notes folded into blooming flowers — a creative gift of joy and prosperity.", image: moneyBouquet, alt: "Money bouquet made of folded Ugandan shilling notes" },
  { id: "money-flowers", name: "Money Flowers", category: "Money Flowers",
    description: "Individual currency roses that make any gift unforgettable.", image: moneyBouquet, alt: "Money flowers made from banknotes" },
  { id: "rose-bouquet", name: "Rose Bouquet", category: "Rose Bouquets", featured: true, bestSeller: true,
    description: "Soft pink roses wrapped with love and a satin ribbon.", image: roseBouquet, alt: "Pink rose bouquet wrapped in cream paper" },
  { id: "mixed-bouquet", name: "Mixed Flower Bouquet", category: "Mixed Flower Bouquets",
    description: "A cheerful mix of roses, daisies and gypsophila.", image: roseBouquet, alt: "Mixed flower bouquet with roses and daisies" },
  { id: "birthday-bouquet", name: "Birthday Bouquet", category: "Birthday Bouquets",
    description: "Bright blooms to make their birthday bloom with happiness.", image: roseBouquet, alt: "Birthday flower bouquet" },
  { id: "anniversary-bouquet", name: "Anniversary Bouquet", category: "Anniversary Bouquets",
    description: "Elegant flowers to celebrate your love story.", image: roseBouquet, alt: "Anniversary flower bouquet" },
  { id: "romantic-bouquet", name: "Romantic Bouquet", category: "Romantic Bouquets",
    description: "Say what words can't with a romantic arrangement.", image: roseBouquet, alt: "Romantic pink rose bouquet" },
  { id: "graduation-bouquet", name: "Graduation Bouquet", category: "Graduation Bouquets",
    description: "Honour their big day with flowers — or money flowers.", image: moneyBouquet, alt: "Graduation money bouquet" },
  { id: "surprise-bouquet", name: "Surprise Bouquet", category: "Surprise Bouquets",
    description: "A delightful surprise delivered with a smile.", image: roseBouquet, alt: "Surprise flower bouquet" },
  { id: "custom-bouquet", name: "Customised Bouquet", category: "Customised Bouquets",
    description: "Choose the flowers, colours, notes and wrapping.", image: moneyBouquet, alt: "Customised bouquet by Shami" },
];

const giftDescriptions: Record<string, string> = {
  "Birthday Gifts": "Luxury gift boxes filled and wrapped for their special day.",
  "Wedding Gifts": "Premium presentation boxes worthy of the happy couple.",
  "Anniversary Gifts": "Personalised arrangements that celebrate your journey together.",
  "Valentine's Day": "Ribbon-wrapped surprises full of love.",
  "Graduation Gifts": "Elegant gift bags to celebrate their success.",
  "Baby Showers": "Soft, sweet packaging to welcome the little one.",
  "Corporate Gifts": "Refined branded gift boxes for clients and teams.",
  "Romantic Surprises": "Custom gift wrapping that sets the mood.",
  "Christmas Gifts": "Festive boxes and bags with beautiful ribbons.",
  "Special Occasions": "Any moment, beautifully presented.",
};

export const gifts: Product[] = giftCategories.map((c, i) => ({
  id: `gift-${i}`,
  name: c === "Valentine's Day" ? "Valentine's Day Gift" : c.replace(/s$/, ""),
  category: c,
  description: giftDescriptions[c] ?? "Beautifully presented gifts for every occasion.",
  image: giftPackaging,
  alt: `${c} gift packaging with burgundy ribbon`,
  featured: i === 0,
}));

export const allProducts = [...cakes, ...bouquets, ...gifts];
