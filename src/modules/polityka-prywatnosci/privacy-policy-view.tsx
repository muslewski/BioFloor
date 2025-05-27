import { ViewWrapper } from "@/components/common/view-wrapper";
import RichText from "@/components/rich-text";
import { HeroSection } from "@/modules/polityka-prywatnosci/sections/hero-section";
import { PolicySection } from "@/modules/polityka-prywatnosci/sections/policy-section";
import { getTranslations } from "next-intl/server";

export async function PrivacyPolicyView() {
  // Get translations for static rendering
  const t = await getTranslations("PrivacyPolicy.Page");

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
      <PolicySection
        sectionIntroTitle={t("sectionIntroTitle")}
        sectionIntroDescription={t("sectionIntroDescription")}
        brownCardTitle1={t("brownCardTitle1")}
        brownCardDescription1={t("brownCardDescription1")}
        brownCard1CustomElement={
          <RichText>
            {(tags) => t.rich("brownCard1CustomElement", tags)}
          </RichText>
        }
        brownCardTitle2={t("brownCardTitle2")}
        brownCardDescription2={t("brownCardDescription2")}
        brownCard2CustomElement={
          <RichText>
            {(tags) => t.rich("brownCard2CustomElement", tags)}
          </RichText>
        }
        brownCardTitle3={t("brownCardTitle3")}
        brownCardDescription3={t("brownCardDescription3")}
        brownCard3CustomElement={
          <RichText>
            {(tags) => t.rich("brownCard3CustomElement", tags)}
          </RichText>
        }
        brownCardTitle4={t("brownCardTitle4")}
        brownCardDescription4={t("brownCardDescription4")}
        brownCardTitle5={t("brownCardTitle5")}
        brownCardDescription5={t("brownCardDescription5")}
        brownCard5CustomElement={
          <RichText>
            {(tags) => t.rich("brownCard5CustomElement", tags)}
          </RichText>
        }
        brownCardTitle6={t("brownCardTitle6")}
        brownCardDescription6={t("brownCardDescription6")}
        brownCard6CustomElement={
          <RichText>
            {(tags) => t.rich("brownCard6CustomElement", tags)}
          </RichText>
        }
        brownCardTitle7={t("brownCardTitle7")}
        brownCardDescription7={t("brownCardDescription7")}
        brownCard7CustomElement={
          <RichText>
            {(tags) => t.rich("brownCard7CustomElement", tags)}
          </RichText>
        }
      />
    </ViewWrapper>
  );
}
