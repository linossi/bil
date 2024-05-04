// Definerer funksjonen visValg
function visValg() {
    let bsEl = document.querySelector("#bs");
    let dakboksEl = document.querySelector("#dakboks");
    let wifiEl = document.querySelector("#wifi");
    let tvEl = document.querySelector("#tv");
    let resultatEl = document.querySelector("p");

    // Lager en tekst der vi bygger opp en enkel liste
    let liste = "<ul>";

    if (bsEl.checked) { liste += "<li>Barnesete/bilsete</li>"; }
    if (dakboksEl.checked) { liste += "<li>Tilhengerfeste/dakboks</li>"; }
    if (wifiEl.checked) { liste += "<li>Wi-Fi-hotspot</li>"; }
    if (tvEl.checked) { liste += "<li>TV</li>"; }

    liste += "</ul>";

    resultatEl.innerHTML = "Du har valgt " + liste;
}

// Legger til en lytter på knappen
let knapp = document.querySelector("#knapp");
knappEl.addEventListener("click", visValg);

