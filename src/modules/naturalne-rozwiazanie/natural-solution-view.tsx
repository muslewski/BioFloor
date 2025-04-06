import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/naturalne-rozwiazanie/sections/hero-section";
// import { getTranslations } from "next-intl/server";

export async function NaturalSolutionView() {
  // Get translations for static rendering
  // const t = await getTranslations("NaturalSolution.Page");

  return (
    <ViewWrapper>
      <HeroSection />
    </ViewWrapper>
  );
}
