function elementosDiferentes(array1, array2) {
    const elementosUnicos = [];
    for (let numero of array1) {
        if (!array2.includes(numero)) {
            elementosUnicos.push(numero);
        }
    }
    return elementosUnicos;
}

function generarArray() {

    const array = [];

    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 10) + 1);
    }

    return array;
}


let array1 = generarArray();
let array2 = generarArray();

console.log("Primer array:", array1);
console.log("Segundo array:", array2);
console.log("Elementos del primer array que no están en el segundo:", 
    elementosDiferentes(array1, array2));
