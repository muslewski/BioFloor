import { FullTruckloadLogisticsView } from "@/modules/logistyka-calosamochowa/full-truckload-logistics-view";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "FullTruckloadLogistics.Metadata",
  });

  return {
    title: "Logistyka calosamochodowa",
    description: t("description"),
  };
}

export default async function FullTruckloadLogisticsPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <FullTruckloadLogisticsView />;
}
