const lista = [];
for (let i = 0; i < 100000; i++) {
    lista.push(Math.floor(Math.random() * 100000));
}

let listaQuickSort = lista.slice();
console.time("Ordenación por quicksort");
function quickSort(lista, inicio, fin) {
    if (inicio < fin) {
        const pivote = lista[fin];
        let i = inicio;
        for (let j = inicio; j < fin; j++) {
            if (lista[j] < pivote) {
                const aux = lista[i];
                lista[i] = lista[j];
                lista[j] = aux;
                i++;
            }
}

lista[fin] = lista[i];
lista[i] = pivote;
quickSort(lista, inicio, i - 1);
quickSort(lista, i + 1, fin);
}
}
quickSort(listaQuickSort, 0, listaQuickSort.length - 1);
console.timeEnd("Ordenación por quicksort");