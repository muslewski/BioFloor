import { GreenCard } from "@/components/common/cards/green-card";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { ExternalLink } from "@/components/layout/footer/external-link";

export function CopyrightSection(p: {
  flaticonSectionTitle: string;
  flaticonSectionDescription: string;
}) {
  return (
    <SectionWrapper>
      <SectionIntro
        title={p.flaticonSectionTitle}
        description={p.flaticonSectionDescription}
      />
      <div className="flex flex-wrap gap-8 sm:gap-16 justify-evenly [&>div]:min-w-[250px]">
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/humidity.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/humidity_8923689">
              Humidity
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/cloud.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/co2_1435233">
              Co2
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/bacteria.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/bacteria_2637015">
              Bacteria
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/chicken.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/chicken_4868153">
              Chicken
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/pollution.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/air-pollution_2910075">
              Air Pollution
            </ExternalLink>
          }
        />

        {/* Variants */}
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/straw.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/hay_924356?term=straw">
              Hay
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/sand.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/sand_4492623?term=sand">
              Sand
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/carving.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/carving_6044129">
              Carving
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/pellets.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/iron-ore-pellets_7382729">
              Pellets
            </ExternalLink>
          }
        />

        {/* Why choose Us */}
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/bacteria-2.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/anti-virus_4564204">
              Anti Virus
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/like.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/thumbs-up_2954893">
              Thumbs Up
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/smell.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/aroma_5611462">
              Aroma
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/absorbency.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/absorption_5660101">
              Absorption
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/chicken-2.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/hen_1864470">
              Hen
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/eco.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/biodegradable_3779303">
              Biodegradable
            </ExternalLink>
          }
        />
        <GreenCard
          className="w-fit flex-row items-center"
          Icon="/images/icons/salary.png"
          title={
            <ExternalLink href="https://www.flaticon.com/free-icon/salary_3135706">
              Salary
            </ExternalLink>
          }
        />
      </div>
    </SectionWrapper>
  );
}
