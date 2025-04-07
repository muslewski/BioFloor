import { ComingSoonSection } from "@/components/coming-soon-section";
import { ViewWrapper } from "@/components/common/view-wrapper";
// import { getTranslations } from "next-intl/server";

export async function CopyrightView() {
  // Get translations for static rendering
  // const t = await getTranslations("Copyright.Page");

  return (
    <ViewWrapper>
      <ComingSoonSection />
    </ViewWrapper>
  );
}
