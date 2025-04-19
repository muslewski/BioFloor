"use server";

import { BioFloorEmailTemplate } from "@/modules/kontakt/components/biofloor-email-template";
import { ClientEmailTemplate } from "@/modules/kontakt/components/client-email-template";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailProps {
  formName:
    | "Zadaj pytanie"
    | "Zamów próbkę"
    | "Nawiąż współpracę"
    | "Złóż zamówienie";
  message?: string;
  title: string;
  name: string;
  email: string;
  phoneNumber?: string;
  beddingType?: "puste" | "podlapki";
}

export async function sendEmail({
  formName,
  message,
  title,
  name,
  email,
  phoneNumber,
  beddingType,
}: SendEmailProps) {
  console.log("Form Name:", formName);
  console.log("Sending email to:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.log("Title:", title);
  console.log("Phone Number:", phoneNumber);
  console.log("Bedding Type:", beddingType);

  try {
    // Email to client
    const { error } = await resend.emails.send({
      from: "BioFloor <biuro@biofloor.pl>",
      to: [email],
      subject: "BioFloor - Formularz kontaktowy",
      react: ClientEmailTemplate({ formName, name, title, email, message }),
    });

    if (error) {
      throw new Error("Error sending email to client", { cause: error });
    }

    // Email to BioFloor
    const { error: error2 } = await resend.emails.send({
      from: "BioFloor <biuro@biofloor.pl>",
      to: ["biuro@biofloor.pl"],
      subject: `Formularz kontaktowy BioFloor - ${formName}`,
      react: BioFloorEmailTemplate({
        formName,
        name,
        title,
        email,
        message,
        phoneNumber,
        beddingType,
      }),
    });

    if (error2) {
      throw new Error("Error sending email to BioFloor", { cause: error2 });
    }
  } catch (error) {
    throw new Error("Error sending email", {
      cause: error,
    });
  }
}
