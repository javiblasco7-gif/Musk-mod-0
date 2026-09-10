// seleccion por id
const miElemento = document.getElementById("miElemento");
miElemento.style.backgroundColor = "blue";

// seleccion por clase
const elementos = document.getElementsByClassName("mi-Clase");
for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Seleccionado por clase";
}


// seleccion por etiqueta
const etiquetas = document.getElementsByTagName("p");
for (let i = 0; i < etiquetas.length; i++) {
    etiquetas[i].style.color = "red";
}

// seleccion por querySelector
const contenedor = document.querySelector(".contenedor");
contenedor.textContent = "Título cambiado";


// manipulación de texto
const parrafos = document.querySelectorAll("p");
parrafos.textContent = 'Nuevo texto para los párrafos';

// añadir HTML
miElemento.innerHTML = `<p>Nuevo Párrafo</p>`;

// modificación de estilos
miElemento.style.fontSize = "20px";
miElemento.style.color = "blue";

// evento de click
const boton = document.querySelector("#boton");
boton.addEventListener("click", function() {
    boton.textContent = "¡Haz Click!";
});