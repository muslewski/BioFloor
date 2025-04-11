import { HowToUseView } from "@/modules/jak-stosowac/how-to-use-view";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "HowToUse.Metadata",
  });

  return {
    title: "Jak stosować",
    description: t("description"),
  };
}

export default async function HowToUsePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <HowToUseView />;
}
