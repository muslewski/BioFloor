import jsPDF from "jspdf";

export function handleDownloadCalculatorPDF(
  thickness: number,
  area: number,
  requiredKg: number
) {
  // Create PDF with A4 format
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  doc.addFont("/fonts/Roboto-Regular.ttf", "Roboto", "normal");
  doc.addFont("/fonts/Roboto-Bold.ttf", "Roboto", "bold");
  doc.addFont("/fonts/Roboto-Italic.ttf", "Roboto", "bold");
  doc.setFont("Roboto");

  // Format values with 2 decimal places
  const currentDate = new Date().toLocaleDateString("pl-PL");

  // Add background color to header
  doc.setFillColor(67, 160, 71); // Green color
  doc.rect(0, 0, 210, 30, "F");

  // Add header text
  doc.setTextColor(255, 255, 255); // White text
  doc.setFont("Roboto", "bold");
  doc.setFontSize(20);
  doc.text("BioFloor", 20, 15);
  doc.setFontSize(16);
  doc.text("Kalkulator podściółki", 20, 23);

  // Add content
  doc.setTextColor(0, 0, 0); // Black text
  doc.setFont("Roboto", "normal");
  doc.setFontSize(12);

  // Add date
  doc.text(`Data: ${currentDate}`, 20, 45);

  // Add section title with divider
  doc.setFont("Roboto", "bold");
  doc.setFontSize(14);
  doc.text("Szczegóły obliczeń", 20, 60);
  doc.setDrawColor(67, 160, 71); // Green color
  doc.setLineWidth(0.5);
  doc.line(20, 62, 190, 62);

  // Add calculation details
  doc.setFont("Roboto", "normal");
  doc.setFontSize(12);
  doc.text(`Grubość ściółki: ${thickness} cm`, 30, 75);
  doc.text(`Powierzchnia: ${area} m²`, 30, 85);

  // Add result with highlight
  doc.setFillColor(240, 247, 235); // Light green background
  doc.rect(25, 95, 160, 20, "F");
  doc.setFont("Roboto", "bold");
  doc.text("Potrzebna ilość:", 30, 107);
  doc.setFontSize(14);
  doc.setTextColor(67, 160, 71); // Green text
  doc.text(`${requiredKg} kg`, 90, 107);

  // Add footer
  doc.setFont("Roboto", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100); // Gray text
  doc.text(
    "*Proponowane wyliczenia są sugestią i powinny być dostosowane do",
    20,
    135
  );
  doc.text("indywidualnych preferencji hodowcy.", 20, 140);

  // Add company info at bottom
  doc.setDrawColor(200, 200, 200); // Light gray
  doc.setLineWidth(0.3);
  doc.line(20, 260, 190, 260);
  doc.setFont("Roboto", "bold");
  doc.setFontSize(11);
  doc.setTextColor(67, 160, 71); // Green text
  doc.text("Bio-Floor - naturalna ściółka dla zdrowia zwierząt", 20, 270);
  doc.setFont("Roboto", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100); // Gray text

  // Add website as clickable link
  const websiteText = "biofloor.pl";
  doc.text(websiteText, 20, 277);
  doc.link(20, 274, doc.getTextWidth(websiteText), 5, {
    url: "https://biofloor.pl",
  });

  // Add timestamp in bottom corner
  doc.setFontSize(8);
  doc.text(`Wygenerowano: ${currentDate}`, 150, 285);

  // Save the PDF
  doc.save("bio-floor-kalkulator.pdf");
}
