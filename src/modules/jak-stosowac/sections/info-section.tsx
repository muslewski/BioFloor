"use client";

import { BrownCard } from "@/components/common/cards/brown-card";
import { CardWrapper } from "@/components/common/cards/card-wrapper";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import {
  HammerIcon,
  HeaterIcon,
  MessageSquareWarningIcon,
  ShovelIcon,
} from "lucide-react";

export function InfoSection() {
  return (
    <SectionWrapper>
      <SectionIntro
        title="Dodatkowe zalecenia"
        description="Poniżej przedstawiamy dodatkowe wskazówki, które pomogą w efektywnym stosowaniu naszej ściółki:"
      />
      <CardWrapper columns={1} className="max-w-6xl self-center">
        <BrownCard
          icon={HeaterIcon}
          title="Przygotowanie podłogi:"
          description="Dogrzewanie kurnika przed rozsypaniem ściółki, aby zapewnić odpowiednią temperaturę."
        />
        <BrownCard
          icon={ShovelIcon}
          title="Aplikacja:"
          description="Rozsypywanie ręczne lub za pomocą rozrzutnika, z dbałością o równomierne pokrycie."
        />
        <BrownCard
          icon={HammerIcon}
          title="Zarządzanie:"
          description="Dla nierównych podłóg rozważyć wypełnienie spękań cementem przed aplikacją, co jest bardziej opłacalne. Po chowie ściółkę można kompostować lub stosować jako nawóz na pola."
        />
        <BrownCard
          icon={HeaterIcon}
          title="Przygotowanie podłogi:"
          description="Dogrzewanie kurnika przed rozsypaniem ściółki, aby zapewnić odpowiednią temperaturę."
        />
        <BrownCard
          icon={MessageSquareWarningIcon}
          title="Uwagi:"
          description="Jeśli podłoga jest bardzo czysta, zdezynfekowana i dogrzana, można rozważyć mniejszą ilość ściółki, ale z ostrożnością."
        />
      </CardWrapper>
    </SectionWrapper>
  );
}
