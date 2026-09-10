function anagramas(cadena1, cadena2) {
    const contarCaracteres = (cadena) => {
        const frecuencia = new Map();
        for (let caracter of cadena) {
            frecuencia.set(caracter, (frecuencia.get(caracter) || 0) + 1);
        }
        return frecuencia;
    };
    return contarCaracteres(cadena1).size === contarCaracteres(cadena2).size && 
           [...contarCaracteres(cadena1)].every(([k, v]) => contarCaracteres(cadena2).get(k) === v);
}

let cadena1 = "amor";
let cadena2 = "roma";
console.log(anagramas(cadena1, cadena2));