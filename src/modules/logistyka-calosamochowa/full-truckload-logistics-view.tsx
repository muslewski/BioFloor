import { ViewWrapper } from "@/components/common/view-wrapper";
import RichText from "@/components/rich-text";
import { HeroSection } from "@/modules/logistyka-calosamochowa/sections/hero-section";
import { ShowcaseSection } from "@/modules/logistyka-calosamochowa/sections/showcase-section";
import { getTranslations } from "next-intl/server";

export async function FullTruckloadLogisticsView() {
  // Get translations for static rendering
  const t = await getTranslations("FullTruckloadLogistics.Page");

  return (
    <ViewWrapper>
      <HeroSection
        title={t("title")}
        titleLight={t("titleLight")}
        description={
          <RichText>{(tags) => t.rich("description", tags)}</RichText>
        }
        cta1={t("cta1")}
        cta2={t("cta2")}
      />
      <ShowcaseSection
        sectionIntroTitle={t("sectionIntroTitle")}
        sectionIntroDescription={
          <RichText>
            {(tags) => t.rich("sectionIntroDescription", tags)}
          </RichText>
        }
      />
    </ViewWrapper>
  );
}
