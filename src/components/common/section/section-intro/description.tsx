// basically paragraph for section title h2.
// or list or some custom component
// it should be capable of proper responsiveness and maybe managing alignment of text, and in the future some framer motion

import { cn } from "@/lib/utils";

interface SectionDescriptionProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export function SectionDescription({
  children,
  align = "center",
}: SectionDescriptionProps) {
  return (
    <p
      className={cn("relative", {
        "sm:text-center self-center": align === "center",
        "sm:text-left self-start": align === "left",
        "sm:text-right self-end": align === "right",
      })}
    >
      {children}
    </p>
  );
}
