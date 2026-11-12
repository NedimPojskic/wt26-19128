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

function osvjeziZbir() {
  const tijelo = document.getElementById("tijelo");
  const brojStavki = tijelo.rows.length - 1;
  let zbir = 0;

  for (let i = 0; i < brojStavki; i++) {
    zbir += Number(tijelo.rows[i].cells[1].textContent);
  }

  document.getElementById("zbir-naziv").textContent =
    "Ukupno (broj stavki: " + brojStavki + ")";
  document.getElementById("zbir-iznos").textContent = zbir.toFixed(2);
}

function provjeriUnos(naziv, iznosTekst) {
  if (naziv === "") {
    return "Naziv ne smije biti prazan.";
  }

  if (iznosTekst === "") {
    return "Unesite iznos.";
  }

  const iznos = Number(iznosTekst.replace(",", "."));

  if (!isFinite(iznos)) {
    return "Iznos mora biti broj.";
  }

  if (iznos < 0) {
    return "Iznos ne smije biti negativan.";
  }

  return null;
}

function dodajStavku(event) {
  event.preventDefault();

  const forma = document.getElementById("forma");
  const naziv = forma.elements["naziv"].value.trim();
  const iznosTekst = forma.elements["iznos"].value.trim();

  const greska = provjeriUnos(naziv, iznosTekst);
  if (greska !== null) {
    prikaziGresku(greska);
    return;
  }

  sakrijGresku();

  const iznos = Number(iznosTekst.replace(",", "."));
  const tijelo = document.getElementById("tijelo");

  const red = tijelo.insertRow(tijelo.rows.length - 1);
  red.insertCell(0).textContent = naziv;
  red.insertCell(1).textContent = iznos.toFixed(2);

  osvjeziZbir();
  forma.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("forma").addEventListener("submit", dodajStavku);
  osvjeziZbir();
});
