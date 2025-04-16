"use client";

import { CompanyBrand } from "@/components/layout/company-brand";
import { ExternalLink } from "@/components/layout/footer/external-link";
import { FooterTitle } from "@/components/layout/footer/footer-title";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { LinkIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        dayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const separatorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const t = useTranslations("Footer");

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#F2E9DC] to-background relative mt-12 lg:mt-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Absolute footer top object */}
      <div className="absolute -top-[3%] lg:-top-[12%] w-full h-32">
        <Image
          src="/images/footer/footer-spacer.png"
          alt="Footer Spacer"
          fill
          className="object-cover object-top"
          unoptimized={true}
        />
      </div>

      <div className="py-16 px-6 sm:px-24 3xl:px-44 flex flex-col gap-16 z-10 relative">
        <motion.div variants={itemVariants}>
          <CompanyBrand />
        </motion.div>

        <motion.div variants={separatorVariants}>
          <Separator className="bg-gradient-to-r from-foreground to-foreground/25 py-[0.8px] rounded-full" />
        </motion.div>

        <motion.div
          className="w-full flex justify-between gap-16 flex-col lg:flex-row"
          variants={itemVariants}
        >
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <FooterTitle text={t("contactTitle")} icon={Phone} />
            <motion.ul
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                tel. +48 786 866 690
              </motion.li>
              <motion.li variants={itemVariants}>
                email: biuro@biofloor.pl
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="flex gap-x-16 gap-y-8 flex-col lg:flex-row"
            variants={itemVariants}
          >
            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              <FooterTitle text={t("localizationTitle")} icon={MapPin} />

              <motion.ul
                className="flex flex-col gap-4"
                variants={containerVariants}
              >
                <motion.li variants={itemVariants}>
                  {t("streetShortcut")} Szubińska 67
                </motion.li>
                <motion.li variants={itemVariants}>
                  Białe Błota, 86-005
                </motion.li>
                <motion.li variants={itemVariants}>Polska 🇵🇱</motion.li>
              </motion.ul>
            </motion.div>

            <ExternalLink
              href="https://maps.app.goo.gl/G4wJBoQg9b5nXLRCA"
              className="relative rounded-lg border-2 border-foreground/50 w-52 h-36 hover:scale-102 active:scale-98 transition-transform overflow-hidden"
            >
              <Image
                src="/images/footer/localization.png"
                alt={t("localizationTitle")}
                className="object-cover"
                fill
              />
            </ExternalLink>
          </motion.div>
        </motion.div>

        <motion.div variants={separatorVariants}>
          <Separator className="bg-gradient-to-l from-foreground to-foreground/25 py-[0.8px] rounded-full" />
        </motion.div>

        <motion.div
          className="w-full flex justify-between gap-16 flex-col lg:flex-row"
          variants={itemVariants}
        >
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <FooterTitle text={t("annotationTitle")} icon={LinkIcon} />
            <motion.ul
              className="flex flex-wrap flex-col lg:flex-row gap-x-12 gap-y-4 max-w-2xl"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                <Link href="/jak-stosowac">{t("howToUse")}</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/polityka-prywatnosci">{t("privacyPolicy")}</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/kontakt">{t("contact")}</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/logistyka-calosamochodowa">
                  {t("fullTruckloadLogistics")}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/prawa-autorskie">{t("copyright")}</Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <FooterTitle text={t("socialMediaTitle")} />
            <motion.ul
              className="flex gap-12 xl:justify-end"
              variants={containerVariants}
            >
              {[
                { href: "https://www.facebook.com/", icon: FaFacebook },
                { href: "https://www.instagram.com/", icon: FaInstagram },
                { href: "https://www.youtube.com/", icon: FaYoutube },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <ExternalLink href={item.href}>
                    <item.icon className="size-8" />
                  </ExternalLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div variants={separatorVariants}>
          <Separator className="bg-gradient-to-r from-foreground to-foreground/25 py-[0.8px] rounded-full" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          &copy; {new Date().getFullYear()} <b>BioFloor</b>
        </motion.p>
      </div>
    </motion.footer>
  );
}
