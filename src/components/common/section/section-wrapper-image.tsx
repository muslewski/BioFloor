"use client";

// component that accept children and have proper padding and maybe something like optional border bottom for great horizontal line
// for mobile proper padding-y
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  SvgWavyLineBottom,
  SvgWavyLineTop,
} from "@/components/common/section/svg-lines";
import { cn } from "@/lib/utils";

// optional backgroundImage that will have effect fixed with framer motion
// if backgroundImage is passed than we also need to have this white blurred glow for better contrast

interface SectionWrapperProps {
  children: React.ReactNode;
  backgroundImage: string;
  /** className for motion.div that controls appearance of background image */
  imageClassName?: string;
  /** Controls the intensity of the parallax effect (lower = subtler) */
  parallaxStrength?: number;
}

export function SectionWrapperImage({
  children,
  backgroundImage,
  imageClassName,
  parallaxStrength = 4,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Set up scroll-based animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform the scroll progress into a value for the y position of the background
  // Lower values for parallaxStrength create a subtler, slower movement
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, parallaxStrength * 100]
  );

  return (
    <div className="w-full relative flex justify-center overflow-hidden">
      <div className="w-full px-6 sm:px-24 3xl:px-44 py-38 relative z-10 flex flex-col gap-16 sm:gap-24">
        {children}
      </div>

      {/* Absolute Background Image */}
      {backgroundImage && (
        <>
          <div className="w-full z-20 -top-[0.5px] absolute">
            <SvgWavyLineTop />
          </div>

          {/* Adding a blur overlay for better contrast with content */}
          <div className="absolute inset-0 bg-gradient-to-r  via-background/50 backdrop-blur-xs z-[1]" />

          <motion.div
            ref={sectionRef}
            style={{
              y: backgroundY,
              width: "100%",
              height: "120%", // Extra height to allow movement without showing edges
              position: "absolute",
            }}
            className={cn("z-0", imageClassName)}
          >
            <Image
              src={backgroundImage}
              alt="Background Image"
              className="object-cover"
              fill
              priority
              sizes="100vw"
            />
          </motion.div>

          <div className="w-full z-20 -bottom-[0.5px]  absolute">
            <SvgWavyLineBottom />
          </div>
        </>
      )}
    </div>
  );
}
