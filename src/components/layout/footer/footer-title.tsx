import { type LucideIcon } from "lucide-react";

interface FooterTitleProps {
  icon?: LucideIcon;
  text: string;
}

export function FooterTitle({ icon: Icon, text }: FooterTitleProps) {
  return (
    <div className="flex items-center bg gap-4">
      {Icon && <Icon className="size-8 text-foreground/75" strokeWidth={2.3} />}
      <p className="font-semibold text-lg">{text}</p>
    </div>
  );
}
