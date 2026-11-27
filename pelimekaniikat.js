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
}

export function vuoroMekaniikat() {
    const nostaNappi = document.getElementById("nosta-nappi");
    const jaaNappi = document.getElementById("jaa-nappi");
    const huonotKortit = ["hiili", "sora", "hiekka"];
    let kasi = [];

    nostaNappi.addEventListener("click", () => {
        var pelaaja = nostaNappi.closest(".pelaaja-puoli").id === "pelaaja1";

        if (pelaaja) {
            var omaPakka = pelaaja1Pakka;
            var alkPerPakka = [...pelaaja1Pakka]
        } else {
            var omaPakka = pelaaja2Pakka;
            var alkPerPakka = [...pelaaja2Pakka]
        }

        var nostettuKortti = omaPakka[Math.floor(Math.random() * omaPakka.length)];
        
        if (huonotKortit.includes(nostettuKortti) && kasi.includes(nostettuKortti)) {
            /* Pelaaja nosti toisen huonon kortin */
            kasi = [];
            omaPakka = alkPerPakka;
        } else  {
            /* Pelaaja nosti kullan tai ensimmäisen huonon kortin */
            kasi.push(nostettuKortti);
            omaPakka.splice(omaPakka.indexOf(nostettuKortti), 1);
        }
    })

    jaaNappi.addEventListener("click", () => {
        var pelaaja = jaaNappi.closest(".pelaaja-puoli").id === "pelaaja1";

        if (pelaaja) {
            var omatKullat = pelaaja1Kullat;
            var kaverinPakka = pelaaja2Pakka;
        } else {
            var omatKullat = pelaaja2Kullat;
            var kaverinPakka = pelaaja1Pakka;
        }

        /* Lisää kullat omaan pankkiin ja huonot kaverin pakkaan */
        omatKullat.push(...kasi.filter(kortti => kortti == "kulta"));
        kaverinPakka.push(...kasi.filter(kortti => kortti != "kulta"));
        kasi = [];
    })
}