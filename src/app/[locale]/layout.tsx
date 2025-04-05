import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";
// import { Navigation } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "LocaleRootLayout.Metadata",
  });

  return {
    title: {
      template: `%s | BioFloor`,
      default: t("default-title"),
    },
  };
}

interface LocaleRootLayout {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleRootLayout({
  children,
  params,
}: LocaleRootLayout) {
  // Ensure that the incoming 'locale' is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider>
          <main>
            {/* <Navigation /> */}
            {children}
            <Footer />
          </main>
          <Toaster richColors theme="light" />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
