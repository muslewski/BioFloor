import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ArrowUpRight } from "lucide-react";

export function HeroSection(p: {
  title: string;
  titleLight: string;
  description: React.ReactNode;
  cta1: string;
  backgroundImageAlt: string;
}) {
  return (
    <HeroWrapper
      backgroundImage="/images/oferta/big-henhouse.png"
      insideImageClassName="object-[40%] lg:object-center"
      isBorderBottom
      backgroundImageAlt={p.backgroundImageAlt}
    >
      <HeroIntro
        className="max-w-5xl"
        title={p.title}
        titleLight={p.titleLight}
        description={<>{p.description}</>}
        ctaButtons={
          <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
            {p.cta1}
          </Cta>
        }
      />
    </HeroWrapper>
  );
}
