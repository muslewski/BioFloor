import { CallToAction } from "@/components/cta";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage.Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  console.log(locale);

  const t = await getTranslations("HomePage");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CallToAction text={t("title")} />
    </div>
  );
}
