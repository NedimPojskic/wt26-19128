function procijeniCekanjePacijenta(vrijednost) {
  const p1 = 15;
  const p2 = 45;

  if (vrijednost <= p1) {
    return "Kratko čekanje";
  } else if (vrijednost <= p2) {
    return "Umjereno čekanje";
  } else {
    return "Predugo čekanje";
  }
}

function pokreniProcjenu() {
  const unos = prompt("Unesite vrijeme čekanja pacijenta u minutama:");

  if (unos === null || unos.trim() === "") {
    alert("Greška: Unos ne smije biti prazan!");
    return;
  }

  const broj = Number(unos);

  if (isNaN(broj)) {
    alert("Greška: Morate unijeti validan broj!");
    return;
  }

  if (broj < 0) {
    alert("Greška: Vrijeme čekanja ne može biti negativno!");
    return;
  }

  const rezultat = procijeniCekanjePacijenta(broj);
  alert(`Za uneseno vrijeme od ${broj} min, procjena je: ${rezultat}`);
}

pokreniProcjenu();
