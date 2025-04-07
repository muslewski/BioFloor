// basically h2, title for sections, maybe some dope animation and optionall ability to have h2-light after h2 text from new line

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string | React.ReactNode;
  /** h2 that will be lighter and smaller */
  titleLight?: string | React.ReactNode;
  /** absolute object like green wavy line*/
  decorator?: React.ReactNode;
  /** controls text alignment */
  align?: "left" | "center" | "right";
}

export function SectionTitle({
  title,
  titleLight,
  decorator,
  align = "center",
}: SectionTitleProps) {
  return (
    <h2
      className={cn("relative", {
        "sm:text-center self-center": align === "center",
        "sm:text-left self-start": align === "left",
        "sm:text-right self-end": align === "right",
      })}
    >
      {title}
      {titleLight && <span className="h2-light block">{titleLight}</span>}
      {decorator}
    </h2>
  );
}
