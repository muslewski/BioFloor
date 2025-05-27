import { ViewWrapper } from "@/components/common/view-wrapper";
import { CopyrightSection } from "@/modules/prawa-autorskie/sections/copyright-section";
import { HeroSection } from "@/modules/prawa-autorskie/sections/hero-section";
import { getTranslations } from "next-intl/server";

export async function CopyrightView() {
  // Get translations for static rendering
  const t = await getTranslations("Copyright.Page");

  return (
    <ViewWrapper>
      <HeroSection
        title={t("title")}
        titleLight={t("titleLight")}
        description={t("description")}
        cta1={t("cta1")}
        cta2={t("cta2")}
        backgroundImageAlt={t("backgroundImageAlt")}
      />
      <CopyrightSection
        flaticonSectionTitle={t("flaticonSectionTitle")}
        flaticonSectionDescription={t("flaticonSectionDescription")}
      />
    </ViewWrapper>
  );
}
