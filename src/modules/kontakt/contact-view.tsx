import { ViewWrapper } from "@/components/common/view-wrapper";
import RichText from "@/components/rich-text";
import { ContactInfoSection } from "@/modules/kontakt/sections/contact-info-section";
import { HeroSection } from "@/modules/kontakt/sections/hero-section";
import { getTranslations } from "next-intl/server";

export async function ContactView() {
  // Get translations for static rendering
  const t = await getTranslations("Contact.Page");

  return (
    <ViewWrapper>
      <HeroSection title={t("title")} description={t("description")} />
      <ContactInfoSection
        sectionTitle={t("sectionTitle")}
        sectionDescription={t("sectionDescription")}
        brownCardTitle1={t("brownCardTitle1")}
        brownCardTitle2={t("brownCardTitle2")}
        brownCardTitle3={t("brownCardTitle3")}
        brownCardDescription3={
          <RichText>{(tags) => t.rich("brownCardDescription3", tags)}</RichText>
        }
      />
    </ViewWrapper>
  );
}
