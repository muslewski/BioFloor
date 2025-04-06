import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { GreenCard } from "@/components/common/cards/green-card";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapperImage } from "@/components/common/section/section-wrapper-image";
import {
  BicepsFlexedIcon,
  BugOffIcon,
  DropletOffIcon,
  SmileIcon,
} from "lucide-react";

export function HomeAdvantagesSection() {
  return (
    <SectionWrapperImage
      backgroundImage="/images/home/henhouse.png"
      imageClassName="-top-[30%] sm:-top-[50%]"
    >
      <SectionIntro
        title="Efektywność, która się opłaca"
        description="Odkryj, jak nasza ściółka podnosi standardy w hodowli drobiu."
      />
      <CardWrapper columns={2}>
        <GreenCard
          Icon={BicepsFlexedIcon}
          title="Komfort i dobrostan"
          description="Delikatna, a jednocześnie stabilna struktura PodŁapki chroni łapy drobiu, łącząc najlepsze cechy różnych materiałów."
        />
        <GreenCard
          Icon={BugOffIcon}
          title="Naturalna ochrona"
          description="Ogranicza rozwój bakterii i grzybów, jest bezpieczniejszy niż torf czy słoma."
        />
        <GreenCard
          Icon={DropletOffIcon}
          title="Chłonność"
          description="PodŁapki skutecznie pochłaniają wilgoć, zapobiegając rozwojowi bakterii i pleśni, zapewniając zdrowe, suche środowisko."
        />
        <GreenCard
          Icon={SmileIcon}
          title="Łatwe czyszczenie"
          description="Nie zbryla się, ułatwia sprzątanie i utrzymanie higieny w kurniku."
        />
      </CardWrapper>
    </SectionWrapperImage>
  );
}
