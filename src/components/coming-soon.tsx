"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const ComingSoon: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>BioFloor - Strona w budowie</title>
        <meta
          name="description"
          content="BioFloor - nowoczesna ściółka słonecznikowa dla drobiu. Strona w budowie."
        />
      </Head>

      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden">
          {/* Construction notification overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white/90 p-8 rounded-lg max-w-2xl mx-auto shadow-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold text-[#1A0E02] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Strona jest w budowie
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Pracujemy nad nową, lepszą wersją naszej strony internetowej.
                Zapraszamy wkrótce!
              </motion.p>
              <div className="flex space-x-2 justify-center items-center">
                <motion.div
                  className="w-3 h-3 bg-amber-400 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-amber-600 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-[#1A0E02] rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                ></motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-lg mb-4 text-white">
                Chcesz się z nami skontaktować?
              </p>
              <a
                href="mailto:biuro@biofloor.pl"
                className="inline-block px-6 py-2 bg-[#1A0E02] text-white rounded-lg hover:bg-amber-800 transition-colors"
              >
                biuro@biofloor.pl
              </a>
            </motion.div>
          </motion.div>

          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <motion.div
              className="absolute -right-16 -top-16 w-64 h-64 bg-amber-200 rounded-full opacity-50"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1, 0.8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute left-16 bottom-32 w-40 h-40 bg-amber-300 rounded-full opacity-40"
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5,
              }}
            ></motion.div>
            <motion.div
              className="absolute left-1/2 top-1/4 w-24 h-24 bg-amber-500 rounded-full opacity-30"
              initial={{ scale: 0.7 }}
              animate={{ scale: [0.7, 1, 0.7] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
          </div>

          {/* Main content (blurred behind overlay) */}
          <div className="container mx-auto px-6 text-center relative z-5">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-[#1A0E02] mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Ściółka, która dba o Twoją hodowlę.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zdrowe ptaki, czystsze kurniki, większa efektywność hodowli – to
              wszystko zaczyna się od odpowiedniego podłoża. BioFloor to
              nowoczesna ściółka słonecznikowa, która łączy wysoką chłonność,
              higienę i wartość odżywczą, zapewniając komfort ptakom i
              oszczędności hodowcom.
            </motion.p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A0E02] text-white py-4 text-center text-sm mt-auto z-20">
          <p>© {currentYear} BioFloor. Wszystkie prawa zastrzeżone.</p>
        </footer>
      </main>
    </>
  );
};

export default ComingSoon;
