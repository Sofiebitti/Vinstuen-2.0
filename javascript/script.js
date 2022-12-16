const LEJEASIDE = document.getElementById("lejeoplysninger");

LEJEASIDE.insertAdjacentHTML(
  "beforeend",
  "<br><h3>" + sessionStorage.getItem("Navn") + "</h3>"
);
LEJEASIDE.insertAdjacentHTML(
  "beforeend",
  `Navn: ${sessionStorage.getItem("navn")}`
);
LEJEASIDE.insertAdjacentHTML(
  "beforeend",
  `<br>Dato: ${sessionStorage.getItem("afleveringsdato")}`
);
LEJEASIDE.insertAdjacentHTML(
  "beforeend",
  `<br>tidspunkt: ${sessionStorage.getItem("lejedage")}`
);
