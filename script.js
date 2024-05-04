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

    if (bsEl.checked) { totalsum += 100; }
    if (dakboksEl.checked) { totalsum += 75; }
    if (wifiEl.checked) { totalsum += 200; }
    if (tvEl.checked) { totalsum += 200; }

    var valgOgPrisEl = document.getElementById("valgOgPris");
    valgOgPrisEl.innerHTML = "Valgte tilleggstjenester og pris for " + antallDager + " dager:<br>";
    if (bsEl.checked) { valgOgPrisEl.innerHTML += "- Barnesete/bilsete (+100kr)<br>"; }
    if (dakboksEl.checked) { valgOgPrisEl.innerHTML += "- Tilhengerfeste/dakboks (+75kr)<br>"; }
    if (wifiEl.checked) { valgOgPrisEl.innerHTML += "- Wi-Fi-hotspot (+200kr)<br>"; }
    if (tvEl.checked) { valgOgPrisEl.innerHTML += "- TV (+200kr)<br>"; }

    valgOgPrisEl.innerHTML += "<strong>Totalsum: " + totalsum + "kr</strong>";
}


