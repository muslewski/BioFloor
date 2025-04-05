"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

// Extract the href prop type from the Link component
type LinkHrefType = ComponentProps<typeof Link>["href"];

interface LinkItemProps {
  href: LinkHrefType;
  children: React.ReactNode;
  active?: boolean;
}

export function LinkItem({
  href,
  children,
  active = false,
  ...props
}: LinkItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "h-fit w-fit text-nowrap text-base text-muted-foreground leading-relaxed py-2 px-4 border-b-2 rounded-none border-transparent duration-200 ease-in-out transition-all hover:border-foreground/15",
        active && "border-foreground/45 rounded-md"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
