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
          description={
            <>
              ul. Szubińska 67
              <br /> Białe Błota, 86-005
              <br /> Polska 🇵🇱
            </>
          }
          customElement={
            <div className="w-full rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.670290490166!2d17.911185814538843!3d53.09712278795559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470312bd169979af%3A0x11657646b19a5a82!2zU3p1YmnFhHNrYSA2NywgODYtMDA1IEJpYcWCZSBCxYJvdGE!5e1!3m2!1spl!2spl!4v1744307449679!5m2!1spl!2spl"
                loading="lazy"
                className="w-full min-h-96"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          }
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
