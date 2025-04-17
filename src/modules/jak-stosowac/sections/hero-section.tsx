import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { Calculator } from "@/modules/jak-stosowac/components/calculator";

export function HeroSection(p: { title: string; description: string }) {
  return (
    <HeroWrapper
      backgroundImage="/images/jak-stosowac/outside.png"
      isBorderBottom
    >
      <HeroIntro
        className="pt-32 sm:pt-12"
        title={p.title}
        description={p.description}
        customObject={<Calculator />}
      />
    </HeroWrapper>
  );
}
