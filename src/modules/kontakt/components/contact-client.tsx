"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrderForm } from "@/modules/kontakt/components/order-form";
import { PartnershipForm } from "@/modules/kontakt/components/partnership-form";
import { QuestionForm } from "@/modules/kontakt/components/question-form";
import { SampleRequestForm } from "@/modules/kontakt/components/sample-request-form";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowBigLeft,
  FlaskConicalIcon,
  HandshakeIcon,
  MessageCircleQuestionIcon,
  PackageIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function ContactClient() {
  const forms = useMemo(
    () => [
      {
        id: "zloz-zamowienie",
        label: "Złóż zamówienie",
        icon: PackageIcon,
        component: OrderForm,
      },
      {
        id: "zamow-probke",
        label: "Zamów próbkę",
        icon: FlaskConicalIcon,
        component: SampleRequestForm,
      },
      {
        id: "zadaj-pytanie",
        label: "Zadaj pytanie",
        icon: MessageCircleQuestionIcon,
        component: QuestionForm,
      },
      {
        id: "nawiaz-wspolprace",
        label: "Nawiąż współpracę",
        icon: HandshakeIcon,
        component: PartnershipForm,
      },
    ],
    []
  );

  const [activeFormId, setActiveFormId] = useState(forms[0].id);
  const [successMessage, setSuccess] = useState("");
  const [errorMessage, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  //   Check URL hash on component mount and set active form accordingly
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && forms.some((form) => form.id === hash)) {
      setActiveFormId(hash);
    }
  }, [forms]);

  // Update URL hash when active form changes
  useEffect(() => {
    window.history.replaceState(null, "", `#${activeFormId}`);
  }, [activeFormId]);

  // Animation configuration that can be reused
  const wrapperAnimationProps = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    layout: true,
  };

  // Handle reset of success and error messages
  function handleReset() {
    setSuccess("");
    setError("");
  }

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Choose which form */}
      <div
        className={cn(
          "flex max-w-6xl w-full gap-3 2xl:gap-12 flex-wrap justify-evenly  border-2 border-foreground/15 rounded-3xl lg:rounded-full px-8 py-4 bg-gradient-to-r from-background/55 to-background/45 backdrop-blur-sm hover:scale-101 transition-transform",
          isLoading && "hover:scale-100"
        )}
      >
        {forms.map((item) => (
          <Button
            disabled={isLoading}
            variant="customLink"
            className={cn(
              "h-fit w-fit",
              activeFormId === item.id && "border-foreground/45 rounded-md"
            )}
            key={item.id}
            onClick={() => setActiveFormId(item.id)}
          >
            <span>{item.label}</span>
            <item.icon className="size-5" />
          </Button>
        ))}
      </div>

      {/* Actual forms */}
      <div
        className={cn(
          "p-8 sm:p-16 w-full rounded-xl border-2 border-foreground border-dashed bg-gradient-to-r from-background/75 to-background/45 backdrop-blur-sm overflow-hidden",
          isLoading && "animate-pulse"
        )}
      >
        <AnimatePresence mode="wait">
          {!successMessage &&
            !errorMessage &&
            forms.map((form) => {
              const FormComponent = form.component;
              return (
                activeFormId === form.id && (
                  <motion.div key={form.id} {...wrapperAnimationProps}>
                    <FormComponent
                      setSuccess={setSuccess}
                      setError={setError}
                      setLoading={setLoading}
                      isLoading={isLoading}
                    />
                  </motion.div>
                )
              );
            })}

          {/* Form sent successfully  */}
          {successMessage && (
            <motion.div
              key="success"
              {...wrapperAnimationProps}
              className="text-center flex flex-col gap-12 items-center"
            >
              <h3 className="border-b-2 border-green-400">{successMessage}</h3>
              <Button
                variant="secondary"
                onClick={handleReset}
                className="w-fit"
              >
                Wróć do formularzy <ArrowBigLeft className="size-5" />
              </Button>
            </motion.div>
          )}

          {/* Form sent with error */}
          {errorMessage && (
            <motion.div
              key="error"
              {...wrapperAnimationProps}
              className="text-center flex flex-col gap-12 items-center"
            >
              <h3 className="border-b-2 border-red-400">{errorMessage}</h3>
              <Button
                variant="secondary"
                onClick={handleReset}
                className="w-fit"
              >
                Wróć do formularzy <ArrowBigLeft className="size-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
