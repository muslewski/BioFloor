import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";

interface GreenCardProps {
  Icon: LucideIcon | string;
  title: string | React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export function GreenCard({
  Icon,
  title,
  description,
  className,
}: GreenCardProps) {
  return (
    <div className={cn("border border-green-300 p-8 rounded-xl flex flex-col gap-3 bg-gradient-to-r from-background/75 to-background/45 backdrop-blur-sm", className)}>
      {typeof Icon === "string" ? (
        <Image
          src={Icon}
          alt="icon"
          width={32}
          height={32}
          className="size-8 sm:size-12"
        />
      ) : (
        <Icon className="size-8 sm:size-12" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
