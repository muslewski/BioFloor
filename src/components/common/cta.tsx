"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentProps, useState } from "react";

type LinkHrefType = ComponentProps<typeof Link>["href"];

interface CtaProps {
  children: React.ReactNode;
  /** Maybe Image or Lucide Icon etc */
  icon?: React.ReactNode;
  /** Button variant - 'filled' or 'outlined', defaults to 'filled' */
  variant?: "filled" | "outlined";
  className?: string;
  href: LinkHrefType;
}

export function Cta({
  children,
  icon,
  variant = "filled",
  href,
  className,
}: CtaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      className={cn(
        "w-fit h-fit rounded-full px-8 py-5 text-base sm:text-lg",
        className
      )}
      variant={variant}
      asChild
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-2 select-none touch-none h-fit"
        draggable={false}
        style={{ WebkitTouchCallout: "none" }}
      >
        <span className="select-none touch-none text-wrap h-fit">
          {children}
        </span>
        {icon && (
          <motion.div
            initial={{ x: -5, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: isHovered ? 1.1 : 1,
              translateX: isHovered ? 3 : 0,
            }}
            transition={{
              delay: 0.1,
              scale: { duration: 0.2 },
              translateX: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            {icon}
          </motion.div>
        )}
      </Link>
    </Button>
  );
}
