import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <HeroWrapper
      backgroundImage="/images/logistyka-calosamochodowa/trucks.png"
      insideImageClassName="object-[10%] lg:object-center"
      isBorderBottom
    >
      <HeroIntro
        className="max-w-5xl"
        title={
          <>
            <span className="hidden sm:block">
              Jak wygląda logistyka całosamochodowa?
            </span>
            <span className="block sm:hidden">Logistyka całosamochodowa</span>
          </>
        }
        titleLight="- sprawnie i na czas"
        description={
          <>
            Logistyka całosamochodowa z <b>Biofloor</b> to gwarancja szybkiej i
            niezawodnej dostawy ściółki prosto do Twojej hodowli. Organizujemy
            transport w pełni dostosowany do Twoich potrzeb - od momentu
            złożenia zamówienia, przez załadunek, aż po dostarczenie produktu
            pod wskazany adres.
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
