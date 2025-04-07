import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function HarmInfoSection() {
  return (
    <SectionWrapper isBorderBottom>
      <SectionIntro
        title="Czym grozi niewłaściwe podłoże?"
        description="Źle dobrane i niewłaściwie utrzymane podłoże prowadzi do:"
      />
      <CardWrapper columns={2}>
        <BrownCard
          title="Nadmierna wilgotność"
          description="Nadmiernej wilgotności, co sprzyja powstawaniu twardej skorupy i rozwojowi patogenów."
          icon="/images/icons/humidity.png"
        />
        <BrownCard
          title="Emisja gazów"
          description="Wzrostu emisji amoniaku, siarkowodoru i dwutlenku węgla - podrażnienia błon śluzowych ptaków, osłabienia odporności i spadku jakości tuszek."
          icon="/images/icons/cloud.png"
        />
        <BrownCard
          title="Zakażenia bakteryjne"
          description="Zakażeń bakteryjnych (Salmonella, Escherichia coli, Staphylococcus), zwiększających śmiertelność stada i koszty leczenia."
          icon="/images/icons/bacteria.png"
        />
        <BrownCard
          title="Problemy dermatologiczne"
          description="Problemów dermatologicznych - owrzodzeń stóp i zapalenia pęcherzy piersiowych."
          icon="/images/icons/chicken.png"
        />
        <BrownCard
          title="Zanieczyszczenie powietrza"
          description="Zanieczyszczenia powietrza pyłem, który szkodzi zarówno ptakom, jak i pracownikom hodowli."
          icon="/images/icons/pollution.png"
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
