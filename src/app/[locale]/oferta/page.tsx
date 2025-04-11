import { OfferView } from "@/modules/oferta/offer-view";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Offer.Metadata",
  });

  return {
    title: "Oferta",
    description: t("description"),
  };
}

export default async function OfferPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <OfferView />;
}
