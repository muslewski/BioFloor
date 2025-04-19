"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendEmail } from "@/actions/send-mail";
import { useLocale, useTranslations } from "next-intl";

interface FormProps {
  setSuccess: (value: string) => void;
  setError: (value: string) => void;
  setLoading: (value: boolean) => void;
  isLoading: boolean;
}

export function SampleRequestForm({
  setSuccess,
  setError,
  setLoading,
  isLoading,
}: FormProps) {
  const t = useTranslations("Contact.Page.Form");
  const locale = useLocale();

  const formName = "Zamów próbkę";

  const formSchema = z.object({
    message: z.string().optional(),
    title: z.string().min(1, t("titleFormError")),
    name: z.string().min(1, t("nameFormError")),
    email: z.string().min(1, t("emailFormError1")).email(t("emailFormError2")),
    phoneNumber: z
      .string()
      .min(1, t("phoneNumberFormError1"))
      .regex(/^\d+$/, t("phoneNumberFormError2"))
      .optional(),
    beddingType: z.enum(["PodŁapki"], {
      required_error: t("beddingTypeSampleFormError"),
    }),
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
      beddingType: "PodŁapki",
    },
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);

    try {
      await sendEmail({ formName, locale, ...data });

      setSuccess(t("successMessageSample"));
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
                <FormControl>
                  <Textarea
                    className="h-full min-h-[150px]"
                    placeholder={t("formPlaceholderSample")}
                    {...field}
                  />
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

          {/* Bedding Type */}
          <FormField
            name="beddingType"
            control={form.control}
            disabled={isLoading}
            render={({ field }) => (
              <FormItem className="w-full max-w-xs">
                <FormLabel>{t("formLabelBeddingType")}</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  defaultValue={field.value || "PodŁapki"}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="PodŁapki">PodŁapki</SelectItem>
                  </SelectContent>
                </Select>
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
            {isLoading ? t("buttonSending") : t("formLabel2")}
            <SendIcon className="size-5" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
