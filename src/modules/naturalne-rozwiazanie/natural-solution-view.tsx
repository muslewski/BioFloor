import { ViewWrapper } from "@/components/common/view-wrapper";
import RichText from "@/components/rich-text";
import { FloorInfoSection } from "@/modules/naturalne-rozwiazanie/sections/floor-info-section";
import { HarmInfoSection } from "@/modules/naturalne-rozwiazanie/sections/harm-info-section";
import { HeroSection } from "@/modules/naturalne-rozwiazanie/sections/hero-section";
import { InformationSection } from "@/modules/naturalne-rozwiazanie/sections/information-section";
import { SummarySection } from "@/modules/naturalne-rozwiazanie/sections/summary-section";
import { getTranslations } from "next-intl/server";

export async function NaturalSolutionView() {
  // Get translations for static rendering
  const t = await getTranslations("NaturalSolution.Page");

  return (
    <ViewWrapper>
      <HeroSection
        title={t("title")}
        titleLight={t("titleLight")}
        description={t("description")}
        cta1={t("cta1")}
        cta2={t("cta2")}
      />
      <HarmInfoSection
        sectionTitle={t("sectionTitle")}
        sectionDescription={t("sectionDescription")}
        brownCardTitle1={t("brownCardTitle1")}
        brownCardDescription1={t("brownCardDescription1")}
        brownCardTitle2={t("brownCardTitle2")}
        brownCardDescription2={t("brownCardDescription2")}
        brownCardTitle3={t("brownCardTitle3")}
        brownCardDescription3={t("brownCardDescription3")}
        brownCardTitle4={t("brownCardTitle4")}
        brownCardDescription4={t("brownCardDescription4")}
        brownCardTitle5={t("brownCardTitle5")}
        brownCardDescription5={t("brownCardDescription5")}
      />
      <InformationSection
        informationSectionTitle={t("informationSectionTitle")}
        informationSectionDescription={
          <RichText>
            {(tags) => t.rich("informationSectionDescription", tags)}
          </RichText>
        }
        informationSectionTitle2={t("informationSectionTitle2")}
        informationSectionTitle2Light={t("informationSectionTitle2Light")}
        informationSection2CustomElement={
          <RichText>
            {(tags) => t.rich("informationSection2CustomElement", tags)}
          </RichText>
        }
      />
      <FloorInfoSection
        floorInfoSectionTitle={t("floorInfoSectionTitle")}
        floorInfoSectionDescription={t("floorInfoSectionDescription")}
        hackerCardTitle1={t("hackerCardTitle1")}
        hackerCardDescription1={t("hackerCardDescription1")}
        hackerCardTitle2={t("hackerCardTitle2")}
        hackerCardDescription2={t("hackerCardDescription2")}
        hackerCardTitle3={t("hackerCardTitle3")}
        hackerCardDescription3={t("hackerCardDescription3")}
        hackerCardTitle4={t("hackerCardTitle4")}
        hackerCardDescription4={t("hackerCardDescription4")}
        hackerCardTitle5={t("hackerCardTitle5")}
        hackerCardDescription5={t("hackerCardDescription5")}
      />
      <SummarySection
        summarySectionTitle={t("summarySectionTitle")}
        summarySectionTitleLight={t("summarySectionTitleLight")}
        summarySectionDescription={t("summarySectionDescription")}
        summaryCta1={t("summaryCta1")}
      />
    </ViewWrapper>
  );
}
