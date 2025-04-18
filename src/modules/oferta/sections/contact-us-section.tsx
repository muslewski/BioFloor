import { Cta } from "@/components/common/cta";
import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { ArrowUpRight } from "lucide-react";

export function ContactUsSection(p: {
  contactSectionTitle: string;
  contactSectionDescription: string;
  contactSectionCta: string;
}) {
  return (
    <SectionWrapper>
      <SectionIntro
        title={p.contactSectionTitle}
        description={p.contactSectionDescription}
      />
      <div className="flex sm:justify-center">
        <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
          {p.contactSectionCta}
        </Cta>
      </div>
    </SectionWrapper>
  );
}
