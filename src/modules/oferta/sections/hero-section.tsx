import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <HeroWrapper
      backgroundImage="/images/oferta/big-henhouse.png"
      insideImageClassName="object-[40%] lg:object-center"
      isBorderBottom
    >
      <HeroIntro
        className="max-w-5xl"
        title="Poznaj naszą ofertę"
        titleLight="- dopasowana do Twoich potrzeb"
        description={
          <>
            W trosce o najwyższą jakość i wygodę naszych klientów oferujemy
            ściółkę <b>BioFloor</b> w dwóch formach sprzedaży, dostosowanych do
            różnych potrzeb hodowców. Dzięki temu każdy może wybrać rozwiązanie
            idealnie pasujące do skali i specyfiki swojej hodowli.
          </>
        }
        ctaButtons={
          <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
            Zamów próbkę
          </Cta>
        }
      />
    </HeroWrapper>
  );
}
