//declaración de variables

let nombre = 'Javier';
let edad = 29;

const PI = 3.1416;
const colorFavorito = 'azul';

//manipulación de variables

nombre = 'Carlos';
console.log(nombre);

edad++;
console.log(edad);

//operadores artiméticos

let a = 2;
let b = 3;

let suma = a + b;
let resta = a - b;

console.log(suma);
console.log(resta);


let multiplicación = a * b;
let división = a / b;

console.log(multiplicación);
console.log(división);

// operadores de comparación

let x = 6;
let y = 9;

console.log(x > y);
console.log(x == y);

let z = "6";
console.log(x === z);

// operadores lógicos

let isRaining = true;
let isWeekend = false;

console.log(isRaining && isWeekend);
console.log(isRaining || isWeekend);

// condicionales

const temperatura = 20;

if (temperatura > 30) {
    console.log('Hace calor');
}
else if (temperatura == 25){
    console.log('Está templado');
}

else{
    console.log('Hace frío');
}


// bucles for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log(suma);

// bucles while

let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

factorial = 1;
let numero = 8;
while (numero >= 1) {
    factorial *= numero;
    numero--;
}
console.log(factorial);

// arrays y métodos de arrays

const array = [
    8, 
    2, 
    70, 
    11, 
    46
]

console.log(array[0], array[4]);
console.log(array)

array[2] = 35;
console.log(array);

pushArray = array.push(82);
console.log(array);

popArray = array.pop();
console.log(array);

sortArray = array.sort((a, b) => a - b);
console.log(array);

// objetos

const persona = {
    nombre: 'Javier',
    apellido: 'Blasco',
    edad: 30,
}

console.log(persona.nombre, persona.apellido);
console.log(persona);

// métodos e iteración de arrays

array.forEach(numero => {
    console.log(numero ** 2);
});

const numerosPares = array.filter(numero => numero % 2 === 0);
console.log(numerosPares);

// consumir una API con fetch

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        
        data.slice(0, 5).forEach(post => {
            console.log(post.title);
        });
    });

    

