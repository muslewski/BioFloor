import { Cta } from "@/components/common/cta";
import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { Truck } from "lucide-react";

export function OfferOptionsSection(p: {
  offerSectionTitle: string;
  offerSectionDescription: string;
  offerSectionLink: string;
  offerSectionImageAlt: string;
  offerSectionTitle2: string;
  offerSectionDescription2: string;
  offerSectionImageAlt2: string;
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
              <Cta
                href="/logistyka-calosamochodowa"
                icon={<Truck className="size-5" />}
                className="mt-6 max-w-[300px] sm:max-w-none lg:max-w-[350px] xl:max-w-none"
              >
                {p.offerSectionLink}
              </Cta>
            }
          />
        }
        imageElement={
          <SectionImage
            src="/images/oferta/warehouse.png"
            alt={p.offerSectionImageAlt}
          />
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
            alt={p.offerSectionImageAlt2}
          />
        }
      />
    </SectionWrapper>
  );
}
