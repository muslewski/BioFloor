import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/logistyka-calosamochowa/sections/hero-section";
// import { getTranslations } from "next-intl/server";

export async function FullTruckloadLogisticsView() {
  // Get translations for static rendering
  // const t = await getTranslations("FullTruckloadLogistics.Page");

  return (
    <ViewWrapper>
      <HeroSection />
    </ViewWrapper>
  );
}
