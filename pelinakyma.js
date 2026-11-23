import * as pelimekaniikat from "./pelimekaniikat.js";

const nakyma = document.getElementById("nakyma");

export function aloitaNakyma() {
    nakyma.innerHTML = `
        <div class="peli-nakyma">
            <div class="pelaaja-puoli" id="pelaaja1">
                <div class="pakka">

                </div>
                
                <div class="toiminnot">
                    <div class="kasi">

                    </div>

                    <div class="napit">

                    </div>
                </div>
            </div>

            <div class="pelaaja-puoli" id="pelaaja2">
                <div class="pakka">

                </div>
                
                <div class="toiminnot">
                    <div class="kasi">

                    </div>

                    <div class="napit">

                    </div>
                </div>
            </div>
        </div>
    `;

    tulostaPakka(1);
    tulostaPakka(2);
}

function tulostaPakka(pelaaja) {
    let pelaajaPakka;
    let pakka;

    if (pelaaja == 1) {
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