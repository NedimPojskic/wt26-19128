function generisiPlanAktivnosti(n, k) {
  console.log(`POCETAK PLANA: ${n} ponavljanja (pauza na svakih ${k})`);

  for (let i = 1; i <= n; i++) {
    console.log(`Ponavljanje broja ${i}`);
    if (i % k === 0 && i !== n) {
      console.log(`PAUZA - Završeno je ${i} ponavljanja.`);
    }
  }

  console.log("AKTIVNOST JE ZAVRŠENA");
}

function pokreniPlaniranje() { //unosi
  const unosN = prompt("Unesite ukupan broj ponavljanja (n):");
  const unosK = prompt("Unesite nakon koliko ponavljanja ide pauza (k):");

  //validacija n
  if (unosN === null || unosN.trim() === "") {
    alert("Greška: Niste unijeli broj ponavljanja n!");
    return;
  }
  const n = Number(unosN);
  if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
    alert("Greška: Broj ponavljanja (n) mora biti pozitivan cijeli broj!");
    return;
  }

  //validacija k
  if (unosK === null || unosK.trim() === "") {
    alert("Greška: Niste unijeli interval pauze k!");
    return;
  }
  const k = Number(unosK);
  if (isNaN(k) || !Number.isInteger(k) || k <= 0) {
    alert("Greška: Interval pauze (k) mora biti pozitivan cijeli broj!");
    return;
  }

  generisiPlanAktivnosti(n, k);
}

pokreniPlaniranje();
