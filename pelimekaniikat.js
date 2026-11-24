export let pelaaja1Pakka;
export let pelaaja2Pakka;

export function aloitaMekaniikat() {
    const aloitusPakka = [
        ...Array(5).fill("kulta"),
        ...Array(4).fill("hiili"),
        ...Array(4).fill("sora"),
        ...Array(4).fill("hiekka")
    ];

    pelaaja1Pakka = aloitusPakka;
    pelaaja2Pakka = aloitusPakka;
}

export function vuoroMekaniikat() {
    const nostaNappi = document.getElementById("nosta-nappi");
    const huonotKortit = ["hiili", "sora", "hiekka"];
    var kasi = [];

    nostaNappi.addEventListener("click", () => {
        var pelaaja = nostaNappi.closest(".pelaaja-puoli").id === "pelaaja1";

        if (pelaaja) {
            var kohdePakka = pelaaja1Pakka;
            var alkPerPakka = [...pelaaja1Pakka]
        } else {
            var kohdePakka = pelaaja2Pakka;
            var alkPerPakka = [...pelaaja2Pakka]
        }

        var nostettuKortti = kohdePakka[Math.floor(Math.random() * kohdePakka.length)];
        
        if (huonotKortit.includes(nostettuKortti) && kasi.includes(nostettuKortti)) {
            /* Pelaaja nosti toisen huonon kortin */
            kasi = [];
            kohdePakka = alkPerPakka;
        } else  {
            /* Pelaaja nosti kullan tai ensimmäisen huonon kortin */
            kasi.push(nostettuKortti);
            kohdePakka.splice(kohdePakka.indexOf(nostettuKortti), 1);
        }
    })
}