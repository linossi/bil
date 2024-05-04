function beregnAntallDager(hentedato, returdato) {
    var startDato = new Date(hentedato);
    var sluttDato = new Date(returdato);
    var tidForskjell = sluttDato.getTime() - startDato.getTime();
    var antallDager = tidForskjell / (1000 * 3600 * 24);
    antallDager = Math.round(antallDager);
    return antallDager;
}

function beregnPris() {
    var hentedato = document.getElementById("hentedato").value;
    var returdato = document.getElementById("returdato").value;
    var bsEl = document.querySelector("#bs");
    var dakboksEl = document.querySelector("#dakboks");
    var wifiEl = document.querySelector("#wifi");
    var tvEl = document.querySelector("#tv");

    var antallDager = beregnAntallDager(hentedato, returdato);
    var totalsum = antallDager * 500; // Standard pris per dag

    var valgOgPrisEl = document.getElementById("valgOgPris");
    var liste = "<ul>"; // Start på listen

    if (bsEl.checked) { 
        liste += "<li>Barnesete/bilsete (+100kr)</li>"; 
        totalsum += 100; 
    }
    if (dakboksEl.checked) { 
        liste += "<li>Tilhengerfeste/dakboks (+75kr)</li>"; 
        totalsum += 75; 
    }
    if (wifiEl.checked) { 
        liste += "<li>Wi-Fi-hotspot (+200kr)</li>"; 
        totalsum += 200; 
    }
    if (tvEl.checked) { 
        liste += "<li>TV (+200kr)</li>"; 
        totalsum += 200; 
    }

    liste += "</ul>"; // Avslutt listen

    valgOgPrisEl.innerHTML = "Valgte tilleggstjenester og pris for " + antallDager + " dager:<br>" + liste;
    valgOgPrisEl.innerHTML += "<strong>Totalsum: " + totalsum + "kr</strong>";
}

// Legger til en lytter på knappen
document.querySelector("#knapp").addEventListener("click", beregnPris);



