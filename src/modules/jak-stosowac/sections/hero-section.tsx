import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { Calculator } from "@/modules/jak-stosowac/components/calculator";

export function HeroSection() {
  return (
    <HeroWrapper
      backgroundImage="/images/jak-stosowac/outside.png"
      isBorderBottom
    >
      <HeroIntro
        className="pt-32 sm:pt-12"
        title="Jak stosować naszą ściółkę?"
        description="Skorzystaj z prostego narzędzia, które pomoże Ci policzyć optymalną ilość ściółki do Twoich potrzeb."
        customObject={<Calculator />}
      />
    </HeroWrapper>
  );
}
