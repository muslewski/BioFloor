import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function InformationSection(p: {
  informationSectionTitle: string;
  informationSectionDescription: React.ReactNode;
  informationSectionTitle2: string;
  informationSectionDescription2: React.ReactNode;
}) {
  return (
    <SectionWrapper>
      <HorizontalStructure
        textElement={
          <SectionIntro
            align="left"
            title={p.informationSectionTitle}
            description={<>{p.informationSectionDescription}</>}
          />
        }
        imageElement={
          <SectionImage src="/images/home/chickens.jpg" alt="Kury" />
        }
      />
      <HorizontalStructure
        imageOnLeft
        textElement={
          <SectionIntro
            align="left"
            title={p.informationSectionTitle2}
            description={<>{p.informationSectionDescription2}</>}
          />
        }
        imageElement={
          <SectionImage src="/images/home/business-card.jpg" alt="Kury" />
        }
      />
    </SectionWrapper>
  );
}
