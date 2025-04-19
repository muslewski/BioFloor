import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection(p: {
  title: string;
  titleLight: string;
  description: string;
  cta1: string;
  cta2: string;
}) {
  return (
    <HeroWrapper
      backgroundImage="/images/prawa-autorskie/henhouse.png"
      isBorderBottom
    >
      <HeroIntro
        title={p.title}
        classNameHeroHeader="max-w-3xl"
        titleLight={p.titleLight}
        description={p.description}
        ctaButtons={
          <>
            <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
              {p.cta1}
            </Cta>
            <Cta href="/oferta" variant="outlined">
              {p.cta2}
            </Cta>
          </>
        }
      />
    </HeroWrapper>
  );
}
