import { Cta } from "@/components/common/cta";
import { HorizontalStructure } from "@/components/common/section/horizontal-structure";
import { SectionImage } from "@/components/common/section/section-image";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { ArrowUpRight } from "lucide-react";

export function SummarySection(p: {
  summarySectionTitle: string;
  summarySectionTitleLight: string;
  summarySectionDescription: string;
  summaryCta1: string;
}) {
  return (
    <SectionWrapper>
      <HorizontalStructure
        textElement={
          <SectionIntro
            align="left"
            title={p.summarySectionTitle}
            titleLight={p.summarySectionTitleLight}
            description={p.summarySectionDescription}
            customElement={
              <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
                {p.summaryCta1}
              </Cta>
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
