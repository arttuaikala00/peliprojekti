import * as aloitusnakyma from "./aloitusnakyma.js";
import * as pelimekaniikat from "./pelimekaniikat.js";
import * as pelinakyma from "./pelinakyma.js";

aloitusnakyma.naytaAloitusNakyma();

const aloitaNappi = document.getElementById("aloita-nappi");
aloitaNappi.addEventListener("click", () => {
    pelimekaniikat.aloitaMekaniikat();
    pelinakyma.aloitaNakyma();
});