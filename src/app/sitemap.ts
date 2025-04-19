import { MetadataRoute } from "next";
import { Locale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

// Adapt this as necessary
const host = "https://biofloor.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  // Adapt this as necessary
  return [
    ...getEntries("/"),
    ...getEntries("/atuty"),
    ...getEntries("/jak-stosowac"),
    ...getEntries("/naturalne-rozwiazanie"),
    ...getEntries("/logistyka-calosamochodowa"),
    ...getEntries("/oferta"),
    ...getEntries("/kontakt"),
    ...getEntries("/polityka-prywatnosci"),
    ...getEntries("/prawa-autorskie"),
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
