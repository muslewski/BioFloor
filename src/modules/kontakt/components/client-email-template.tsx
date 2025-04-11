import { SendEmailProps } from "@/actions/send-mail";
import * as React from "react";

export function ClientEmailTemplate({ message, title, name }: SendEmailProps) {
  const firstName = name.split(" ")[0];

  return (
    <div>
      <h1>Witaj {firstName},</h1>
      <p>Dziękujemy za kontakt z nami</p>
      <p>
        Nasz zespół zajmie się Twoją wiadomością i odpowie najszybciej jak to
        możliwe.
      </p>
      Otrzymaliśmy Twoją wiadomość:
      <p>
        <strong>Tytuł:</strong> {title}
      </p>
      <p>
        <strong>Wiadomość:</strong> {message}
      </p>
      <p>Jeśli masz dodatkowe pytania, nie wahaj się z nami skontaktować.</p>
      <p>Pozdrawiamy,</p>
      <p>Zespół BioFloor</p>
    </div>
  );
}
