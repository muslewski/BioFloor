import { Cta } from "@/components/common/cta";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { ArrowUpRight } from "lucide-react";

export function ContactUsSection() {
  return (
    <SectionWrapper>
      <SectionIntro
        title="Ceny ustalane indywidualnie - skontaktuj się z nami!"
        description="Chętnie odpowiemy na wszelkie pytania oraz dostarczymy próbki, aby mogli Państwo osobiście przekonać się o jakości naszego produktu."
      />
      <div className="flex sm:justify-center">
        <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
          Kontakt
        </Cta>
      </div>
    </SectionWrapper>
  );
}
