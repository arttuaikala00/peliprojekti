import * as pelimekaniikat from "./pelimekaniikat.js";

const nakyma = document.getElementById("nakyma");

export function aloitaNakyma() {
    nakyma.innerHTML = `
        <div class="peli-nakyma">
            <div class="pelaaja-puoli" id="pelaaja1">
                <div class="pakka"></div>

                <div class="pankki"></div>
                
                <div class="toiminnot"></div>
            </div>

            <div class="pelaaja-puoli" id="pelaaja2">
                <div class="pakka"></div>

                <div class="pankki"></div>
                
                <div class="toiminnot"></div>
            </div>
        </div>
    `;

    tulostaPakka(true);
    tulostaPakka(false);
    vuoroNakyma(true);
}

export function tulostaPakka(pelaaja) {
    var pelaajaPakka = pelaaja ? pelimekaniikat.pelaaja1Pakka : pelimekaniikat.pelaaja2Pakka;
    var pakka = pelaaja ? document.querySelector("#pelaaja1 .pakka") : document.querySelector("#pelaaja2 .pakka");

    pakka.innerHTML = "";

    pelaajaPakka.forEach(kivi => {
        switch(kivi) {
            case "kulta":
                pakka.innerHTML += `<div class="kortti kulta-kortti">`;
                break;
            case "hiili":
                pakka.innerHTML += `<div class="kortti hiili-kortti">`;
                break;
            case "sora":
                pakka.innerHTML += `<div class="kortti sora-kortti">`;
                break;
            case "hiekka":
                pakka.innerHTML += `<div class="kortti hiekka-kortti">`;
                break;
        }
    });
}

export function vuoroNakyma(pelaaja) {
    const pelaaja1Toiminnot = document.querySelector("#pelaaja1 .toiminnot");
    const pelaaja2Toiminnot = document.querySelector("#pelaaja2 .toiminnot");

    const omaVuoro = `
        <div class="toiminnot-nakyma"></div>
        <div class="kasi"></div>

        <div class="napit">
            <button id="nosta-nappi">Nosta</button>
            <button id="jaa-nappi">Jää</button>
        </div>
    `;

    var pelaajaVuoro = pelaaja ? "1" : "2";
    const toisenVuoro = `
        <h4>Pelaaja ${pelaajaVuoro} vuoro.</h4>
    `;

    pelaaja1Toiminnot.innerHTML = pelaaja ? omaVuoro : toisenVuoro;
    pelaaja2Toiminnot.innerHTML = pelaaja ? toisenVuoro : omaVuoro;

    pelimekaniikat.vuoroMekaniikat();
}

export function tulostaPankki(pelaaja) {
    var pelaajaPankki = pelaaja ? pelimekaniikat.pelaaja1Pankki : pelimekaniikat.pelaaja2Pankki;
    var pankki = pelaaja ? document.querySelector("#pelaaja1 .pankki") : document.querySelector("#pelaaja2 .pankki");

    pankki.innerHTML = "";

    pelaajaPankki.forEach(kulta => {
        pankki.innerHTML += `<div class="kortti kulta-kortti"></div>`;
    });
}

export function tulostaKasi() {
    var pelaajaKasi = pelimekaniikat.kasi;
    var kasi = document.querySelector(".kasi");

    kasi.innerHTML = "";

    pelaajaKasi.forEach(kortti => {
        switch(kortti) {
            case "kulta":
                kasi.innerHTML += `<div class="kortti kulta-kortti">`;
                break;
            case "hiili":
                kasi.innerHTML += `<div class="kortti hiili-kortti">`;
                break;
            case "sora":
                kasi.innerHTML += `<div class="kortti sora-kortti">`;
                break;
            case "hiekka":
                kasi.innerHTML += `<div class="kortti hiekka-kortti">`;
                break;
        }
    });
}