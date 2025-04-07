import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <HeroWrapper
      backgroundImage="/images/atuty/henhouse.png"
      insideImageClassName="object-[40%] lg:object-center"
      isBorderBottom
    >
      <HeroIntro
        className="max-w-5xl"
        title="Nowa jakość w hodowli drobiu"
        titleLight="- komfort i ekologia w jednym"
        description={
          <>
            <b>BioFloor</b> rewolucjonizuje hodowlę drobiu, łącząc komfort,
            higienę i ekologię. Dzięki naturalnej łusce słonecznikowej zapewnia
            suche podłoże i zdrowsze ptaki, wspierając hodowców w osiąganiu
            lepszych wyników.
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
