import { MessageCircle } from "lucide-react";

import { ContactActionTrigger } from "@/components/contact/contact-action-trigger";
import { siteConfig } from "@/config/site";

export function WhatsAppFab() {
  return (
    <ContactActionTrigger
      channel="whatsapp"
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="block-panel fixed bottom-4 right-[calc(1rem+var(--scroll-lock-offset,0px))] z-30 inline-flex h-12 w-12 items-center justify-center bg-accent text-foreground transition hover:brightness-95 sm:bottom-6 sm:right-[calc(1.5rem+var(--scroll-lock-offset,0px))]"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden />
    </ContactActionTrigger>
  );
}
