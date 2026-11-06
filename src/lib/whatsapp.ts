export const WHATSAPP_NUMBER = "256765797365";
export const WHATSAPP_DISPLAY = "+256 765 797365";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message?: string) {
  return message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL;
}

export function productMessage(productName: string) {
  return `Hello Shami! I am interested in ordering your ${productName}. Could you please share the available designs and prices?`;
}

export function formatUGX(amount: number) {
  return `UGX ${amount.toLocaleString("en-US")}`;
}

export type CustomOrder = {
  fullName: string;
  whatsapp: string;
  category: string;
  occasion: string;
  deliveryDate: string;
  budget: string;
  details: string;
  hasImage?: boolean;
};

export function customOrderMessage(o: CustomOrder) {
  const lines = [
    "Hello Shami! I would like to place a custom order.",
    "",
    `*Name:* ${o.fullName}`,
    `*WhatsApp:* ${o.whatsapp}`,
    `*Product:* ${o.category}`,
    `*Occasion:* ${o.occasion || "-"}`,
    `*Preferred delivery date:* ${o.deliveryDate || "-"}`,
    `*Budget:* ${o.budget ? `UGX ${o.budget}` : "-"}`,
    "",
    `*Design details:* ${o.details}`,
  ];
  if (o.hasImage) lines.push("", "I have an inspiration image that I will send in this chat.");
  return lines.join("\n");
}
