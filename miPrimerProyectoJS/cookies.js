// creación de cookies

document.cookie = "userType=premium; expires=Fri, 28 Aug 2026 23:59:59 GMT; path=/";

document.cookie = "username=" + username + "; path=/";

console.log(document.cookie);

// lectura de cookies

function getCookie(nombre) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(nombre + "=")) {
            return cookie.substring(nombre.length + 1);
        }
    }
    return null;
}

const authToken = getCookie("authToken");
if(authToken) {
    console.log("Token de autenticación:", authToken);
}
else {
    console.log("No se encontró el token de autenticación");
}

// Modificación de cookies

function setCookie(nombre, valor, dias) {
    if (dias) {
        const segundos = dias * 24 * 60 * 60;
        document.cookie = nombre + "=" + valor + "; max-age=" + segundos + "; path=/";
    } else {
        document.cookie = nombre + "=" + valor + "; path=/";
    }
}

setCookie("username", "Maria Gomez");
setCookie("userType", "standard", 3);

// Eliminación de cookies

function deleteCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

deleteCookie("userType");

if (getCookie("userType") === null) {
    console.log("La cookie 'userType' ha sido eliminada");
}
else {
    console.log("La cookie 'userType' todavía existe");
}

// Aplicación práctica

function getCookie(nombre) {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith(nombre + "=")) {
            return cookie.substring(nombre.length + 1);
        }
    }

    return null;
}

function deleteCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}


function guardarTema(tema) {
    document.cookie = "tema=" + tema + "; path=/";
}

function guardarPagina(pagina) {
    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    historial.unshift(pagina);
    historial = historial.slice(0, 5);

    localStorage.setItem("historial", JSON.stringify(historial));
}

function mostrarPreferencias() {
    console.log("Tema:", getCookie("tema"));

    const historial = JSON.parse(localStorage.getItem("historial")) || [];

    console.log("Últimas páginas visitadas:", historial);
}


function iniciarSesion(token) {
    document.cookie = "authToken=" + token + "; path=/";
    console.log("Sesión iniciada");
}

function estaAutenticado() {
    return getCookie("authToken") !== null;
}

function cerrarSesion() {
    deleteCookie("authToken");
    console.log("Sesión cerrada");
}

guardarTema("oscuro");

guardarPagina("inicio");
guardarPagina("productos");
guardarPagina("contacto");
guardarPagina("blog");
guardarPagina("perfil");
guardarPagina("configuracion");

mostrarPreferencias();

iniciarSesion("abc123");

console.log("¿Está autenticado?", estaAutenticado());

cerrarSesion();

console.log("¿Está autenticado?", estaAutenticado());