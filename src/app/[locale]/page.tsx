import ComingSoon from "@/components/coming-soon";
import { getTranslations, setRequestLocale } from "next-intl/server";

// import { HomeView } from "@/modules/home/home-view";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home.Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // const t = await getTranslations("Home.Page");

  // return <HomeView />;
  return <ComingSoon />;
}
