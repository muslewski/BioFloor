import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/atuty/sections/hero-section";
import { WhyUsSection } from "@/modules/atuty/sections/why-us-section";
// import { getTranslations } from "next-intl/server";

export async function AdvantagesView() {
  // Get translations for static rendering
  // const t = await getTranslations("Advantages.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <WhyUsSection />
    </ViewWrapper>
  );
}
