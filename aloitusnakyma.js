const nakyma = document.getElementById("nakyma");

export function naytaAloitusNakyma() {
    nakyma.innerHTML = `
        <section id="aloitusnakyma">

        <h1>KULTAPELI</h1>

        <p>Kerää mahdollisimman monta kultakimpaletta!</p>

        <button id="aloita-nappi">
            Aloita peli
        </button>

    </section>
        `;
}