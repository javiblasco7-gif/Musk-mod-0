function invertirCadena(cadena) {
    const pila = [];
    for (let caracter of cadena) {
        pila.push(caracter);
    }
    let cadenaInvertida = "";
    while (pila.length > 0) {
        cadenaInvertida += pila.pop();
    }
    return cadenaInvertida;
}

let cadena = "roma";
console.log(invertirCadena(cadena));