import { SendEmailProps } from "@/actions/send-mail";
import { getTranslations } from "next-intl/server";
import * as React from "react";

export async function ClientEmailTemplate({
  message,
  title,
  name,
}: SendEmailProps) {
  const t = await getTranslations("Emails.client");

  const firstName = name.split(" ")[0];

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
              BioFloor
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
              {t("welcome")} <b>{firstName}</b>,
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                marginBottom: "25px",
              }}
            >
              {t("thanksForContact")}
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                marginBottom: "15px",
              }}
            >
              {t("weReceived")}
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
                    <b>{t("title")}</b> {title}
                  </p>
                  <p style={{ margin: "0", fontSize: "16px" }}>
                    <b>{t("message")}</b> {message}
                  </p>
                </td>
              </tr>
            </table>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                marginBottom: "25px",
              }}
            >
              {t("ifQuestions")}
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                marginBottom: "8px",
              }}
            >
              {t("regards")}
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                fontWeight: "bold",
                margin: "0",
              }}
            >
              {t("biofloorTeam")}
            </p>
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
              © {new Date().getFullYear()} BioFloor. {t("allRightsReserved")}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
