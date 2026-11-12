const TEKST_NEZAVRSENO = "Zavrseno";
const TEKST_ZAVRSENO = "Vrati u nezavršeno";

function postaviStanje(stavka, zavrsena) {
  stavka.classList.toggle("zavrsena", zavrsena);
  const dugme = stavka.querySelector(".promjena");
  dugme.textContent = zavrsena ? TEKST_ZAVRSENO : TEKST_NEZAVRSENO;
  dugme.setAttribute("aria-pressed", String(zavrsena));
}

function osvjeziSazetak() {
  const ukupno = document.querySelectorAll(".stavka").length;
  const zavrsenih = document.querySelectorAll(".stavka.zavrsena").length;
  document.getElementById("sazetak").textContent =
    "Završeno: " + zavrsenih + " / " + ukupno;
}

function promijeniStanje(stavka) {
  const jeZavrsena = stavka.classList.contains("zavrsena");
  postaviStanje(stavka, !jeZavrsena);
  osvjeziSazetak();
}

function vratiSve() {
  const stavke = document.querySelectorAll(".stavka");
  for (const stavka of stavke) {
    postaviStanje(stavka, false);
  }
  osvjeziSazetak();
}

document.addEventListener("DOMContentLoaded", function () {
  const stavke = document.querySelectorAll(".stavka");

  for (const stavka of stavke) {
    stavka.addEventListener("click", function () {
      promijeniStanje(stavka);
    });
  }

  document.getElementById("reset").addEventListener("click", vratiSve);

  osvjeziSazetak();
});
