import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function SummarySection() {
  return (
    <SectionWrapper>
      <HorizontalStructure
        textElement={
          <SectionIntro
            align="left"
            title="Postaw na BioFloor"
            titleLight="- lepsze warunki, większa wydajność, wyższa jakość produkcji!"
            description={
              <>
                Dzięki innowacyjnemu podłożu hodowcy mogą zwiększyć efektywność
                produkcji, ograniczyć straty i poprawić dobrostan zwierząt.
                Biofloor to nowoczesne rozwiązanie, które realnie przekłada się
                na zdrowie ptaków i rentowność hodowli.
              </>
            }
          />
        }
        imageElement={
          <SectionImage src="/images/oferta/big-henhouse.png" alt="Kury" />
        }
      />
    </SectionWrapper>
  );
}
