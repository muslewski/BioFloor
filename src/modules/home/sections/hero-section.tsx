"use client";

import { Cta } from "@/components/common/cta";
import { HeroIntro } from "@/components/common/hero/hero-intro/intro";
import { HomepageWrapper } from "@/modules/home/components/homepage-wrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
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
        title="Ściółka, która dba o Twoją hodowlę."
        titleDecorator={
          <>
            {/* Decorator Desktop Version */}
            <motion.div
              className="hidden sm:block absolute -left-9 top-19 w-77 h-6"
              initial="hidden"
              animate="visible"
              variants={decoratorVariants}
            >
              <Image src="/images/home/green-line.svg" alt="Green Line" fill />
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
                alt="Green Line"
                fill
              />
            </motion.div>
          </>
        }
        description={
          <span className="bg-background/75 backdrop-blur-xs pr-2 py-1 rounded-md">
            Zdrowe ptaki, czystsze kurniki, większa efektywność hodowli - to
            wszystko zaczyna się od odpowiedniego podłoża. BioFloor to
            nowoczesna ściółka słonecznikowa, która łączy wysoką chłonność,
            higienę i wartość odżywczą, zapewniając komfort ptakom i
            oszczędności hodowcom.
          </span>
        }
        ctaButtons={
          <>
            <Cta icon={<ArrowUpRight className="size-5" />}>Zamów próbkę</Cta>
            <Cta variant="outlined">Zobacz ofertę</Cta>
          </>
        }
        className="max-w-2xl"
      />

      {/* Bedding Desktop */}
      <div className="hidden xl:block absolute right-0 w-5xl 2xl:w-7xl h-full">
        <Image
          src="/images/home/bedding.png"
          className="object-cover"
          alt="Poultry Bedding"
          priority
          fill
        />
      </div>

      {/* Bedding Mobile */}
      <div className="block xl:hidden absolute right-0 bottom-0 w-xl h-1/2 lg:h-2/3 rotate-0">
        <Image
          src="/images/home/bedding-mobile.png"
          className="object-contain object-bottom-right"
          alt="Poultry Bedding"
          priority
          fill
        />
      </div>
    </HomepageWrapper>
  );
}
