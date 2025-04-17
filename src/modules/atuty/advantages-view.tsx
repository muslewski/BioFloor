import { ViewWrapper } from "@/components/common/view-wrapper";
import RichText from "@/components/rich-text";
import { HeroSection } from "@/modules/atuty/sections/hero-section";
import { WhyUsSection } from "@/modules/atuty/sections/why-us-section";
import { getTranslations } from "next-intl/server";

export async function AdvantagesView() {
  // Get translations for static rendering
  const t = await getTranslations("Advantages.Page");

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
      <WhyUsSection
        sectionIntroTitle={t("sectionIntroTitle")}
        sectionIntroDescription={t("sectionIntroDescription")}
        BrownCardTitle1={t("BrownCardTitle1")}
        BrownCardDescription1={t("BrownCardDescription1")}
        BrownCardTitle2={t("BrownCardTitle2")}
        BrownCardDescription2={t("BrownCardDescription2")}
        BrownCardTitle3={t("BrownCardTitle3")}
        BrownCardDescription3={t("BrownCardDescription3")}
        BrownCardTitle4={t("BrownCardTitle4")}
        BrownCardDescription4={t("BrownCardDescription4")}
        BrownCardTitle5={t("BrownCardTitle5")}
        BrownCardDescription5={t("BrownCardDescription5")}
        BrownCardTitle6={t("BrownCardTitle6")}
        BrownCardDescription6={t("BrownCardDescription6")}
        BrownCardTitle7={t("BrownCardTitle7")}
        BrownCardDescription7={t("BrownCardDescription7")}
      />
    </ViewWrapper>
  );
}
