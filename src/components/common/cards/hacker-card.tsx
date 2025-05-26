"use client";

import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

interface BrownCardProps {
  title: string;
  description: string | React.ReactNode;
  /** Icon can be string or LucideIcon */
  icon: string | LucideIcon;
}

export function HackerCard({ title, description, icon }: BrownCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4 rounded-xl border-1 border-green-500/50 px-8 py-8 relative overflow-hidden inset-shadow inset-t-24 h-fit group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)" }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient that moves on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-green-300/10 to-transparent"
        whileHover={{ opacity: 0.8 }}
        animate={{
          background: isInView
            ? "linear-gradient(to top left, rgba(34, 197, 94, 0.1), transparent)"
            : "none",
        }}
      />

      {/* Light shimmer effect */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            className="absolute inset-0 bg-white/5 skew-x-12 translate-x-full"
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            exit={{ left: "200%" }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />
        )}
      </AnimatePresence>

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
            <Image src={icon} alt={`${title}`} width={48} height={48} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={
              isInView ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }
            }
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="text-green-500"
          >
            {React.createElement(icon, { className: "size-8 sm:size-12" })}
          </motion.div>
        )}
        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h3>
      </div>
      <motion.p
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {description}
      </motion.p>

      {/* Border glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
