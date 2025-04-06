// component for section description and section title that will merge them with proper gaps and responsiveness

import { SectionDescription } from "@/components/common/section/section-intro/description";
import { SectionTitle } from "@/components/common/section/section-intro/title";
import { cn } from "@/lib/utils";

interface SectionIntro {
  title: string;
  titleLight?: string;
  description: React.ReactNode;
  align?: "left" | "center" | "right";
}

export function SectionIntro({
  title,
  titleLight,
  description,
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
    </div>
  );
}
