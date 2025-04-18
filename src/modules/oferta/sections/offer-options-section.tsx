import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { Link } from "@/i18n/navigation";

export function OfferOptionsSection(p: {
  offerSectionTitle: string;
  offerSectionDescription: string;
  offerSectionLink: string;
  offerSectionTitle2: string;
  offerSectionDescription2: string;
}) {
  return (
    <SectionWrapper>
      <HorizontalStructure
        textElement={
          <SectionIntro
            align="left"
            title={p.offerSectionTitle}
            description={<>{p.offerSectionDescription}</>}
            customElement={
              <Link
                href="/logistyka-calosamochodowa"
                className="font-semibold block transition-transform hover:scale-102 active:scale-98"
              >
                {p.offerSectionLink}
              </Link>
            }
          />
        }
        imageElement={
          <SectionImage src="/images/oferta/warehouse.png" alt="Magazyn" />
        }
      />
      <HorizontalStructure
        imageOnLeft
        textElement={
          <SectionIntro
            align="left"
            title={p.offerSectionTitle2}
            description={<>{p.offerSectionDescription2}</>}
          />
        }
        imageElement={
          <SectionImage
            src="/images/oferta/single-bag.png"
            alt="Sklep z opakowaniem"
          />
        }
      />
    </SectionWrapper>
  );
}
