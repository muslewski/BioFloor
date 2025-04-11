import { CopyrightView } from "@/modules/prawa-autorskie/copyright-view";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Copyright.Metadata",
  });

  return {
    title: "Prawa autorskie",
    description: t("description"),
  };
}

export default async function CopyrightPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <CopyrightView />;
}
