function palabrasRepetidas(texto) {
    const textoLimpio = texto
        .toLowerCase()
        .replace(/[.,;:!?¿¡]/g, '');
    const palabras = textoLimpio.split(/\s+/);
    const repetidas = new Set();
    const vistas = new Set();

    for (const palabra of palabras) {
        if (vistas.has(palabra)) {
            repetidas.add(palabra);
        } else {
            vistas.add(palabra);
        }
    }

    return [...repetidas];
}

console.log(palabrasRepetidas("las palabras repetidas son las palabras que salen dos o más veces en una frase"));
