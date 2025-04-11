import { PrivacyPolicyView } from "@/modules/polityka-prywatnosci/privacy-policy-view";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "PrivacyPolicy.Metadata",
  });

  return {
    title: "Polityka prywatności",
    description: t("description"),
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <PrivacyPolicyView />;
}
