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

export function HomeAdvantagesSection(p: {
  sectionIntroTitle: string;
  sectionIntroDescription: string;
  GreenCardTitle1: string;
  GreenCardDescription1: string;
  GreenCardTitle2: string;
  GreenCardDescription2: string;
  GreenCardTitle3: string;
  GreenCardDescription3: string;
  GreenCardTitle4: string;
  GreenCardDescription4: string;
}) {
  return (
    <SectionWrapperImage
      backgroundImage="/images/home/henhouse.png"
      imageClassName="-top-[30%] sm:-top-[50%]"
    >
      <SectionIntro
        title={p.sectionIntroTitle}
        description={p.sectionIntroDescription}
      />
      <CardWrapper columns={2}>
        <GreenCard
          Icon={BicepsFlexedIcon}
          title={p.GreenCardTitle1}
          description={p.GreenCardDescription1}
        />
        <GreenCard
          Icon={BugOffIcon}
          title={p.GreenCardTitle2}
          description={p.GreenCardDescription2}
        />
        <GreenCard
          Icon={DropletOffIcon}
          title={p.GreenCardTitle3}
          description={p.GreenCardDescription3}
        />
        <GreenCard
          Icon={SmileIcon}
          title={p.GreenCardTitle4}
          description={p.GreenCardDescription4}
        />
      </CardWrapper>
    </SectionWrapperImage>
  );
}
