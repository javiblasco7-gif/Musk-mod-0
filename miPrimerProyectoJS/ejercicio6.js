const lista = [];
for (let i = 0; i < 100000; i++) {
    lista.push(Math.floor(Math.random() * 100000));
}

let listaBurbuja = lista.slice();
console.time("Ordenación por burbuja");
for (let i = 0; i < listaBurbuja.length - 1; i++) {
    for (let j = 0; j < listaBurbuja.length - 1 - i; j++) {
        if (listaBurbuja[j] > listaBurbuja[j + 1]) {
            [listaBurbuja[j], listaBurbuja[j + 1]] = [listaBurbuja[j + 1], listaBurbuja[j]];
        }
    }
}
console.timeEnd("Ordenación por burbuja");
