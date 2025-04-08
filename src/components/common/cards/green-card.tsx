import { type LucideIcon } from "lucide-react";

interface GreenCardProps {
  Icon: LucideIcon;
  title: string;
  description: React.ReactNode;
}

export function GreenCard({ Icon, title, description }: GreenCardProps) {
  return (
    <div className="border border-green-300 p-8 rounded-xl flex flex-col gap-3 bg-gradient-to-r from-background/75 to-background/45 backdrop-blur-sm">
      <Icon className="size-8 sm:size-12" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
