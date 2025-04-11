import { SendEmailProps } from "@/actions/send-mail";
import * as React from "react";

export function BioFloorEmailTemplate({
  message,
  title,
  name,
  email,
  phoneNumber,
  beddingType,
  formName,
}: SendEmailProps) {
  return (
    <div>
      <h1>Witaj,</h1>
      <p>Otrzymaliśmy wiadomość od {name} z formularza kontaktowego BioFloor</p>
      <p>Oto szczegóły wiadomości:</p>
      <p>
        <strong>Nazwa formularza:</strong> {formName}
      </p>
      <p>
        <strong>Tytuł:</strong> {title}
      </p>
      <p>
        <strong>Wiadomość:</strong> {message}
      </p>
      <p>
        <strong>Imię i nazwisko:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {phoneNumber && (
        <p>
          <strong>Numer telefonu:</strong> {phoneNumber}
        </p>
      )}
      {beddingType && (
        <p>
          <strong>Typ ściółki:</strong> {beddingType}
        </p>
      )}
    </div>
  );
}
