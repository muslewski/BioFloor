import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <HeroWrapper
      backgroundImage="/images/logistyka-calosamochodowa/trucks.png"
      insideImageClassName="object-[10%] lg:object-center"
    >
      <HeroIntro
        className="max-w-5xl"
        title=" Jak wygląda logistyka całosamochodowa?"
        titleLight="- sprawnie i na czas"
        description={
          <>
            Logistyka całosamochodowa z <b>BioFloor</b> to gwarancja szybkiej i
            niezawodnej dostawy ściółki prosto do Twojej hodowli. Organizujemy
            transport w pełni dostosowany do Twoich potrzeb - od momentu
            złożenia zamówienia, przez załadunek, aż po dostarczenie produktu
            pod wskazany adres. Dzięki wykorzystaniu dedykowanych pojazdów
            zapewniamy terminowość, bezpieczeństwo i pełną kontrolę nad
            procesem, abyś mógł skupić się na tym, co najważniejsze - swojej
            hodowli.
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
