"use server";

import { EmailTemplate } from "@/modules/kontakt/components/email-template";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
  formName: string;
  message?: string;
  title: string;
  name: string;
  email: string;
  phoneNumber?: string;
  beddingType?: "puste" | "sloma" | "trociny" | "torf";
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
    const { data, error } = await resend.emails.send({
      from: "BioFloor <biuro@biofloor.pl>",
      to: [email],
      subject: "BioFloor - Formularz kontaktowy",
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      throw new Error("Error sending email", { cause: error });
    }

    return data;
  } catch (error) {
    throw new Error("Error sending email", {
      cause: error,
    });
  }
}
