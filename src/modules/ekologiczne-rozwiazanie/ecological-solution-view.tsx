import { ViewWrapper } from "@/components/common/view-wrapper";
import { getTranslations } from "next-intl/server";

export async function EcologicalSolutionView() {
  // Get translations for static rendering
  const t = await getTranslations("EcologicalSolution.Page");

  return <ViewWrapper>{t("title")}</ViewWrapper>;
}
