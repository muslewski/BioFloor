import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HeroWrapper } from "@/components/common/hero/hero-wrapper";

export function HeroSection() {
  return (
    <HeroWrapper backgroundImage="/images/kontakt/mailbox.png" isBorderBottom>
      <HeroIntro
        className="max-w-4xl"
        title="Czekamy na Twój kontakt!"
        description="Chcesz złożyć zamówienie na naszą ściółkę albo masz pytania? Napisz do nas lub zadzwoń - chętnie zadbamy o Twoje potrzeby!"
      />
    </HeroWrapper>
  );
}
