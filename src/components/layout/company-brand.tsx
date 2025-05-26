"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function CompanyBrand() {
  const t = useTranslations("CompanyBrand");

  return (
    <Link
      href="/"
      title="Strona Główna"
      className="flex gap-2 items-end hover:scale-104 active:scale-96 transition-transform w-fit"
    >
      <div className="h-16 w-12 relative">
        <Image
          src="/images/logo.png"
          alt={t("logoAlt")}
          className="object-contain"
          fill
        />
      </div>
      <div className="h-10 w-32 sm:w-52 relative">
        <Image
          src="/images/logo-text.png"
          alt={t("textLogoAlt")}
          className="object-contain"
          fill
        />
      </div>
    </Link>
  );
}
