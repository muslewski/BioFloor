"use client";

import { Button } from "@/components/ui/button";
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
    <Button
      variant="customLink"
      className={cn("h-fit w-fit", active && "border-foreground/45 rounded-md")}
      asChild
    >
      <Link href={href} {...props}>
        {children}
      </Link>
    </Button>
  );
}
