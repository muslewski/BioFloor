import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Witaj {firstName},</h1>
      <p>
        Dziękujemy za kontakt z nami. Twoja wiadomość została odebrana i
        przekażemy ją do odpowiedniego działu.
      </p>
      <p>Jeśli masz dodatkowe pytania, nie wahaj się z nami skontaktować.</p>
      <p>Pozdrawiamy,</p>
      <p>Zespół BioFloor</p>
    </div>
  );
}
