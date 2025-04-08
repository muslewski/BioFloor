"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CalculatorIcon, DownloadIcon, RefreshCwIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { handleDownloadCalculatorPDF } from "@/modules/jak-stosowac/components/calculator-pdf";

export function Calculator() {
  const [showResult, setShowResult] = useState(false);
  const [calculationResult, setCalculationResult] = useState({
    area: 0,
    requiredKg: 0,
    thickness: 0,
  });

  const formSchema = z.object({
    thickness: z.coerce.number().min(0.01, "Value must be at least 0.01"),
    area: z.coerce.number().min(0.01, "Value must be at least 0.01"),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      thickness: 0,
      area: 0,
    },
  });

  function onSubmit(data: FormValues) {
    const { thickness, area } = data;

    // 3kg/m² for 1cm of thickness
    const requiredKg = thickness * area * 3;
    setCalculationResult({ area, requiredKg, thickness });
    setShowResult(true);
  }

  function handleReset() {
    setShowResult(false);
    form.reset();
  }

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="p-16 w-fit rounded-xl border-2 border-foreground border-dashed bg-gradient-to-r from-background/75 to-background/45 backdrop-blur-sm max-w-full sm:max-w-3xl overflow-hidden">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="calculator-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            layout
          >
            <Form {...form}>
              <motion.form
                onSubmit={form.handleSubmit(onSubmit)}
                className="gap-4 sm:gap-16 flex flex-col sm:flex-row items-start"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="thickness"
                    render={({ field }) => (
                      <FormItem className="max-w-3xs">
                        <FormLabel>Grubość ściółki (cm)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                            onInput={(e) => {
                              const value = e.currentTarget.value;
                              if (value.includes(".")) {
                                const [integer, decimal] = value.split(".");
                                if (decimal.length > 2) {
                                  const formattedValue = `${integer}.${decimal.slice(
                                    0,
                                    2
                                  )}`;
                                  e.currentTarget.value = formattedValue;
                                  field.onChange(parseFloat(formattedValue));
                                }
                              }
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Pamiętaj, że większe ptaki, potrzebują dwa razy
                          grubszej ściółki.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem className="max-w-3xs">
                        <FormLabel>Powierzchnia (m²)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Powierzchnia, na której ma być zastosowana ściółka.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="self-end"
                >
                  <Button type="submit">
                    Oblicz
                    <CalculatorIcon className="size-5" />
                  </Button>
                </motion.div>
              </motion.form>
            </Form>
          </motion.div>
        ) : (
          <motion.div
            key="calculator-result"
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              height: "auto",
              scale: 1,
              transition: {
                height: { duration: 0.5 },
                scale: { duration: 0.4, ease: "easeOut" },
                opacity: { duration: 0.3 },
              },
            }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            className="flex flex-col gap-4"
            layout
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4"
              exit="exit"
            >
              <motion.h3 variants={itemVariants}>Wynik:</motion.h3>
              <motion.p variants={itemVariants}>
                Aby uzyskać {calculationResult.area}m² pokrycia, zastosuj{" "}
                <b>{calculationResult.requiredKg}</b> kg.
              </motion.p>
              <motion.p className="small" variants={itemVariants}>
                *Proponowane wyliczenia są naszą sugestią zastosowania i powinny
                być dostosowane do indywidualnych preferencji hodowcy.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="self-end w-fit flex flex-wrap gap-2"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="secondary"
                    onClick={() =>
                      handleDownloadCalculatorPDF(
                        calculationResult.thickness,
                        calculationResult.area,
                        calculationResult.requiredKg
                      )
                    }
                  >
                    Pobierz PDF
                    <DownloadIcon className="size-5 ml-2" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button onClick={handleReset} variant="secondary">
                    Resetuj
                    <RefreshCwIcon className="size-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
