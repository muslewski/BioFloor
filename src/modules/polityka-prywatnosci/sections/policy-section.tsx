import { BrownCard } from "@/components/common/cards/brown-card";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function PolicySection(p: {
  sectionIntroTitle: string;
  sectionIntroDescription: string;
  brownCardTitle1: string;
  brownCardDescription1: string;
  brownCard1CustomElement: React.ReactNode;
  brownCardTitle2: string;
  brownCardDescription2: string;
  brownCard2CustomElement: React.ReactNode;
  brownCardTitle3: string;
  brownCardDescription3: string;
  brownCard3CustomElement: React.ReactNode;
  brownCardTitle4: string;
  brownCardDescription4: string;
  brownCardTitle5: string;
  brownCardDescription5: string;
  brownCard5CustomElement: React.ReactNode;
  brownCardTitle6: string;
  brownCardDescription6: string;
  brownCard6CustomElement: React.ReactNode;
  brownCardTitle7: string;
  brownCardDescription7: string;
  brownCard7CustomElement: React.ReactNode;
}) {
  return (
    <SectionWrapper>
      <SectionIntro
        title={p.sectionIntroTitle}
        description={p.sectionIntroDescription}
      />
      <BrownCard
        title={p.brownCardTitle1}
        description={p.brownCardDescription1}
        customElement={
          <ul className="space-y-1 list-disc pl-5">
            {p.brownCard1CustomElement}
          </ul>
        }
      />

      <BrownCard
        title={p.brownCardTitle2}
        description={p.brownCardDescription2}
        customElement={
          <div className="space-y-4 mt-4">{p.brownCard2CustomElement}</div>
        }
      />

      <BrownCard
        title={p.brownCardTitle3}
        description={p.brownCardDescription3}
        customElement={
          <div className="mt-4 flex flex-col gap-3">
            {p.brownCard3CustomElement}
          </div>
        }
      />

      <BrownCard
        title={p.brownCardTitle4}
        description={p.brownCardDescription4}
      />

      <BrownCard
        title={p.brownCardTitle5}
        description={p.brownCardDescription5}
        customElement={
          <div className="mt-4 flex flex-col gap-3">
            {p.brownCard5CustomElement}
          </div>
        }
      />

      <BrownCard
        title={p.brownCardTitle6}
        description={p.brownCardDescription6}
        customElement={
          <div className="mt-4 flex flex-col gap-3">
            {p.brownCard6CustomElement}
          </div>
        }
      />

      <BrownCard
        title={p.brownCardTitle7}
        description={p.brownCardDescription7}
        customElement={
          <div className="mt-4 flex flex-col gap-3">
            {p.brownCard7CustomElement}
          </div>
        }
      />
    </SectionWrapper>
  );
}
