import { ComingSoonSection } from "@/components/coming-soon-section";
import { ViewWrapper } from "@/components/common/view-wrapper";
// import { getTranslations } from "next-intl/server";

export async function PrivacyPolicyView() {
  // Get translations for static rendering
  // const t = await getTranslations("PrivacyPolicy.Page");

  return (
    <ViewWrapper>
      <ComingSoonSection />
    </ViewWrapper>
  );
}
