import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-whatsapp text-white grid place-items-center shadow-lift hover:scale-105 transition-transform"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inline-flex size-full rounded-full bg-whatsapp/50 animate-ping -z-10" />
    </a>
  );
}
