"use client";

import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ComponentProps, useState } from "react";

type LinkHrefType = ComponentProps<typeof Link>["href"];

interface CtaProps {
  children: React.ReactNode;
  /** Maybe Image or Lucide Icon etc */
  icon?: React.ReactNode;
  /** Button variant - 'filled' or 'outlined', defaults to 'filled' */
  variant?: "filled" | "outlined";
  href: LinkHrefType;
}

export function Cta({ children, icon, variant = "filled", href }: CtaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CoolMode options={{ particle: "/images/pellet.png" }}>
      <Button
        className="w-fit rounded-full px-8 py-8 text-base sm:text-lg"
        variant={variant}
        asChild
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={href} className="flex items-center gap-2">
          {children}
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
    </CoolMode>
  );
}
