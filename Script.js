// 📌 Gestion des formulaires selon la catégorie
function filterCategory(category) {
  const formContainer = document.getElementById("form-container");

  let formHtml = "";

  if (category === "administratif") {
    formHtml = `
      <h2>📄 Demande Administrative</h2>
      <form onsubmit="generateDocument(event, 'administratif')">
        <label>Nom complet: <input type="text" id="nom" required></label>
        <label>Objet de la demande: <input type="text" id="objet" required></label>
        <label>Détails: <textarea id="details" required></textarea></label>
        <button type="submit">Générer</button>
      </form>
    `;
  } else if (category === "bancaire") {
    formHtml = `
      <h2>🏦 Document Bancaire</h2>
      <form onsubmit="generateDocument(event, 'bancaire')">
        <label>Nom du client: <input type="text" id="nom" required></label>
        <label>Banque: <input type="text" id="banque" required></label>
        <label>Type de document: <input type="text" id="typeDoc" required></label>
        <button type="submit">Générer</button>
      </form>
    `;
  } else if (category === "certificat") {
    formHtml = `
      <h2>📜 Certificat</h2>
      <form onsubmit="generateDocument(event, 'certificat')">
        <label>Nom du bénéficiaire: <input type="text" id="nom" required></label>
        <label>Type de certificat: <input type="text" id="typeCert" required></label>
        <label>Délivré par: <input type="text" id="delivre" required></label>
        <button type="submit">Générer</button>
      </form>
    `;
  } else {
    formHtml = `<p>🔍 Choisissez une catégorie pour commencer.</p>`;
  }

  formContainer.innerHTML = formHtml;
}

// 📌 Générer le document
function generateDocument(event, type) {
  event.preventDefault();

  let content = "";
  if (type === "administratif") {
    content = `Demande de ${document.getElementById("objet").value}
    
Moi, ${document.getElementById("nom").value}, sollicite par la présente : 
${document.getElementById("details").value}.`;
  } else if (type === "bancaire") {
    content = `Document bancaire demandé par ${document.getElementById("nom").value}
Banque : ${document.getElementById("banque").value}
Type : ${document.getElementById("typeDoc").value}`;
  } else if (type === "certificat") {
    content = `Certificat de ${document.getElementById("typeCert").value}
Au nom de : ${document.getElementById("nom").value}
Délivré par : ${document.getElementById("delivre").value}`;
  }

  document.getElementById("result").innerText = content;
}

// 📌 Exporter en PDF
function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(document.getElementById("result").innerText, 10, 10);
  doc.save("document.pdf");
}

// 📌 Bouton menu burger (mobile)
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("active");
});
