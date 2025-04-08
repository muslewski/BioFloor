"use client";

import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export function TableSection() {
  const tableRef = useRef(null);
  const isInView = useInView(tableRef, { once: true, amount: 0.2 });
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const tableData = [
    { type: "Brojler", season: "Lato", floor: "-", coverage: "2.4" },
    { type: "Brojler", season: "Zima", floor: "-", coverage: "3.2" },
    { type: "Indyk odchów", season: "Lato", floor: "Ciepła", coverage: "2.5" },
    { type: "Indyk odchów", season: "Lato", floor: "Zimna", coverage: "5.75" },
    { type: "Indyk odchów", season: "Zima", floor: "-", coverage: "5.85" },
    { type: "Indyk tucz", season: "Lato", floor: "-", coverage: "6.65" },
    { type: "Indyk tucz", season: "Zima", floor: "-", coverage: "8.45" },
    {
      type: "Kura noska (wolny wybieg)",
      season: "Lato",
      floor: "-",
      coverage: "1.5",
    },
    {
      type: "Kura noska (wolny wybieg)",
      season: "Zima",
      floor: "-",
      coverage: "2.5",
    },
  ];

  // Animation variants for smooth, organized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1,
      },
    }),
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.05,
      },
    }),
  };

  return (
    <SectionWrapper>
      <SectionIntro
        className="max-w-3xl"
        title="Rekomendowane wartości"
        description="W tabeli poniżej zebraliśmy sugerowane wartości pokrycia ściółki dla kurników. Uwzględniają one typ drobiu oraz specyfikę podłogi i sezonu."
      />

      <div className="relative w-full">
        {/* Decorative background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="w-full p-8 bg-gradient-to-br from-background to-background/95 border border-foreground/15 rounded-xl shadow-lg backdrop-blur-sm relative overflow-hidden"
        >
          {/* Table header decoration */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40"
          />

          <motion.div
            ref={tableRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="min-w-full overflow-x-auto"
          >
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-foreground/30">
                  {[
                    "Typ Drobiu",
                    "Sezon",
                    "Typ podłogi",
                    "Pokrycie (kg/m)²",
                  ].map((header, index) => (
                    <motion.th
                      key={index}
                      custom={index}
                      variants={headerVariants}
                      className="py-5 px-6 font-bold text-foreground tracking-wider text-lg"
                    >
                      <div className="flex flex-col">
                        <span className="text-nowrap">{header}</span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "2rem" } : { width: 0 }}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            duration: 0.4,
                          }}
                          className="h-[3px] bg-primary/70 rounded-full mt-2"
                        />
                      </div>
                    </motion.th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    custom={rowIndex}
                    variants={rowVariants}
                    onMouseEnter={() => setHoveredRow(rowIndex)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`relative border-b border-foreground/10 transition-all duration-200 ${
                      hoveredRow === rowIndex ? "bg-foreground/5" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-medium">{row.type}</td>
                    <td className="py-4 px-6">
                      <span className="py-1 px-3 rounded-full text-sm bg-foreground/10 font-medium">
                        {row.season}
                      </span>
                    </td>
                    <td className="py-4 px-6">{row.floor}</td>
                    <td className="py-4 px-6">
                      <motion.div
                        className="flex items-center justify-start space-x-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <span className="font-semibold text-primary">
                          {row.coverage}
                        </span>
                        <span className="text-foreground/60 text-sm">
                          kg/m²
                        </span>
                      </motion.div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
