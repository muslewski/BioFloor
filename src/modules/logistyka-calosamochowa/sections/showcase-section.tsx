import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function ShowcaseSection(p: {
  sectionIntroTitle: string;
  sectionIntroDescription: React.ReactNode;
}) {
  return (
    <SectionWrapper>
      <SectionIntro
        title={p.sectionIntroTitle}
        description={<>{p.sectionIntroDescription}</>}
      />
      <CardWrapper columns={3} className="gap-16 sm:gap-16">
        <SectionImage
          src="/images/logistyka-calosamochodowa/ftl-1.jpg"
          alt="Zdjecie podściółki"
          ratio={2 / 3}
          isBorder
          preview
          magnifier
        />
        <SectionImage
          src="/images/logistyka-calosamochodowa/ftl-2.jpg"
          alt="Zdjecie podściółki"
          ratio={2 / 3}
          isBorder
          preview
          magnifier
        />
        <SectionImage
          src="/images/logistyka-calosamochodowa/ftl-3.jpg"
          alt="Zdjecie podściółki"
          ratio={2 / 3}
          isBorder
          preview
          magnifier
        />
        <SectionImage
          src="/images/logistyka-calosamochodowa/ftl-4.jpg"
          alt="Zdjecie podściółki"
          ratio={2 / 3}
          isBorder
          preview
          magnifier
        />
        <SectionImage
          src="/images/logistyka-calosamochodowa/ftl-5.jpg"
          alt="Zdjecie podściółki"
          ratio={2 / 3}
          isBorder
          preview
          magnifier
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
