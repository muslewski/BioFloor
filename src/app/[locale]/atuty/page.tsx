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
    title: t("title"),
    description: t("description"),
  };
}

export default async function AdvantagesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("Advantages.Page");

  return <div>{t("title")}</div>;
}
