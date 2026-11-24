import * as pelimekaniikat from "./pelimekaniikat.js";

const nakyma = document.getElementById("nakyma");

export function aloitaNakyma() {
    nakyma.innerHTML = `
        <div class="peli-nakyma">
            <div class="pelaaja-puoli" id="pelaaja1">
                <div class="pakka">

                </div>
                
                <div class="toiminnot">
                    
                </div>
            </div>

            <div class="pelaaja-puoli" id="pelaaja2">
                <div class="pakka">

                </div>
                
                <div class="toiminnot">
                    
                </div>
            </div>
        </div>
    `;

    tulostaPakka(true);
    tulostaPakka(false);
    vuoroNakyma(true);
}

function tulostaPakka(pelaaja) {
    var pelaajaPakka;
    var pakka;

    if (pelaaja) {
        pelaajaPakka = pelimekaniikat.pelaaja1Pakka;
        pakka = document.querySelector("#pelaaja1 .pakka")
    } else {
        pelaajaPakka = pelimekaniikat.pelaaja2Pakka;
        pakka = document.querySelector("#pelaaja2 .pakka")
    }

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

function vuoroNakyma(pelaaja) {
    const pelaaja1Toiminnot = document.querySelector("#pelaaja1 .toiminnot");
    const pelaaja2Toiminnot = document.querySelector("#pelaaja2 .toiminnot");

    const omaVuoro = `
        <div class="kasi">
            
        </div>

        <div class="napit">
            <button id="nosta-nappi">Nosta</button>
            <button id="jaa-nappi">Jää</button>
        </div>
    `;

    if (pelaaja) {
        var pelaajaVuoro = "1";
    } else {
        var pelaajaVuoro = "2";
    }
    const toisenVuoro = `
        <h4>Pelaaja ${pelaajaVuoro} vuoro.</h4>
    `;

    if (pelaaja) {
        pelaaja1Toiminnot.innerHTML = omaVuoro;
        pelaaja2Toiminnot.innerHTML = toisenVuoro
    } else {
        pelaaja1Toiminnot.innerHTML = toisenVuoro;
        pelaaja2Toiminnot.innerHTML = omaVuoro;
    }
}