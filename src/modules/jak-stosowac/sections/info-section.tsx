"use client";

import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import {
  HammerIcon,
  HeaterIcon,
  MessageSquareWarningIcon,
  ShovelIcon,
} from "lucide-react";

export function InfoSection(p: {
  sectionIntroTitle: string;
  sectionIntroDescription: string;
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
      <SectionIntro
        title={p.sectionIntroTitle}
        description={p.sectionIntroDescription}
      />
      <CardWrapper columns={1} className="max-w-6xl self-center">
        <BrownCard
          icon={HeaterIcon}
          title={p.brownCardTitle1}
          description={p.brownCardDescription1}
        />
        <BrownCard
          icon={ShovelIcon}
          title={p.brownCardTitle2}
          description={p.brownCardDescription2}
        />
        <BrownCard
          icon={HammerIcon}
          title={p.brownCardTitle3}
          description={p.brownCardDescription3}
        />
        <BrownCard
          icon={HeaterIcon}
          title={p.brownCardTitle4}
          description={p.brownCardDescription4}
        />
        <BrownCard
          icon={MessageSquareWarningIcon}
          title={p.brownCardTitle5}
          description={p.brownCardDescription5}
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
