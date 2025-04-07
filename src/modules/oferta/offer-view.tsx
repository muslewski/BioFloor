import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/oferta/sections/hero-section";
// import { getTranslations } from "next-intl/server";

export async function OfferView() {
  // Get translations for static rendering
  // const t = await getTranslations("Offer.Page");

  return (
    <ViewWrapper>
      <HeroSection />
    </ViewWrapper>
  );
}
