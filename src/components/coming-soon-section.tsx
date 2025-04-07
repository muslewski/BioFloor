import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function ComingSoonSection() {
  return (
    <HeroWrapper backgroundImage="/images/work-in-progress.jpg">
      <HeroIntro
        title="Strona w przygotowaniu"
        description="Ta część witryny jest obecnie w trakcie budowy. Zapraszamy wkrótce!"
        ctaButtons={
          <>
            <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
              Skontaktuj się z nami
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
