import * as pelinakyma from "./pelinakyma.js";

export let pelaaja1Pakka;
export let pelaaja2Pakka;
export let pelaaja1Pankki = [];
export let pelaaja2Pankki = [];
export let kasi = [];

export function aloitaMekaniikat() {
    const aloitusPakka = [
        ...Array(5).fill("kulta"),
        ...Array(4).fill("hiili"),
        ...Array(4).fill("sora"),
        ...Array(4).fill("hiekka")
    ];

    pelaaja1Pakka = [...aloitusPakka];
    pelaaja2Pakka = [...aloitusPakka];
}

export function vuoroMekaniikat() {
    const nostaNappi = document.getElementById("nosta-nappi");
    const jaaNappi = document.getElementById("jaa-nappi");
    const huonotKortit = ["hiili", "sora", "hiekka"];
    var pelaaja = nostaNappi.closest(".pelaaja-puoli").id === "pelaaja1";
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

            pelinakyma.tulostaPakka(pelaaja);
            pelinakyma.tulostaKasi();
            pelinakyma.vuoroNakyma(!pelaaja);
        } else  {
            /* Pelaaja nosti kullan tai ensimmäisen huonon kortin */
            kasi.push(nostettuKortti);
            omaPakka.splice(omaPakka.indexOf(nostettuKortti), 1);

            pelinakyma.tulostaKasi();
            pelinakyma.tulostaPakka(pelaaja);
        }
    })

    jaaNappi.addEventListener("click", () => {
        var omaPankki = pelaaja ? pelaaja1Pankki : pelaaja2Pankki;
        var kaverinPakka = pelaaja ? pelaaja2Pakka : pelaaja1Pakka;

        /* Lisää kullat omaan pankkiin ja huonot kaverin pakkaan */
        omaPankki.push(...kasi.filter(kortti => kortti === "kulta"));
        kaverinPakka.push(...kasi.filter(kortti => kortti !== "kulta"));
        kasi = [];

        pelinakyma.tulostaKasi();
        pelinakyma.tulostaPakka(!pelaaja);
        pelinakyma.tulostaPankki(pelaaja);
        pelinakyma.vuoroNakyma(!pelaaja);
    })
}