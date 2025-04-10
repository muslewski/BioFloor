import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";
import { ContactClient } from "@/modules/kontakt/components/contact-client";

export function HeroSection() {
  return (
    <HeroWrapper backgroundImage="/images/kontakt/mailbox.png" isBorderBottom>
      <HeroIntro
        classNameHeroHeader="max-w-4xl"
        className="w-full pt-44 sm:pt-32"
        title="Czekamy na Twój kontakt!"
        description="Chcesz złożyć zamówienie na naszą ściółkę albo masz pytania? Napisz do nas lub zadzwoń - chętnie zadbamy o Twoje potrzeby!"
        customObject={<ContactClient />}
      />
    </HeroWrapper>
  );
}
