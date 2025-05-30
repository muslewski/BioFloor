"use client";

import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HomepageWrapper } from "@/modules/home/components/homepage-wrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "use-intl";

export function HeroSection(p: {
  title: string;
  description: string;
  cta1: string;
  cta2: string;
  chickenImageAlt: string;
  beddingImageAlt: string;
  productTextImageAlt: string;
  GreenLineImageAlt: string;
}) {
  const t = useTranslations("Home.Page.Client");

  // Animation variants for the decorator lines
  const decoratorVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.1,
      },
    },
  };

  return (
    <HomepageWrapper>
      <HeroIntro
        title={p.title}
        titleDecorator={
          <>
            {/* Decorator Desktop Version */}
            <motion.div
              className="hidden sm:block absolute -left-9 top-19 w-77 h-6"
              initial="hidden"
              animate="visible"
              variants={decoratorVariants}
            >
              <Image
                src="/images/home/green-line.svg"
                alt={p.GreenLineImageAlt}
                fill
              />
            </motion.div>

            {/* Decorator Mobile Version */}
            <motion.div
              className="block sm:hidden absolute -left-2.5 top-8 w-36 h-6"
              initial="hidden"
              animate="visible"
              variants={decoratorVariants}
            >
              <Image
                src="/images/home/green-line-mobile.svg"
                alt={p.GreenLineImageAlt}
                fill
              />
            </motion.div>
          </>
        }
        description={
          <span className="bg-background/75 backdrop-blur-xs pr-2 py-1 rounded-md">
            {p.description}
          </span>
        }
        ctaButtons={
          <>
            <Cta href="/kontakt" icon={<ArrowUpRight className="size-5" />}>
              {p.cta1}
            </Cta>
            <Cta href="/oferta" variant="outlined">
              {p.cta2}
            </Cta>
          </>
        }
        className="max-w-3xl z-20"
      />

      {/* Animation Object */}
      <div className="absolute right-0 xl:right-24 z-30 bottom-0 h-60 xl:h-140 w-full xl:w-[500px] pointer-events-none">
        {/* Product text */}
        <div className="relative top-24 xl:top-0 left-8 sm:left-1/3 xl:left-0 h-34 z-40 w-fit xl:w-full">
          <motion.div
            className="absolute top-0 xl:top-20 right-0 left-0 h-32 xl:h-96 z-30 w-36 sm:w-full"
            initial={{ opacity: 0, zIndex: 10 }}
            animate={{
              opacity: [0, 1, 1, 0, 0, 0, 0],
              scale: [0.9, 1, 1.02, 0.98, 0.95, 0.98, 1],
              rotate: [1, 0, -0.5, 0.5, 0, -0.2, 0],
            }}
            transition={{
              duration: 10,
              delay: 2,
            }}
          >
            <Image
              src="/images/home/podlapki.png"
              fill
              className="object-contain z-10"
              alt={p.productTextImageAlt}
            />
          </motion.div>

          {/* Product Gold Text */}
          <motion.div
            className="relative h-24 w-36 sm:w-full"
            initial={{ opacity: 0, zIndex: 10 }}
            animate={{
              opacity: [0, 0, 0, 0, 0, 0, 1],
              scale: [0.9, 1, 1.02, 0.98, 0.95, 0.98, 1],
              rotate: [1, 0, -0.5, 0.5, 0, -0.2, 0],
            }}
            transition={{
              duration: 10,
              delay: 2,
            }}
          >
            <Image
              src="/images/home/podlapki.png"
              fill
              className="object-contain z-10"
              alt={p.productTextImageAlt}
            />
          </motion.div>
          <motion.h3
            className="text-black text-center relative z-20 bottom-4 sm:bottom-0"
            initial={{ opacity: 0, zIndex: 10 }}
            animate={{
              opacity: [0, 0, 0, 0, 0, 0, 1],
            }}
            transition={{
              duration: 10,
              delay: 2,
            }}
          >
            {t("h3")}
          </motion.h3>
          {/* Background Blur for text */}
          <motion.div
            className="absolute top-0 w-full h-full bg-white blur-3xl rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0, 0, 0, 1],
              translateY: [200, 200, 200, 200, 0, 0, 0],
              scale: [0.8, 1.1, 1.2, 1, 0.9, 0.95, 1],
            }}
            transition={{
              duration: 10,
              delay: 2,
            }}
          />
        </div>

        {/* Product Chicken */}
        <div className="relative z-30 bottom-34 h-full user">
          <motion.div
            className="w-[200px] sm:w-[300px] right-0 sm:right-0 xl:w-full h-64 sm:h-96 absolute bottom-0"
            initial={{ opacity: 0, zIndex: 10 }}
            animate={{ opacity: [0, 0, 0, 0, 0, 0, 1] }}
            transition={{
              duration: 10,
              delay: 2,
            }}
          >
            <Image
              src="/images/home/chicken.png"
              fill
              className="object-contain object-bottom z-10"
              alt={p.chickenImageAlt}
            />
          </motion.div>
        </div>
      </div>

      {/* Bedding Desktop */}
      <div className="hidden xl:block absolute right-0 w-5xl 2xl:w-7xl h-full">
        <Image
          src="/images/home/bedding.png"
          className="object-cover"
          alt={p.beddingImageAlt}
          priority
          fill
        />
      </div>
      {/* Bedding Mobile */}
      <div className="block xl:hidden absolute right-0 bottom-0 w-xl h-1/2 lg:h-2/3 rotate-0">
        <Image
          src="/images/home/bedding-mobile.png"
          className="object-contain object-bottom-right"
          alt={p.beddingImageAlt}
          priority
          fill
        />
      </div>
    </HomepageWrapper>
  );
}
