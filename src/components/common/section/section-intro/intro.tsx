// component for section description and section title that will merge them with proper gaps and responsiveness

import { SectionCustomElement } from "@/components/common/section/section-intro/custom-element";
import { SectionDescription } from "@/components/common/section/section-intro/description";
import { SectionTitle } from "@/components/common/section/section-intro/title";
import { cn } from "@/lib/utils";

interface SectionIntro {
  title: string | React.ReactNode;
  titleLight?: string | React.ReactNode;
  description?: React.ReactNode;
  /** For example list */
  customElement?: React.ReactNode;
  align?: "left" | "center" | "right";
}

export function SectionIntro({
  title,
  titleLight,
  description,
  customElement,
  align = "center",
}: SectionIntro) {
  return (
    <div
      className={cn("relative flex flex-col gap-4", {
        "sm:text-center self-center": align === "center",
        "sm:text-left self-start": align === "left",
        "sm:text-right self-end": align === "right",
      })}
    >
      <SectionTitle title={title} titleLight={titleLight} align={align} />
      <SectionDescription align={align}>{description}</SectionDescription>
      {customElement && (
        <SectionCustomElement align={align}>
          {customElement}
        </SectionCustomElement>
      )}
    </div>
  );
}
