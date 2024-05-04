document.addEventListener("DOMContentLoaded", function() {
    let kinoEl = document.querySelector("#kino");
    let dvdEl = document.querySelector("#dvd");
    let strommetjenesteEl = document.querySelector("#strommetjeneste");
    let tvEl = document.querySelector("#tv");
    let resultatEl = document.querySelector("p");
    let knappEl = document.querySelector("#knapp");

    knappEl.addEventListener("click", visValg);

    function visValg() {
        let liste = "<ul>";

        if (kinoEl.checked) { liste += "<li>Kino</li>"; }
        if (dvdEl.checked) { liste += "<li>DVD</li>"; }
        if (strommetjenesteEl.checked) { liste += "<li>Strømmetjeneste</li>"; }
        if (tvEl.checked) { liste += "<li>TV</li>"; }

        liste += "</ul>";

        resultatEl.innerHTML = "Du har valgt " + liste;
    }
});
