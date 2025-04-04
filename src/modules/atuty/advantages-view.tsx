import { ViewWrapper } from "@/components/common/view-wrapper";
import { getTranslations } from "next-intl/server";

export async function AdvantagesView() {
  // Get translations for static rendering
  const t = await getTranslations("Advantages.Page");

  return <ViewWrapper>{t("title")}</ViewWrapper>;
}
