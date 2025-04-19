"use client";

import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import React from "react";

export function ContactInfoSection(p: {
  sectionTitle: string;
  sectionDescription: string;
  brownCardTitle1: string;
  brownCardTitle2: string;
  brownCardTitle3: string;
  brownCardDescription3: React.ReactNode;
}) {
  return (
    <SectionWrapper>
      <SectionIntro title={p.sectionTitle} description={p.sectionDescription} />

      <CardWrapper columns={1} className="max-w-6xl">
        <BrownCard
          icon={MailIcon}
          title={p.brownCardTitle1}
          customElement={
            <ul>
              <li>biuro@biofloor.pl</li>
            </ul>
          }
        />
        <BrownCard
          icon={PhoneIcon}
          title={p.brownCardTitle2}
          customElement={
            <ul>
              <li>+48 786 866 690</li>
            </ul>
          }
        />
        <BrownCard
          icon={MapPin}
          title={p.brownCardTitle3}
          description={<>{p.brownCardDescription3}</>}
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
