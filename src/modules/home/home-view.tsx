import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/home/sections/hero-section";
import { getTranslations } from "next-intl/server";

export async function HomeView() {
  // Get translations for static rendering
  const t = await getTranslations("Home.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <div className=" h-96 bg-gradient-to-br from-yellow-200">
        {t("title")}
      </div>
    </ViewWrapper>
  );
}
