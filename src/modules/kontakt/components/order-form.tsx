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

interface FormProps {
  setSuccess: (value: string) => void;
  setError: (value: string) => void;
  setLoading: (value: boolean) => void;
  isLoading: boolean;
}

export function OrderForm({
  setSuccess,
  setError,
  setLoading,
  isLoading,
}: FormProps) {
  const formName = "Złóż zamówienie";

  const formSchema = z.object({
    message: z.string().min(1, "Wiadomość jest wymagana"),
    title: z.string().min(1, "Tytuł jest wymagany"),
    name: z.string().min(1, "Imię i nazwisko są wymagane"),
    email: z
      .string()
      .min(1, "Email jest wymagany")
      .email("Nieprawidłowy adres email"),
    phoneNumber: z
      .string()
      .min(1, "Numer telefonu jest wymagany")
      .regex(/^\d+$/, "Numer telefonu musi zawierać tylko cyfry")
      .optional(),
    beddingType: z.enum(["sloma", "trociny", "torf"], {
      required_error: "Wybór rodzaju jest wymagany",
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
      beddingType: undefined,
    },
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);

    try {
      await sendEmail({ formName, ...data });

      setSuccess(
        "Wiadomość została wysłana. Skontaktujemy się z Tobą jak najszybciej."
      );
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Wystąpił błąd. Spróbuj ponownie później.");
      }
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
                <FormLabel>Wiadomość</FormLabel>
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
                  <FormLabel>Tytuł</FormLabel>
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
                  <FormLabel>Imię i Nazwisko</FormLabel>
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
                <FormLabel>Numer Telefonu</FormLabel>
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
                <FormLabel>Rodzaj ściółki</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Wybierz rodzaj ściółki" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sloma">Słoma</SelectItem>
                    <SelectItem value="trociny">Trociny </SelectItem>
                    <SelectItem value="torf">Torf</SelectItem>
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
                <FormLabel>Email</FormLabel>
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
            {isLoading ? "Wysyłanie..." : "Złóż zamówienie"}
            <SendIcon className="size-5" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
