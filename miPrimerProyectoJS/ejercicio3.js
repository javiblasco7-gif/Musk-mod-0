function frecuenciaCaracteres(cadena) {
    const frecuencia = new Map();
    for (let caracter of cadena) {
        frecuencia.set(caracter, (frecuencia.get(caracter) || 0) + 1);
    }
    return frecuencia;
}

let cadena = "frecuencia de caracteres";
console.log(frecuenciaCaracteres(cadena));