import { BrownCard } from "@/components/common/cards/brown-card";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";

export function PolicySection() {
  return (
    <SectionWrapper>
      <SectionIntro
        title="Wprowadzenie"
        description="Twoja prywatność jest dla nas priorytetem! W niniejszej Polityce Prywatności znajdziesz szczegóły dotyczące tego, jak zbieramy, przetwarzamy i chronimy Twoje dane osobowe podczas korzystania z naszej witryny internetowej."
      />
      <BrownCard
        title="1. Informacje o Administratorze Danych Osobowych"
        description="Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez użytkowników w związku z korzystaniem z naszego serwisu internetowego. Administratorem danych osobowych jest:"
        customElement={
          <ul className="space-y-1 list-disc pl-5">
            <li>
              <b>BioFloor Sp. z o.o.</b>
            </li>
            <li>Adres: ul. Przykładowa 123, 00-000 Warszawa</li>
            <li>NIP: 000-00-00-000</li>
            <li>REGON: 000000000</li>
            <li>KRS: 0000000000</li>
            <li>BDO: 000000000</li>
            <li>Adres e-mail: biuro@biofloor.pl</li>
            <li>Telefon: +48 00 000 00 00</li>
          </ul>
        }
      />

      <BrownCard
        title="2. Dane Osobowe"
        description="Zgromadzenie i przetwarzanie danych osobowych użytkowników jest prowadzone zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych (RODO)."
        customElement={
          <div className="space-y-4 mt-4">
            <p>
              Nie zbieramy żadnych danych osobowych na naszej stronie
              internetowej bez wyraźnej zgody użytkownika.
            </p>
            <p>
              Nasza strona jest wyposażona w certyfikat SSL, co oznacza, że
              wszystkie przekazywane informacje są szyfrowane i chronione przed
              dostępem osób nieupoważnionych.
            </p>
          </div>
        }
      />

      <BrownCard
        title="3. Cel i Zakres Przetwarzania Danych Osobowych"
        description="Jeśli użytkownik dobrowolnie poda nam swoje dane osobowe (na przykład w formularzu kontaktowym lub w celu zamówienia próbki produktu), będziemy przetwarzać te dane wyłącznie w określonych celach."
        customElement={
          <div className="mt-4">
            <p className="mb-3">Dane osobowe przetwarzamy w celu:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Udzielenia odpowiedzi na zapytania przesłane przez formularz
                kontaktowy
              </li>
              <li>Realizacji zamówienia próbek produktów</li>
              <li>
                Przesyłania informacji handlowych i marketingowych (tylko za
                wyraźną zgodą)
              </li>
              <li>Przygotowania i przedstawienia oferty handlowej</li>
            </ul>
            <p className="mt-3">
              Dostarczone nam dane osobowe nie będą przekazywane osobom trzecim
              ani wykorzystywane w innych celach bez wyraźnej zgody użytkownika.
            </p>
          </div>
        }
      />

      <BrownCard
        title="4. Analiza Danych i Statystyki"
        description="Nasza strona może korzystać z narzędzi do analizy ruchu, takich jak Google Analytics, w celu zbierania anonimowych informacji na temat ruchu na stronie. Te dane są wykorzystywane wyłącznie w celach statystycznych i doskonalenia jakości naszego serwisu. Nie pozwalają one na identyfikację konkretnych użytkowników."
      />

      <BrownCard
        title="5. Pliki Cookies"
        description="Nasza strona wykorzystuje pliki cookies (ciasteczka), które są małymi plikami tekstowymi zapisywanymi na urządzeniu użytkownika."
        customElement={
          <div className="mt-4">
            <p className="mb-3">Pliki cookies służą do:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Zapewnienia prawidłowego funkcjonowania strony</li>
              <li>Zapamiętywania preferencji użytkownika</li>
              <li>Tworzenia statystyk oglądalności strony</li>
              <li>Dostosowania treści reklamowych</li>
            </ul>
            <p className="mt-3">
              Użytkownik może w każdej chwili wyłączyć lub ograniczyć używanie
              plików cookies w ustawieniach przeglądarki internetowej.
            </p>
          </div>
        }
      />

      <BrownCard
        title="6. Prawa Użytkowników"
        description="Zgodnie z RODO, użytkownicy mają określone prawa związane z przetwarzaniem ich danych osobowych."
        customElement={
          <div className="mt-4">
            <p className="mb-3">Użytkownicy mają prawo do:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania (poprawiania) swoich danych</li>
              <li>Usunięcia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>
                Niepodlegania decyzjom opartym wyłącznie na zautomatyzowanym
                przetwarzaniu
              </li>
            </ul>
            <p className="mt-3">
              Wszelkie pytania i prośby dotyczące danych osobowych prosimy
              kierować na adres e-mail:{" "}
              <a
                href="mailto:biuro@biofloor.pl"
                className="underline text-brown-600"
              >
                biuro@biofloor.pl
              </a>
              .
            </p>
          </div>
        }
      />

      <BrownCard
        title="7. Zmiany w Polityce Prywatności"
        description="Zastrzegamy sobie prawo do zmiany Polityki Prywatności w celu dostosowania jej do zmieniających się potrzeb i przepisów prawnych. O istotnych zmianach będziemy informować użytkowników poprzez stosowne ogłoszenia na naszej stronie internetowej."
        customElement={
          <div className="mt-4">
            <p>
              Aktualna wersja Polityki Prywatności zawsze będzie dostępna na
              naszej stronie internetowej.
            </p>
            <p className="mt-4 italic text-right">
              Ostatnia aktualizacja: 10 kwietnia 2025 r.
            </p>
          </div>
        }
      />
    </SectionWrapper>
  );
}
