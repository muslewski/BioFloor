import { AdvantagesView } from "@/modules/atuty/advantages-view";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Advantages.Metadata",
  });

  return {
    title: "Atuty",
    description: t("description"),
  };
}

export default async function AdvantagesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <AdvantagesView />;
}
