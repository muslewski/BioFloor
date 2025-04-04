"use client";

// Rounded button with two variant and framer motion for sure,  one will be filled and one outlined, optionall icon

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CtaProps {
  children: React.ReactNode;
  /** Maybe Image or Lucide Icon etc */
  icon?: React.ReactNode;
  /** Button variant - 'filled' or 'outlined', defaults to 'filled' */
  variant?: "filled" | "outlined";
}

export function Cta({ children, icon, variant = "filled" }: CtaProps) {
  return (
    <Button className="w-fit rounded-full px-8 py-8" variant={variant}>
      <div className="flex items-center gap-2 button">
        {children}
        {icon && (
          <motion.div
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {icon}
          </motion.div>
        )}
      </div>
    </Button>
  );
}
