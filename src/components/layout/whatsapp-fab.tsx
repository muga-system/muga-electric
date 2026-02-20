import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="block-panel fixed bottom-4 right-4 z-30 inline-flex h-12 w-12 items-center justify-center bg-accent text-foreground transition hover:brightness-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden />
    </a>
  );
}
