import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { Link } from "@/i18n/navigation";

export function OfferOptionsSection() {
  return (
    <SectionWrapper>
      <HorizontalStructure
        textElement={
          <SectionIntro
            align="left"
            title="Sprzedaż hurtowa"
            description={
              <>
                Zapewniamy dostawy całopojazdowe w Big Bagach o pojemności około
                1.05 ton. To idealne rozwiązanie dla dużych gospodarstw i ferm
                drobiu, które potrzebują stałych, wydajnych dostaw w
                ekonomicznej formie.
              </>
            }
            customElement={
              <Link
                href="/logistyka-calosamochodowa"
                className="font-semibold block transition-transform hover:scale-102 active:scale-98"
              >
                Jak wygląda logistyka całosamochodowa?
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
            title="Sprzedaż pojedynczych Big Bag"
            description={
              <>
                Oferujemy możliwość zakupu mniejszych partii, co pozwala na
                elastyczne zarządzanie zapasami i dostosowanie ilości do
                indywidualnych potrzeb.
              </>
            }
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
