"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string | React.ReactNode;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  //   Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!mounted) return null;
  return (
    <div className="mx-auto max-w-7xl px-4 lg:py-20 font-sans antialiased md:w-full md:px-8 lg:px-12">
      <div className="relative flex gap-16 flex-col sm:flex-row w-full">
        <div>
          <div className="relative h-80 w-80 max-w-sm">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom md:max-w-md"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between py-4 w-full">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3>{testimonials[active].name}</h3>
            <p className="text-sm text-foreground/50">
              {testimonials[active].designation}
            </p>
            <motion.div className="mt-4 text-foreground/75b max-w-full">
              <motion.div
                initial={{
                  filter: "blur(8px)",
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="[&_ul]:list-inside [&_ul]:list-disc  text-base 3xl:text-lg text-muted-foreground leading-relaxed"
              >
                {testimonials[active].quote}
              </motion.div>
            </motion.div>
          </motion.div>
          {testimonials.length > 1 && (
            <div className="flex gap-6 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button flex size-8 items-center justify-center rounded-full bg-foreground/5 hover:scale-105 active:scale-95 transition-transform"
              >
                <IconArrowLeft className="size-6 text-foreground/75 transition-transform duration-300 group-hover/button:rotate-12" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex size-8 items-center justify-center rounded-full bg-foreground/5 hover:scale-105 active:scale-95 transition-transform"
              >
                <IconArrowRight className="size-6 text-foreground/75 transition-transform duration-300 group-hover/button:-rotate-12" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
