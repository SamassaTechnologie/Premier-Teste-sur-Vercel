// === export.js ===
// Gestion de l'exportation des documents

// Export en PDF avec jsPDF
function exportToPDF(content, fileName = "document.pdf") {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Diviser le texte en lignes automatiques
  const lines = doc.splitTextToSize(content, 180);

  doc.text(lines, 15, 20);
  doc.save(fileName);
}

// Export en Word (docx basique)
function exportToWord(content, fileName = "document.doc") {
  const header = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Export Word</title></head><body>`;
  const footer = "</body></html>";
  const source = header + content + footer;

  const blob = new Blob(['\ufeff', source], { type: 'application/msword' });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Lier aux boutons
document.getElementById("btn-export-pdf")?.addEventListener("click", () => {
  const content = document.getElementById("result").innerText;
  exportToPDF(content);
});

document.getElementById("btn-export-word")?.addEventListener("click", () => {
  const content = document.getElementById("result").innerHTML;
  exportToWord(content);
});
