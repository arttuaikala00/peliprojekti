export let pelaaja1Pakka;
export let pelaaja2Pakka

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