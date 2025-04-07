"use client";

// takes 100 vh
// display beautiful image
// white blur on screen before text for better contrast
// with little fixed animation from framer motion

import { default as NextImage } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroWrapperProps {
  children: React.ReactNode;
  backgroundImage: string;
  /** className for motion.div that controls appearance of background image */
  imageClassName?: string;
  /** className for image object */
  insideImageClassName?: string;
  /** Controls the intensity of the parallax effect (lower = subtler) */
  parallaxStrength?: number;
  isBorderBottom?: boolean;
}

export function HeroWrapper({
  children,
  backgroundImage,
  imageClassName,
  insideImageClassName,
  parallaxStrength = 6,
  isBorderBottom = false,
}: HeroWrapperProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Set up scroll-based animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Transform the scroll progress into a value for the y position of the background
  // Lower values for parallaxStrength create a subtler, slower movement
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, parallaxStrength * 100]
  );

  // Ensure image is preloaded before page hydration
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);

    // If the image is already cached, it might not trigger onload
    if (img.complete) setImageLoaded(true);

    // Cleanup function to remove the image onload handler when component unmounts
    return () => {
      img.onload = null;
    };
  }, [backgroundImage]);

  return (
    <div
      className={cn(
        "w-full relative min-h-screen flex items-center max-h-screen overflow-hidden",
        isBorderBottom && "border-b-4 border-green-300/55"
      )}
    >
      <div className="w-full px-6 sm:px-24 3xl:px-44 relative z-10">
        {children}
      </div>

      {/* Adding a blur overlay for better contrast with content */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr sm:bg-gradient-to-r from-background/95 via-background/75 to-background/5 rounded-[500px] blur-xl w-[110%] sm:w-11/12 -left-[20%] sm:-left-[10%] -top-[25%] h-[150%] z-[1]"
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      />

      <motion.div
        ref={heroRef}
        style={{
          y: backgroundY,
          width: "100%",
          height: "125%", // Extra height to allow movement without showing edges
          position: "absolute",
        }}
        className={cn(
          "z-0 -top-[55%] sm:-top-[60%] will-change-transform",
          imageClassName
        )}
      >
        <NextImage
          src={backgroundImage}
          alt="Background Image"
          className={cn(
            "object-cover transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0",
            insideImageClassName
          )}
          fill
          priority
          sizes="100vw"
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </motion.div>
    </div>
  );
}
