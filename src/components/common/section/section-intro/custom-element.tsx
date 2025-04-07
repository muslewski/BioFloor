// basically paragraph for section title h2.
// or list or some custom component
// it should be capable of proper responsiveness and maybe managing alignment of text, and in the future some framer motion

import { cn } from "@/lib/utils";

interface SectionCustomElementProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export function SectionCustomElement({
  children,
  align = "center",
}: SectionCustomElementProps) {
  return (
    <div
      className={cn("relative paragraph", {
        "sm:text-center self-center": align === "center",
        "sm:text-left self-start": align === "left",
        "sm:text-right self-end": align === "right",
      })}
    >
      {children}
    </div>
  );
}
