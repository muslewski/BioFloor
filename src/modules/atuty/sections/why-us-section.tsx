import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function WhyUsSection(p: {
  sectionIntroTitle: string;
  sectionIntroDescription: string;
  BrownCardTitle1: string;
  BrownCardDescription1: string;
  BrownCardTitle2: string;
  BrownCardDescription2: string;
  BrownCardTitle3: string;
  BrownCardDescription3: string;
  BrownCardTitle4: string;
  BrownCardDescription4: string;
  BrownCardTitle5: string;
  BrownCardDescription5: string;
  BrownCardTitle6: string;
  BrownCardDescription6: string;
  BrownCardTitle7: string;
  BrownCardDescription7: string;
}) {
  return (
    <SectionWrapper>
      <SectionIntro
        title={p.sectionIntroTitle}
        description={p.sectionIntroDescription}
      />
      <CardWrapper columns={2}>
        <BrownCard
          title={p.BrownCardTitle1}
          description={p.BrownCardDescription1}
          icon="/images/icons/chicken-2.png"
        />
        <BrownCard
          title={p.BrownCardTitle2}
          description={p.BrownCardDescription2}
          icon="/images/icons/absorbency.png"
        />
        <BrownCard
          title={p.BrownCardTitle3}
          description={p.BrownCardDescription3}
          icon="/images/icons/smell.png"
        />
        <BrownCard
          title={p.BrownCardTitle4}
          description={p.BrownCardDescription4}
          icon="/images/icons/like.png"
        />
        <BrownCard
          title={p.BrownCardTitle5}
          description={p.BrownCardDescription5}
          icon="/images/icons/bacteria-2.png"
        />
        <BrownCard
          title={p.BrownCardTitle6}
          description={p.BrownCardDescription6}
          icon="/images/icons/eco.png"
        />
        <BrownCard
          title={p.BrownCardTitle7}
          description={p.BrownCardDescription7}
          icon="/images/icons/salary.png"
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
