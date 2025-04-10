import { ViewWrapper } from "@/components/common/view-wrapper";
import { CopyrightSection } from "@/modules/prawa-autorskie/sections/copyright-section";
import { HeroSection } from "@/modules/prawa-autorskie/sections/hero-section";
// import { getTranslations } from "next-intl/server";

export async function CopyrightView() {
  // Get translations for static rendering
  // const t = await getTranslations("Copyright.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <CopyrightSection />
    </ViewWrapper>
  );
}
