import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/jak-stosowac/sections/hero-section";
// import { getTranslations } from "next-intl/server";

export async function HowToUseView() {
  // Get translations for static rendering
  // const t = await getTranslations("HowToUse.Page");

  return (
    <ViewWrapper>
      <HeroSection />
    </ViewWrapper>
  );
}
