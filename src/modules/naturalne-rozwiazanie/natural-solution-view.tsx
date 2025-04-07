import { ViewWrapper } from "@/components/common/view-wrapper";
import { FloorInfoSection } from "@/modules/naturalne-rozwiazanie/sections/floor-info-section";
import { HarmInfoSection } from "@/modules/naturalne-rozwiazanie/sections/harm-info-section";
import { HeroSection } from "@/modules/naturalne-rozwiazanie/sections/hero-section";
import { InformationSection } from "@/modules/naturalne-rozwiazanie/sections/information-section";
import { SummarySection } from "@/modules/naturalne-rozwiazanie/sections/summary-section";
// import { getTranslations } from "next-intl/server";

export async function NaturalSolutionView() {
  // Get translations for static rendering
  // const t = await getTranslations("NaturalSolution.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <HarmInfoSection />
      <InformationSection />
      <FloorInfoSection />
      <SummarySection />
    </ViewWrapper>
  );
}
