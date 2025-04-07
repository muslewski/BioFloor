import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function InformationSection() {
  return (
    <SectionWrapper isBorderBottom>
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
          <SectionImage
            src="/images/naturalne-rozwiazanie/tree.jpeg"
            alt="Kury"
          />
        }
      />
      <HorizontalStructure
        imageOnLeft
        textElement={
          <SectionIntro
            align="left"
            title="BioFloor ściółka z łuski słonecznika,"
            titleLight="która łączy zalety najlepszych materiałów i eliminuje ich wady."
            customElement={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Wyjątkowa absorpcja wilgoci - ogranicza tworzenie twardej
                    skorupy i ułatwia utrzymanie czystości.
                  </li>
                  <li>
                    Redukcja emisji amoniaku i siarkowodoru - znacząco poprawia
                    jakość powietrza i zdrowie ptaków.
                  </li>
                  <li>
                    Naturalna izolacja cieplna - zapobiega wyziębieniu w zimie i
                    przegrzaniu latem.
                  </li>
                  <li>
                    Struktura sprzyjająca naturalnym zachowaniom - ptaki mogą
                    grzebać i odpoczywać w komfortowych warunkach.
                  </li>
                  <li>
                    Ekonomia i efektywność - rzadsza wymiana podłoża i mniejsze
                    zużycie materiału oznaczają realne oszczędności.
                  </li>
                  <li>
                    Bezpieczeństwo mikrobiologiczne - regularnie badana pod
                    kątem patogenów, wolna od Salmonelli i mykotoksyn.
                  </li>
                  <li>
                    Dodatkowe wartości odżywcze - zawartość białka i tłuszczu
                    wspiera zdrowie i kondycję ptaków.
                  </li>
                </ul>
              </>
            }
          />
        }
        imageElement={
          <SectionImage
            src="/images/naturalne-rozwiazanie/sunflower-husks.jpeg"
            alt="Kury"
            ratio={3 / 2}
          />
        }
      />
    </SectionWrapper>
  );
}
