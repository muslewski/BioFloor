"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
  preview?: boolean;
  ratio?: number;
  isBorder?: boolean;
  magnifier?: boolean;
  magnifierSize?: number;
  magnifierZoom?: number;
}

export const SectionImage = ({
  src,
  alt,
  className = "",
  preview = false,
  ratio = 16 / 9,
  isBorder = false,
  magnifier = false,
  magnifierSize = 150,
  magnifierZoom = 2.5,
}: SectionImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  const imageVariants = {
    hidden: { scale: 1.2 },
    visible: {
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (imageRef.current && magnifier) {
      const img = imageRef.current.querySelector("img");
      if (img) {
        const updateSize = () => {
          const { width, height } = img.getBoundingClientRect();
          setSize([width, height]);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
      }
    }
  }, [magnifier, isInView]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnifier || !imageRef.current) return;

    const elem = imageRef.current;
    const { left, top } = elem.getBoundingClientRect();

    // Get cursor position relative to the image
    const x = e.clientX - left;
    const y = e.clientY - top;

    setXY([x, y]);
  };

  const handleMouseEnter = () => {
    if (magnifier) setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    if (magnifier) setShowMagnifier(false);
  };

  return (
    <>
      <AspectRatio
        ratio={ratio}
        className={cn(
          "overflow-hidden rounded-lg shadow-md relative",
          isBorder && "border-2 border-green-300",
          className
        )}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="h-full w-full"
        >
          <div
            ref={imageRef}
            className="relative h-full w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={() => preview && setIsOpen(true)}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={cn(
                "object-cover transition-transform duration-700 scale-105 hover:scale-110",
                preview && "cursor-pointer"
              )}
            />
            {showMagnifier && magnifier && (
              <div
                style={{
                  position: "absolute",
                  top: `${y - magnifierSize / 2}px`,
                  left: `${x - magnifierSize / 2}px`,
                  width: `${magnifierSize}px`,
                  height: `${magnifierSize}px`,
                  backgroundImage: `url('${src}')`,
                  backgroundPosition: `${
                    -x * magnifierZoom + magnifierSize / 2
                  }px ${-y * magnifierZoom + magnifierSize / 2}px`,
                  backgroundSize: `${imgWidth * magnifierZoom}px ${
                    imgHeight * magnifierZoom
                  }px`,
                  backgroundRepeat: "no-repeat",
                  border: "2px solid white",
                  borderRadius: "50%",
                  boxShadow: "0 3px 15px rgba(0,0,0,0.3)",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              />
            )}
          </div>
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
              className="object-contain"
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
