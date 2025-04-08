import { ViewWrapper } from "@/components/common/view-wrapper";
import { ContactInfoSection } from "@/modules/kontakt/sections/contact-info-section";
import { HeroSection } from "@/modules/kontakt/sections/hero-section";
// import { getTranslations } from "next-intl/server";

export async function ContactView() {
  // Get translations for static rendering
  // const t = await getTranslations("Contact.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <ContactInfoSection />
    </ViewWrapper>
  );
}
