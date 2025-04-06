// component for section description and section title that will merge them with proper gaps and responsiveness

import { SectionDescription } from "@/components/common/section/section-intro/description";
import { SectionTitle } from "@/components/common/section/section-intro/title";

interface SectionIntro {
  title: string;
  titleLight?: string;
  description: React.ReactNode;
}

export function SectionIntro({ title, titleLight, description }: SectionIntro) {
  return (
    <div className="flex flex-col gap-4 sm:items-center">
      <SectionTitle title={title} titleLight={titleLight} />
      <SectionDescription>{description}</SectionDescription>
    </div>
  );
}
