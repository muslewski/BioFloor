"use client";

import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BrownCardProps {
  title: string;
  description?: string | React.ReactNode;
  /** For example list */
  customElement?: React.ReactNode;
  /** Icon can be string or LucideIcon */
  icon: string | LucideIcon;
}

export function BrownCard({
  title,
  description,
  icon,
  customElement,
}: BrownCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4 rounded-xl border-l-2 border-foreground px-8 py-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/2 to-transparent" />

      <div className="flex gap-4 items-center relative z-10">
        {typeof icon === "string" ? (
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={
              isInView ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }
            }
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Image src={icon} alt={`${title} icon`} width={48} height={48} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={
              isInView ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }
            }
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            {React.createElement(icon, {
              className: "size-8 sm:size-12 text-foreground/75",
            })}
          </motion.div>
        )}
        <h3>{title}</h3>
      </div>
      {description && <p className="relative z-10">{description}</p>}
      {customElement && (
        <div className="paragraph relative z-10">{customElement}</div>
      )}
    </motion.div>
  );
}
