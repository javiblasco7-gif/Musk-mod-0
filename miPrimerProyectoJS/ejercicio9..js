function parentesisBalanceados(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] === "(") {
            contador++;
        }

        if (texto[i] === ")") {
            contador--;
        }

        if (contador < 0) {
            return false;
        }
    }

    return contador === 0;
}

console.log(parentesisBalanceados("(Hola mundo)"));
console.log(parentesisBalanceados("((Hola) mundo)"));
console.log(parentesisBalanceados("(Hola mundo"));
console.log(parentesisBalanceados("Hola mundo)"));