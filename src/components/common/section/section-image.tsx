"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
  preview?: boolean;
  ratio?: number;
}

export const SectionImage = ({
  src,
  alt,
  className = "",
  preview = false,
  ratio = 16 / 9,
}: SectionImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const imageVariants = {
    hidden: { scale: 1.2 },
    visible: {
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      <AspectRatio
        ratio={ratio}
        className={cn("overflow-hidden rounded-lg shadow-md", className)}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={cn(
              "object-cover transition-transform duration-700 scale-105 hover:scale-110",
              preview && "cursor-pointer"
            )}
            onClick={() => preview && setIsOpen(true)}
          />
        </motion.div>
      </AspectRatio>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="p-4 sm:p-6 md:p-10 bg-gradient-to-r from-background/55 to-background/25 backdrop-blur-sm max-w-[90vw] min-w-fit max-h-[90vh]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogTitle className="sr-only">
            {`Image preview: ${alt}`}
          </DialogTitle>
          <div className="relative w-[90vw] h-[60vh] sm:w-[80vw] sm:h-[70vh] md:w-[70vw] md:h-[75vh] lg:w-[60vw] lg:h-[80vh] xl:w-[50vw] rounded-xl p-3 sm:p-6 md:p-12 overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              quality={100}
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 60vw, 50vw"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
