"use client";

import { LanguagesIcon } from "lucide-react";
import { useState } from "react";
import { Locale, useLocale } from "next-intl";

import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export function LanguageButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();

  const t = useTranslations("Navigation.LanguageButton");

  const changeLanguage = (nextLocale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          title="Język"
          size="icon"
          variant="ghost"
          className={cn(
            "hover:!bg-transparent w-fit h-full py-[11px] px-4 border-b-2 rounded-none border-transparent duration-200 ease-in-out transition-all hover:border-foreground/15",
            isOpen && "rounded-md !border-foreground/45"
          )}
        >
          <LanguagesIcon strokeWidth={1.5} className="size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="bg-gradient-to-r from-background/75 to-background/45 backdrop-blur-sm flex flex-col w-fit gap-2"
      >
        <p className="sr-only">{t("label")}</p>
        {routing.locales.map((locale) => (
          <Button
            key={locale}
            onClick={() => changeLanguage(locale)}
            disabled={locale === currentLocale}
          >
            {t("locale", { locale })}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
