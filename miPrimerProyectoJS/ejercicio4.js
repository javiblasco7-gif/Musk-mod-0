function anagramas(cadena1, cadena2) {

    cadena1 = cadena1.toLowerCase().replace(/\s/g, "");
    cadena2 = cadena2.toLowerCase().replace(/\s/g, "");

    if (cadena1.length !== cadena2.length) {
        return false;
    }

    const contarCaracteres = (cadena) => {

        const frecuencia = new Map();

        for (let caracter of cadena) {
            frecuencia.set(caracter, (frecuencia.get(caracter) || 0) + 1);
        }

        return frecuencia;
    };

    const frecuencia1 = contarCaracteres(cadena1);
    const frecuencia2 = contarCaracteres(cadena2);

    for (let [caracter, cantidad] of frecuencia1) {

        if (frecuencia2.get(caracter) !== cantidad) {
            return false;
        }
    }

    return true;
}


let cadena1 = "Amor";
let cadena2 = "Roma";

console.log(anagramas(cadena1, cadena2)); 

console.log(anagramas("amor", "roma"));           
console.log(anagramas("Hola", "Halo"));           
console.log(anagramas("Hola mundo", "Mundo hola")); 
console.log(anagramas("casa", "cosa"));           