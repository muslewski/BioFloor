"use client";

import { motion } from "framer-motion";
import { Search, Leaf, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound.Page");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-green-300" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-200" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Leaf className="h-12 w-12 text-foreground/50 mr-3" />
            </motion.div>
            <h1 className="text-4xl font-bold text-muted-foreground">
              BioFloor
            </h1>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* 404 Number */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="text-9xl font-extrabold text-foreground opacity-10 select-none">
                404
              </div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="p-5 bg-amber-100 rounded-full">
                  <Search className="h-12 w-12 text-amber-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-3"
          >
            <Card className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-90 p-8 w-fit shadow-xl rounded-2xl border-t border-l border-white border-opacity-40">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t("h2")}
              </h2>

              <p className="text-gray-600 mb-8 text-lg">{t("p")}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" passHref>
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-5 py-6 rounded-xl transition-all duration-300 hover:shadow-md text-base">
                    <Home className="h-5 w-5" />
                    {t("link1")}
                  </Button>
                </Link>

                <Link href="/oferta" passHref>
                  <Button
                    variant="secondary"
                    className="border-green-600 text-green-600 hover:bg-green-50 flex items-center gap-2 px-5 py-6 rounded-xl transition-all duration-300 hover:shadow-md text-base"
                  >
                    {t("link2")}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer with product info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-full shadow-sm">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-semibold">
              {t("productInfo1")}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-3">{t("productInfo2")}</p>
        </motion.div>
      </div>
    </div>
  );
}
