import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <HeroWrapper
      backgroundImage="/images/polityka-prywatnosci/henhouse.png"
      isBorderBottom
    >
      <HeroIntro
        title="Polityka Prywatności"
        classNameHeroHeader="max-w-3xl"
        titleLight="- Twoje dane są dla nas ważne"
        description="Dowiedz się, w jaki sposób przetwarzamy i chronimy Twoje dane osobowe. Szanujemy Twoją prywatność i zapewniamy transparentność naszych działań."
        ctaButtons={
          <>
            <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
              Zamów próbkę
            </Cta>
            <Cta href="/oferta" variant="outlined">
              Zobacz ofertę
            </Cta>
          </>
        }
      />
    </HeroWrapper>
  );
}
