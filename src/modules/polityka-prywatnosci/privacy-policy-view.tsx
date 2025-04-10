import { ViewWrapper } from "@/components/common/view-wrapper";
import { HeroSection } from "@/modules/polityka-prywatnosci/sections/hero-section";
import { PolicySection } from "@/modules/polityka-prywatnosci/sections/policy-section";
// import { getTranslations } from "next-intl/server";

export async function PrivacyPolicyView() {
  // Get translations for static rendering
  // const t = await getTranslations("PrivacyPolicy.Page");

  return (
    <ViewWrapper>
      <HeroSection />
      <PolicySection />
    </ViewWrapper>
  );
}
