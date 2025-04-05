import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pl", "en", "de"],

  // Used when no locale matches
  defaultLocale: "pl",

  // https://next-intl.dev/docs/routing#locale-prefix-as-needed
  localePrefix: "as-needed",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    "/": "/",

    // If some locales use different paths, you can
    // specify the relevant external pathnames
    "/atuty": {
      en: "/advantages",
      de: "/vorteile",
    },
    "/naturalne-rozwiazanie": {
      en: "/natürliche-solution",
      de: "/ökologische-lösung",
    },
    "/jak-stosowac": {
      en: "/how-to-use",
      de: "/anwendung",
    },
    "/kontakt": {
      en: "/contact",
      de: "/kontakt",
    },
    "/logistyka-calosamochodowa": {
      en: "/full-truckload-logistics",
      de: "/komplettladungslogistik",
    },
    "/oferta": {
      en: "/offer",
      de: "/angebot",
    },
    "/polityka-prywatnosci": {
      en: "/privacy-policy",
      de: "/datenschutzrichtlinie",
    },
    "/prawa-autorskie": {
      en: "/copyright",
      de: "/urheberrecht",
    },
  },
});
