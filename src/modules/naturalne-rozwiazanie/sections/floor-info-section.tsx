import { HackerCard } from "@/components/common/cards/hacker-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function FloorInfoSection() {
  return (
    <SectionWrapper isBorderBottom>
      <SectionIntro
        title="Jakie podłoże stosuje się w hodowli drobiu?"
        description="Wybór podłoża wpływa na zdrowie drobiu – zobacz różnice."
      />
      <CardWrapper columns={3}>
        <HackerCard
          title="Wióry drzewne"
          description="skuteczne w pochłanianiu wilgoci, ale mogą zawierać zanieczyszczenia i wymagają mieszania z innymi materiałami."
          icon="/images/icons/carving.png"
        />
        <HackerCard
          title="Trociny"
          description="tańsze, ale trudniejsze w utrzymaniu, ograniczona absorpcja wilgoci."
          icon="/images/icons/sand.png"
        />
        <HackerCard
          title="Torf"
          description="dobrze pochłania wilgoć, ale pyli i łatwo zbryla się w twarde grudki."
          icon="/images/icons/soil.png"
        />
        <HackerCard
          title="Ściółka granulowana"
          description="nowoczesne rozwiązanie zapewniające lepszą higienę i mniejszą emisję gazów. Ponadto dostarczającą więcej właściwości odżywczych dających wiecej korzyści w dobrostanie."
          icon="/images/icons/pellets.png"
        />
        <HackerCard
          title="Słoma pszeniczna"
          description="popularna, ale wymaga częstej wymiany, słabo neutralizuje amoniak."
          icon="/images/icons/straw.png"
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
