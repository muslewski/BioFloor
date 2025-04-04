import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/home/sections/hero-section";
import { getTranslations } from "next-intl/server";

export async function HomeView() {
  // Get translations for static rendering
  const t = await getTranslations("Home.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <div className="bg-black h-23">{t("title")}</div>
    </ViewWrapper>
  );
}
