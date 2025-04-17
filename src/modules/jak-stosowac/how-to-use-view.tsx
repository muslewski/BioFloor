import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/jak-stosowac/sections/hero-section";
import { InfoSection } from "@/modules/jak-stosowac/sections/info-section";
import { TableSection } from "@/modules/jak-stosowac/sections/table-section";
import { getTranslations } from "next-intl/server";

export async function HowToUseView() {
  // Get translations for static rendering
  const t = await getTranslations("HowToUse.Page");

  return (
    <ViewWrapper>
      <HeroSection description={t("description")} title={t("title")} />
      <InfoSection
        sectionIntroTitle={t("sectionIntroTitle")}
        sectionIntroDescription={t("sectionIntroDescription")}
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
      <TableSection
        tableSectionTitle={t("tableSectionTitle")}
        tableSectionDescription={t("tableSectionDescription")}
        tableType={t("tableType")}
        tableSeason={t("tableSeason")}
        tableFloor={t("tableFloor")}
        tableCoverage={t("tableCoverage")}
        typeBroiler={t("typeBroiler")}
        typeTurkeyRearing={t("typeTurkeyRearing")}
        typeTurkeyFattening={t("typeTurkeyFattening")}
        typeLayingHenFreeRange={t("typeLayingHenFreeRange")}
        seasonSummer={t("seasonSummer")}
        seasonWinter={t("seasonWinter")}
        floorWarm={t("floorWarm")}
        floorCold={t("floorCold")}
      />
    </ViewWrapper>
  );
}
