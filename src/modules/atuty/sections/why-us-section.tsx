import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function WhyUsSection() {
  return (
    <SectionWrapper>
      <SectionIntro
        title="Dlaczego warto wybrać Biofloor?"
        description="Biofloor to kompleksowe rozwiązanie, które podnosi standardy hodowli drobiu na wyższy poziom."
      />
      <CardWrapper columns={2}>
        <BrownCard
          title="Komfort i dobrostan ptaków"
          description="Delikatna, a jednocześnie stabilna struktura Biofloor dba o łapy drobiu, minimalizując ryzyko podrażnień i urazów. Słoma bywa zbyt szorstka, pellet słomiany - twardy i nieelastyczny, a torf, choć miękki, może powodować problemy oddechowe. BioFloor łączy najlepsze cechy różnych materiałów, tworząc optymalne warunki dla zwierząt."
          icon="/images/icons/chicken-2.png"
        />
        <BrownCard
          title="Wyjątkowa chłonność"
          description="Biofloor skutecznie pochłania wilgoć, utrzymując kurnik w optymalnych warunkach. Jego zdolność do zatrzymywania wilgoci zapobiega powstawaniu mokrych miejsc sprzyjających rozwojowi bakterii i pleśni. W przeciwieństwie do słomy czy pelletu słomianego, które mogą szybko przemakać, oraz torfu, który generuje uciążliwy pył, BioFloor zapewnia zdrowe, suche środowisko dla ptaków."
          icon="/images/icons/absorbency.png"
        />
        <BrownCard
          title="Redukcja nieprzyjemnych zapachów"
          description="Dzięki naturalnym właściwościom BioFloor skutecznie wiąże amoniak, ograniczając jego emisję i poprawiając jakość powietrza w kurniku. Amoniak jest szkodliwy dla ptaków i może powodować problemy oddechowe. Słoma i pellet słomiany zapewniają jedynie częściową kontrolę nad zapachem, a torf, choć dobrze go pochłania, może powodować nadmierne pylenie."
          icon="/images/icons/smell.png"
        />
        <BrownCard
          title="Łatwość w utrzymaniu czystości"
          description="Dzięki Biofloor sprzątanie kurnika staje się szybkie i wygodne - wystarczy wymienić zabrudzoną warstwę na świeżą. Słoma i pellet słomiany często zbrylają się i trudno je usunąć, natomiast torf jest lekki, ale pylący. BioFloor ułatwia utrzymanie higieny, ograniczając czas i wysiłek potrzebny na codzienną pielęgnację."
          icon="/images/icons/like.png"
        />
        <BrownCard
          title="Naturalna ochrona przed bakteriami i grzybami"
          description="Biofloor działa jak naturalna bariera ochronna, ograniczając rozwój bakterii i grzybów. Regularnie poddawany badaniom pod kątem obecności Salmonelli i zarodników grzybów, jest bezpieczniejszą alternatywą dla torfu, który może być źródłem patogenów, oraz słomy, która często zawiera pozostałości środków chemicznych."
          icon="/images/icons/bacteria-2.png"
        />
        <BrownCard
          title="Naturalne i zrównoważone rozwiązanie"
          description="Biofloor to produkt biodegradowalny i przyjazny środowisku. W przeciwieństwie do słomy czy pelletu słomianego, które mogą zawierać resztki pestycydów, oraz torfu, którego wydobycie prowadzi do degradacji torfowisk, BioFloor jest w pełni zrównoważonym wyborem dla nowoczesnej hodowli."
          icon="/images/icons/eco.png"
        />
        <BrownCard
          title="Oszczędność"
          description="Dzięki zawartości białek, tłuszczy i błonnika daje lepszy produkt, wspomaga szybszy przyrost lub/i niższe koszty żywienia"
          icon="/images/icons/salary.png"
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
