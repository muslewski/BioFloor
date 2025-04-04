import { ViewWrapper } from "@/components/common/view-wrapper";
import { getTranslations } from "next-intl/server";

export async function OfferView() {
  // Get translations for static rendering
  const t = await getTranslations("Offer.Page");

  return <ViewWrapper>{t("title")}</ViewWrapper>;
}
