// similiar to section wrapper image but without use client for better resource management

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  isBorderBottom?: boolean;
}

export function SectionWrapper({
  children,
  isBorderBottom = false,
}: SectionWrapperProps) {
  return (
    <div
      className={cn(
        "w-full relative flex justify-center",
        isBorderBottom && "border-b-4 border-green-300/15"
      )}
    >
      <div className="w-full px-6 sm:px-24 3xl:px-44 py-38 z-10 flex flex-col gap-16 sm:gap-24">
        {children}
      </div>
    </div>
  );
}
