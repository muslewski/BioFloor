import { HackerCard } from "@/components/common/cards/hacker-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function FloorInfoSection(p: {
  floorInfoSectionTitle: string;
  floorInfoSectionDescription: string;
  hackerCardTitle1: string;
  hackerCardDescription1: string;
  hackerCardTitle2: string;
  hackerCardDescription2: string;
  hackerCardTitle3: string;
  hackerCardDescription3: string;
  hackerCardTitle4: string;
  hackerCardDescription4: string;
  hackerCardTitle5: string;
  hackerCardDescription5: string;
}) {
  return (
    <SectionWrapper isBorderBottom>
      <SectionIntro
        title={p.floorInfoSectionTitle}
        description={p.floorInfoSectionDescription}
      />
      <CardWrapper columns={3}>
        <HackerCard
          title={p.hackerCardTitle1}
          description={p.hackerCardDescription1}
          icon="/images/icons/carving.png"
        />
        <HackerCard
          title={p.hackerCardTitle2}
          description={p.hackerCardDescription2}
          icon="/images/icons/sand.png"
        />
        <HackerCard
          title={p.hackerCardTitle3}
          description={p.hackerCardDescription3}
          icon="/images/icons/soil.png"
        />
        <HackerCard
          title={p.hackerCardTitle4}
          description={p.hackerCardDescription4}
          icon="/images/icons/pellets.png"
        />
        <HackerCard
          title={p.hackerCardTitle5}
          description={p.hackerCardDescription5}
          icon="/images/icons/straw.png"
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
