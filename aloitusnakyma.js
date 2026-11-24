import * as pelimekaniikat from "./pelimekaniikat.js";
import * as pelinakyma from "./pelinakyma.js";

const nakyma = document.getElementById("nakyma");

function naytaAloitusNakyma() {
    nakyma.innerHTML = `
        <section id="aloitusnakyma">

        <h1>KULTAPELI</h1>

        <p>Kerää mahdollisimman monta kultakimpaletta!</p>

        <button id="aloita-nappi">
            Aloita peli
        </button>

    </section>
        `;

     const aloitaNappi = document.getElementById("aloita-nappi");

    aloitaNappi.addEventListener("click", () => {
        pelimekaniikat.aloitaMekaniikat();
        pelinakyma.aloitaNakyma();
    });
}
naytaAloitusNakyma();