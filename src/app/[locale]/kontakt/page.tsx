import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ContactPage.Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("ContactPage");

  return <div>{t("title")}</div>;
}
