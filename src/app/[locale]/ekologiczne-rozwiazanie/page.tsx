import { EcologicalSolutionView } from "@/modules/ekologiczne-rozwiazanie/ecological-solution-view";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "EcologicalSolution.Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function EcologicalSolutionPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <EcologicalSolutionView />;
}
