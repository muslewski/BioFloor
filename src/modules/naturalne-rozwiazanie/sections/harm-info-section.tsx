import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function HarmInfoSection(p: {
  sectionTitle: string;
  sectionDescription: string;
  brownCardTitle1: string;
  brownCardDescription1: string;
  brownCardTitle2: string;
  brownCardDescription2: string;
  brownCardTitle3: string;
  brownCardDescription3: string;
  brownCardTitle4: string;
  brownCardDescription4: string;
  brownCardTitle5: string;
  brownCardDescription5: string;
}) {
  return (
    <SectionWrapper isBorderBottom>
      <SectionIntro title={p.sectionTitle} description={p.sectionDescription} />
      <CardWrapper columns={2}>
        <BrownCard
          title={p.brownCardTitle1}
          description={p.brownCardDescription1}
          icon="/images/icons/humidity.png"
        />
        <BrownCard
          title={p.brownCardTitle2}
          description={p.brownCardDescription2}
          icon="/images/icons/cloud.png"
        />
        <BrownCard
          title={p.brownCardTitle3}
          description={p.brownCardDescription3}
          icon="/images/icons/bacteria.png"
        />
        <BrownCard
          title={p.brownCardTitle4}
          description={p.brownCardDescription4}
          icon="/images/icons/chicken.png"
        />
        <BrownCard
          title={p.brownCardTitle5}
          description={p.brownCardDescription5}
          icon="/images/icons/pollution.png"
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
