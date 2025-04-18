import { ViewWrapper } from "@/components/common/view-wrapper";
import RichText from "@/components/rich-text";
import { ContactUsSection } from "@/modules/oferta/sections/contact-us-section";
import { HeroSection } from "@/modules/oferta/sections/hero-section";
import { OfferOptionsSection } from "@/modules/oferta/sections/offer-options-section";
import { getTranslations } from "next-intl/server";

export async function OfferView() {
  // Get translations for static rendering
  const t = await getTranslations("Offer.Page");

  return (
    <ViewWrapper>
      <HeroSection
        title={t("title")}
        titleLight={t("titleLight")}
        description={
          <RichText>{(tags) => t.rich("description", tags)}</RichText>
        }
        cta1={t("cta1")}
      />
      <OfferOptionsSection
        offerSectionTitle={t("offerSectionTitle")}
        offerSectionDescription={t("offerSectionDescription")}
        offerSectionLink={t("offerSectionLink")}
        offerSectionTitle2={t("offerSectionTitle2")}
        offerSectionDescription2={t("offerSectionDescription2")}
      />
      <ContactUsSection
        contactSectionTitle={t("contactSectionTitle")}
        contactSectionDescription={t("contactSectionDescription")}
        contactSectionCta={t("contactSectionCta")}
      />
    </ViewWrapper>
  );
}
