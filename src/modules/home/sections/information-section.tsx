import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function InformationSection() {
  return (
    <SectionWrapper>
      <HorizontalStructure
        textElement={
          <SectionIntro
            align="left"
            title="Dla kogo?"
            description={
              <>
                <b>BioFloor</b> to ściółka stworzona dla nowoczesnych ferm i
                firm drobiarskich, które stawiają na optymalizację produkcji i
                dobrostan zwierząt. Nasze rozwiązanie pomaga zwiększyć
                wydajność, ograniczyć straty i stworzyć lepsze warunki hodowlane
                - bez kompromisów.
              </>
            }
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
            title="Zainwestuj w przyszłość hodowli"
            description={
              <>
                Jeśli szukasz sprawdzonego rozwiązania, które przynosi realne
                korzyści finansowe i zdrowotne, <b>BioFloor</b> jest dla Ciebie.
                Skontaktuj się z nami i sprawdź czy możemy pomóc w rozwoju
                Twojej fermy.
              </>
            }
          />
        }
        imageElement={
          <SectionImage src="/images/home/business-card.jpg" alt="Kury" />
        }
      />
    </SectionWrapper>
  );
}
