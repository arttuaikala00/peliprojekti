import * as pelimekaniikat from "./pelimekaniikat.js";
import * as pelinakyma from "./pelinakyma.js";

const aloitaNappi = document.getElementById("aloita-nappi");

aloitaNappi.addEventListener("click", () => {
    pelimekaniikat.aloitaMekaniikat();
    pelinakyma.aloitaNakyma();
    pelimekaniikat.vuoroMekaniikat();
});