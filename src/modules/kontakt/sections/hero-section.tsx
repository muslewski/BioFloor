import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ContactClient } from "@/modules/kontakt/components/contact-client";

export function HeroSection(p: {
  title: string;
  description: string;
  backgroundImageAlt: string;
}) {
  return (
    <HeroWrapper
      backgroundImage="/images/kontakt/mailbox.png"
      isBorderBottom
      backgroundImageAlt={p.backgroundImageAlt}
    >
      <HeroIntro
        classNameHeroHeader="max-w-4xl"
        className="w-full pt-44 sm:pt-32"
        title={p.title}
        description={p.description}
        customObject={<ContactClient />}
      />
    </HeroWrapper>
  );
}
