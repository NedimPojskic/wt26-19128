const KATEGORIJE = {
  vazno: "Vazno",
  opce: "Opce"
};

function prikaziGresku(poruka) {
  const greska = document.getElementById("greska");
  greska.textContent = poruka;
  greska.hidden = false;
}

function sakrijGresku() {
  const greska = document.getElementById("greska");
  greska.textContent = "";
  greska.hidden = true;
}

function napraviPregled(event) {
  event.preventDefault();

  const forma = document.getElementById("forma");
  const naslov = forma.elements["naslov"].value.trim();
  const tekst = forma.elements["tekst"].value.trim();
  const kategorija = forma.elements["kategorija"].value;

  const greske = [];
  if (naslov === "") {
    greske.push("naslov");
  }
  if (tekst === "") {
    greske.push("tekst obavijesti");
  }

  if (greske.length > 0) {
    prikaziGresku("Molimo popunite: " + greske.join(" i ") + ".");
    return;
  }

  sakrijGresku();

  document.getElementById("pregled-naslov").textContent = naslov;
  document.getElementById("pregled-tekst").textContent = tekst;
  document.getElementById("pregled-kategorija").textContent = KATEGORIJE[kategorija];

  const pregled = document.getElementById("pregled");
  pregled.className = "pregled " + kategorija;
}

function vratiFormu() {
  document.getElementById("forma").reset();
  sakrijGresku();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("forma").addEventListener("submit", napraviPregled);
  document.getElementById("reset-dugme").addEventListener("click", vratiFormu);
});
