import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { businessConfig } from "./business";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export interface BookingDetails {
  name?: string;
  phone?: string;
  service?: string;
  serviceType?: "Salon Visit" | "Home Service";
  preferredDate?: string;
  preferredTime?: string;
  address?: string;
  message?: string;
}

export function generateWhatsAppBookingUrl(details?: BookingDetails): string {
  const basePhone = businessConfig.whatsapp;

  if (!details || (!details.name && !details.service)) {
    const defaultMsg = encodeURIComponent(
      `Hi ${businessConfig.name}, I would like to enquire about your beauty services.`
    );
    return `https://wa.me/${basePhone}?text=${defaultMsg}`;
  }

  let text = `*New Booking Enquiry - ${businessConfig.shortName}*\n\n`;

  if (details.name) text += `👤 *Name:* ${details.name}\n`;
  if (details.phone) text += `📞 *Phone:* ${details.phone}\n`;
  if (details.service) text += `✨ *Service:* ${details.service}\n`;
  if (details.serviceType)
    text += `📍 *Service Type:* ${details.serviceType} ${
      details.serviceType === "Home Service" ? "(No extra service charge)" : ""
    }\n`;
  if (details.preferredDate)
    text += `📅 *Preferred Date:* ${details.preferredDate}\n`;
  if (details.preferredTime)
    text += `⏰ *Preferred Time:* ${details.preferredTime}\n`;
  if (details.address && details.serviceType === "Home Service")
    text += `🏠 *Location/Area:* ${details.address}\n`;
  if (details.message) text += `💬 *Note:* ${details.message}\n`;

  text += `\nPlease confirm availability and details. Thank you!`;

  return `https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`;
}

export function generateDirectCallUrl(): string {
  return `tel:${businessConfig.phone}`;
}
