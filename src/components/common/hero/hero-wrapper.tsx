"use client";

import { default as NextImage } from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
  /** Controls the intensity of the mouse parallax effect (lower = subtler) */
  mouseParallaxStrength?: number;
  isBorderBottom?: boolean;
}

export function HeroWrapper({
  children,
  backgroundImage,
  imageClassName,
  insideImageClassName,
  parallaxStrength = 6,
  mouseParallaxStrength = 2,
  isBorderBottom = false,
}: HeroWrapperProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Create motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring physics for smooth movement
  const smoothMouseX = useSpring(mouseX, {
    damping: 50,
    stiffness: 400,
    mass: 1,
  });

  const smoothMouseY = useSpring(mouseY, {
    damping: 50,
    stiffness: 400,
    mass: 1,
  });

  // Transform the smooth mouse values to create parallax effect
  const backgroundMouseX = useTransform(
    smoothMouseX,
    [-1, 1],
    [mouseParallaxStrength * 15, -mouseParallaxStrength * 15]
  );

  const backgroundMouseY = useTransform(
    smoothMouseY,
    [-1, 1],
    [mouseParallaxStrength * 15, -mouseParallaxStrength * 15]
  );

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const offsetX = (e.clientX / width - 0.5) * 2; // -1 to 1
      const offsetY = (e.clientY / height - 0.5) * 2; // -1 to 1

      // Update motion values directly instead of using state
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Container that can grow with content */}
      <div className="relative w-full min-h-screen">
        {/* Fixed height background container */}
        <div className="absolute inset-0 h-screen w-full overflow-hidden">
          {/* Background image with parallax */}
          <motion.div
            ref={heroRef}
            style={{
              y: backgroundY,
              x: backgroundMouseX,
              translateY: backgroundMouseY,
              width: "110%",
              height: "125%",
              position: "absolute",
              left: "-5%", // Center the extra width
            }}
            className={cn(
              "z-0 -top-[55%] sm:-top-[65%] will-change-transform",
              imageClassName
            )}
          >
            <NextImage
              src={backgroundImage}
              alt="Background image"
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

          {/* Blur overlay - contained within the background height */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr sm:bg-gradient-to-r from-background/95 via-background/75 to-background/5 rounded-[500px] blur-xl w-[110%] sm:w-11/12 -left-[20%] sm:-left-[10%] -top-[25%] h-[150%] z-[1]"
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Border at the bottom of the viewport with animation */}
          {isBorderBottom && (
            <motion.div
              className={`absolute bottom-0 w-full border-b-4 border-green-300/55 z-[2]`}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            />
          )}
        </div>

        {/* Content container that can extend beyond viewport */}
        <motion.div
          className="relative z-[3] w-full px-6 sm:px-24 3xl:px-44"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
