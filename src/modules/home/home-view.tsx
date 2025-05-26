import { ViewWrapper } from "@/components/common/view-wrapper";
import RichText from "@/components/rich-text";
import { HomeAdvantagesSection } from "@/modules/home/sections/advantages-section";
import { HeroSection } from "@/modules/home/sections/hero-section";
import { InformationSection } from "@/modules/home/sections/information-section";
import { TestimonialsSection } from "@/modules/home/sections/testimonials-section";
import { getTranslations } from "next-intl/server";

export async function HomeView() {
  // Get translations for static rendering
  const t = await getTranslations("Home.Page");

  return (
    <ViewWrapper>
      <HeroSection
        title={t("title")}
        description={t("description")}
        cta1={t("cta1")}
        cta2={t("cta2")}
        chickenImageAlt={t("chickenImageAlt")}
        beddingImageAlt={t("beddingImageAlt")}
        productTextImageAlt={t("productTextImageAlt")}
        GreenLineImageAlt={t("GreenLineImageAlt")}
      />
      <HomeAdvantagesSection
        sectionBackgroundImageAlt={t("sectionBackgroundImageAlt")}
        sectionIntroTitle={t("sectionIntroTitle")}
        sectionIntroDescription={t("sectionIntroDescription")}
        GreenCardTitle1={t("greenCardTitle1")}
        GreenCardDescription1={t("greenCardDescription1")}
        GreenCardTitle2={t("greenCardTitle2")}
        GreenCardDescription2={t("greenCardDescription2")}
        GreenCardTitle3={t("greenCardTitle3")}
        GreenCardDescription3={t("greenCardDescription3")}
        GreenCardTitle4={t("greenCardTitle4")}
        GreenCardDescription4={t("greenCardDescription4")}
      />
      <InformationSection
        informationSectionTitle={t("informationSectionTitle")}
        informationSectionDescription={
          <RichText>
            {(tags) => t.rich("informationSectionDescription", tags)}
          </RichText>
        }
        informationSectionImageAlt={t("informationSectionImageAlt")}
        informationSectionTitle2={t("informationSectionTitle2")}
        informationSectionDescription2={
          <RichText>
            {(tags) => t.rich("informationSectionDescription2", tags)}
          </RichText>
        }
        informationSectionImageAlt2={t("informationSectionImageAlt2")}
      />
      <TestimonialsSection
        testimonialsSectionTitle={t("testimonialsSectionTitle")}
        testimonialsSectionDescription={t("testimonialsSectionDescription")}
        quote1={<RichText>{(tags) => t.rich("quote1", tags)}</RichText>}
        designation1={t("designation1")}
      />
    </ViewWrapper>
  );
}
