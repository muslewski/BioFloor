import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function InformationSection(p: {
  informationSectionTitle: string;
  informationSectionDescription: React.ReactNode;
  informationSectionImageAlt: string;
  informationSectionTitle2: string;
  informationSectionTitle2Light: string;
  informationSection2CustomElement: React.ReactNode;
  informationSectionImageAlt2: string;
}) {
  return (
    <SectionWrapper isBorderBottom>
      <HorizontalStructure
        textElement={
          <SectionIntro
            align="left"
            title={p.informationSectionTitle}
            description={p.informationSectionDescription}
          />
        }
        imageElement={
          <SectionImage
            src="/images/naturalne-rozwiazanie/tree.jpeg"
            alt={p.informationSectionImageAlt}
          />
        }
      />
      <HorizontalStructure
        imageOnLeft
        textElement={
          <SectionIntro
            align="left"
            title={p.informationSectionTitle2}
            titleLight={p.informationSectionTitle2Light}
            customElement={
              <ul className="list-disc pl-5 space-y-2">
                {p.informationSection2CustomElement}
              </ul>
            }
          />
        }
        imageElement={
          <SectionImage
            src="/images/naturalne-rozwiazanie/sunflower-husks.jpeg"
            alt={p.informationSectionImageAlt2}
            ratio={3 / 2}
          />
        }
      />
    </SectionWrapper>
  );
}
