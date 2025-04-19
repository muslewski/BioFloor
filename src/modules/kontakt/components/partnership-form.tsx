"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/actions/send-mail";
import { useTranslations } from "next-intl";

interface FormProps {
  setSuccess: (value: string) => void;
  setError: (value: string) => void;
  setLoading: (value: boolean) => void;
  isLoading: boolean;
}

export function PartnershipForm({
  setSuccess,
  setError,
  setLoading,
  isLoading,
}: FormProps) {
  const t = useTranslations("Contact.Page.Form");

  const formName = "Nawiąż współpracę";

  const formSchema = z.object({
    message: z.string().min(1, t("messageFormError")),
    title: z.string().min(1, t("titleFormError")),
    name: z.string().min(1, t("nameFormError")),
    email: z.string().min(1, t("emailFormError1")).email(t("emailFormError2")),
    phoneNumber: z
      .string()
      .min(1, t("phoneNumberFormError1"))
      .regex(/^\d+$/, t("phoneNumberFormError2"))
      .optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      title: "",
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);

    try {
      await sendEmail({ formName, ...data });

      setSuccess(t("successMessage"));
    } catch (error) {
      console.error("Error sending email:", error);
      setError(t("errorMessage"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-12"
      >
        {/* First row */}
        <div className="flex flex-col lg:flex-row gap-12 h-fit justify-between">
          {/* Message */}
          <FormField
            name="message"
            control={form.control}
            disabled={isLoading}
            render={({ field }) => (
              <FormItem className="w-full min-h-full flex flex-col">
                <FormLabel>{t("formLabelMessage")}</FormLabel>
                <FormControl className="">
                  <Textarea className="h-full min-h-[150px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title and name */}
          <div className="flex flex-col gap-12 justify-evenly min-h-full w-full max-w-xs">
            {/* Title */}
            <FormField
              name="title"
              control={form.control}
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("formLabelTitle")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name */}
            <FormField
              name="name"
              control={form.control}
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("formLabelName")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-wrap gap-12 justify-between">
          {/* Phone Number */}
          <FormField
            name="phoneNumber"
            control={form.control}
            disabled={isLoading}
            render={({ field }) => (
              <FormItem className="w-full max-w-xs">
                <FormLabel>{t("formLabelPhoneNumber")}</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            control={form.control}
            disabled={isLoading}
            render={({ field }) => (
              <FormItem className="w-full max-w-xs">
                <FormLabel>{t("formLabelEmail")}</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Third Row */}
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? t("buttonSending") : t("buttonSend")}
            <SendIcon className="size-5" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
