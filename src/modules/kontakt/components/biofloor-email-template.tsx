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
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        color: "#333333",
      }}
    >
      {/* Header */}
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          backgroundColor: "#f8f9fa",
          borderBottom: "3px solid #4A7C59",
        }}
      >
        <tr>
          <td style={{ padding: "20px", textAlign: "center" }}>
            <h1 style={{ color: "#4A7C59", margin: "0", fontSize: "24px" }}>
              Nowa wiadomość z BioFloor
            </h1>
          </td>
        </tr>
      </table>

      {/* Content */}
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td style={{ padding: "30px 20px" }}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                marginBottom: "25px",
              }}
            >
              Witaj,
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                marginBottom: "25px",
              }}
            >
              Otrzymaliśmy wiadomość od{" "}
              <span style={{ fontWeight: "bold" }}>{name}</span> z formularza
              kontaktowego BioFloor.
            </p>

            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: "#f8f9fa",
                borderLeft: "3px solid #4A7C59",
                marginBottom: "25px",
              }}
            >
              <tr>
                <td style={{ padding: "15px" }}>
                  <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                    <strong>Nazwa formularza:</strong> {formName}
                  </p>
                  <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                    <strong>Tytuł:</strong> {title}
                  </p>
                  <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                    <strong>Wiadomość:</strong> {message}
                  </p>
                </td>
              </tr>
            </table>

            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: "#f8f9fa",
                borderLeft: "3px solid #4A7C59",
                marginBottom: "25px",
              }}
            >
              <tr>
                <td style={{ padding: "15px" }}>
                  <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                    <strong>Dane kontaktowe:</strong>
                  </p>
                  <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                    <strong>Imię i nazwisko:</strong> {name}
                  </p>
                  <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                    <strong>Email:</strong> {email}
                  </p>
                  {phoneNumber && (
                    <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                      <strong>Numer telefonu:</strong> {phoneNumber}
                    </p>
                  )}
                  {beddingType && (
                    <p style={{ margin: "0", fontSize: "16px" }}>
                      <strong>Typ ściółki:</strong> {beddingType}
                    </p>
                  )}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Footer */}
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{ backgroundColor: "#f8f9fa", borderTop: "1px solid #dddddd" }}
      >
        <tr>
          <td
            style={{
              padding: "20px",
              textAlign: "center",
              color: "#777777",
              fontSize: "12px",
            }}
          >
            <p style={{ margin: "0" }}>
              © {new Date().getFullYear()} BioFloor - Wiadomość z systemu
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
