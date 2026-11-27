import * as pelinakyma from "./pelinakyma.js";

export let pelaaja1Pakka;
export let pelaaja2Pakka;
export let pelaaja1Kullat = [];
export let pelaaja2Kullat = [];

export function aloitaMekaniikat() {
    const aloitusPakka = [
        ...Array(5).fill("kulta"),
        ...Array(4).fill("hiili"),
        ...Array(4).fill("sora"),
        ...Array(4).fill("hiekka")
    ];

    pelaaja1Pakka = [...aloitusPakka];
    pelaaja2Pakka = [...aloitusPakka];

    /* DEBUG */
    console.log("pelaaja 1 pakka: " + pelaaja1Pakka);
    console.log("pelaaja 2 pakka: " + pelaaja2Pakka);
}

export function vuoroMekaniikat() {
    const nostaNappi = document.getElementById("nosta-nappi");
    const jaaNappi = document.getElementById("jaa-nappi");
    const huonotKortit = ["hiili", "sora", "hiekka"];
    var pelaaja = nostaNappi.closest(".pelaaja-puoli").id === "pelaaja1";
    var kasi = [];
    var alkPerPakka = pelaaja ? [...pelaaja1Pakka] : [...pelaaja2Pakka];

    nostaNappi.addEventListener("click", () => {
        var omaPakka = pelaaja ? pelaaja1Pakka : pelaaja2Pakka;

        var nostettuKortti = omaPakka[Math.floor(Math.random() * omaPakka.length)];
        
        if (huonotKortit.includes(nostettuKortti) && kasi.includes(nostettuKortti)) {
            /* Pelaaja nosti toisen huonon kortin */
            kasi = [];
            if (pelaaja) {
                pelaaja1Pakka = [...alkPerPakka];
            } else {
                pelaaja2Pakka = [...alkPerPakka];
            }

            /* DEBUG */
            console.log("oma pakka: " + omaPakka);
            console.log("alkuperänen pakka: " + alkPerPakka);

            pelinakyma.tulostaPakka(pelaaja);
            pelinakyma.vuoroNakyma(!pelaaja);
        } else  {
            /* Pelaaja nosti kullan tai ensimmäisen huonon kortin */
            kasi.push(nostettuKortti);
            omaPakka.splice(omaPakka.indexOf(nostettuKortti), 1);

            pelinakyma.tulostaPakka(pelaaja);

            /* DEBUG */
            console.log("käsi: " + kasi);
            console.log("oma pakka: " + omaPakka);
        }
    })

    jaaNappi.addEventListener("click", () => {
        var omatKullat = pelaaja ? pelaaja1Kullat : pelaaja2Kullat;
        var kaverinPakka = pelaaja ? pelaaja2Pakka : pelaaja1Pakka;

        /* Lisää kullat omaan pankkiin ja huonot kaverin pakkaan */
        omatKullat.push(...kasi.filter(kortti => kortti == "kulta"));
        kaverinPakka.push(...kasi.filter(kortti => kortti != "kulta"));
        kasi = [];

        /* DEBUG */
        console.log("omat kullat: " + omatKullat);
        console.log("kaverin pakka: " + kaverinPakka);
        console.log("käsi: " + kasi);

        pelinakyma.tulostaPakka(!pelaaja);
        pelinakyma.vuoroNakyma(!pelaaja);
    })
}