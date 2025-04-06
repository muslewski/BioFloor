import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <HeroWrapper backgroundImage="/images/naturalne-rozwiazanie/henhouse.png">
      <HeroIntro
        className="max-w-4xl"
        title="Podłoże w hodowli drobiu"
        titleLight="- kluczowy czynnik zdrowia i efektywności"
        description={
          <>
            Jakość podłoża w kurniku ma bezpośredni wpływ na zdrowie ptaków,
            efektywność produkcji oraz jakość końcowego produktu. Właściwa
            struktura i skład podłoża zapobiegają rozwojowi bakterii i pleśni,
            redukują emisję szkodliwych gazów oraz zapewniają optymalny
            mikroklimat w budynku hodowlanym.
          </>
        }
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
