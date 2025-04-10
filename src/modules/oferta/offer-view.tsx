import { ViewWrapper } from "@/components/common/view-wrapper";
import { ContactUsSection } from "@/modules/oferta/sections/contact-us-section";
import { HeroSection } from "@/modules/oferta/sections/hero-section";
import { OfferOptionsSection } from "@/modules/oferta/sections/offer-options-section";
// import { getTranslations } from "next-intl/server";

export async function OfferView() {
  // Get translations for static rendering
  // const t = await getTranslations("Offer.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <OfferOptionsSection />
      <ContactUsSection />
    </ViewWrapper>
  );
}
