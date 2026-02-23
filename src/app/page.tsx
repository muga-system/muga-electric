import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { ContactNoticeProvider } from "@/components/contact/contact-notice-provider";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MugaSystemSection } from "@/components/sections/muga-system-section";

export default function HomePage() {
  return (
    <ContactNoticeProvider>
      <div id="top" className="min-h-screen bg-surface text-foreground">
        <SiteHeader />

        <main className="relative">
          <HeroSection />
          <BenefitsSection />
          <MugaSystemSection />
          <CtaSection />
        </main>

        <WhatsAppFab />
        <SiteFooter />
      </div>
    </ContactNoticeProvider>
  );
}
