import { CallToAction } from "@/components/cta";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CallToAction text={t("title")} />
    </div>
  );
}
