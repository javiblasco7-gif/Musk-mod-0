function secuenciaParentesis(texto) {
    let pila = [];

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter === "(" || caracter === "[" || caracter === "{") {
            pila.push(caracter);
    }

        if (caracter === ")" || caracter === "]" || caracter === "}") {

            if (pila.length === 0) {
                return false;
            }

            let ultimo = pila.pop();

            if ((caracter === ")" && ultimo !== "(") ||
                (caracter === "]" && ultimo !== "[") ||
                (caracter === "}" && ultimo !== "{")) {
                return false;
            }
        }
    }

    return pila.length === 0;
}

console.log(secuenciaParentesis("()"));
console.log(secuenciaParentesis("([])"));
console.log(secuenciaParentesis("{[()]}"));
console.log(secuenciaParentesis("([)]"));
console.log(secuenciaParentesis("((("));