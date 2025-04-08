"use client";

import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";

export function ContactInfoSection() {
  return (
    <SectionWrapper>
      <SectionIntro
        title="Zawsze w zasięgu ręki"
        description="Potrzebujesz szybkiego kontaktu? Poniżej znajdziesz wszystkie niezbędne informacje."
      />

      <CardWrapper columns={1} className="max-w-6xl">
        <BrownCard
          icon={MailIcon}
          title="Adresy email:"
          customElement={
            <ul>
              <li>biuro@biofloor.pl</li>
            </ul>
          }
        />
        <BrownCard
          icon={PhoneIcon}
          title="Numery telefonów:"
          customElement={
            <ul>
              <li>+48 123 456 788</li>
              <li>+48 234 123 754</li>
            </ul>
          }
        />
        <BrownCard
          icon={MapPin}
          title="Lokalizacja:"
          customElement={
            <div className="w-full">
              <iframe
                width="100%"
                height="300"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Szubi%C5%84ska%2067%20Bia%C5%82e%20B%C5%82ota,%2086-005+(Szubi%C5%84ska%2067)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          }
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
