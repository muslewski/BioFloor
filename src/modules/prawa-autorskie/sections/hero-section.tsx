import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <HeroWrapper
      backgroundImage="/images/prawa-autorskie/henhouse.png"
      isBorderBottom
    >
      <HeroIntro
        title="Prawa Autorskie"
        classNameHeroHeader="max-w-3xl"
        titleLight="- Informacje o prawach własności intelektualnej"
        description="Zapoznaj się z zasadami ochrony praw autorskich i własności intelektualnej na naszej witrynie. Cenimy twórczość autorów i przestrzegamy obowiązujących przepisów prawnych."
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
