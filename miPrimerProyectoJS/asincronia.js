// introducción a los callbacks
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}
function horaActual() {
    const hora = new Date();
    console.log(`La hora actual es: ${hora.toLocaleTimeString()}`);
}
saludar("Juan", horaActual);

// unando setTimeout para simular tareas asíncronas
function tareaAsincrona(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}

function finalizarTarea() {
    console.log("La tarea ha terminado.");
}

tareaAsincrona(finalizarTarea);

// introducción a las promesas
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("El número es par.");
        } else {
            reject("El número es impar.");
        }
    });
}

verificarNumero(4)
.then((mensaje) => {
    console.log(mensaje);
})
.catch((error) => {
    console.error(error);
});

// encandenando promesas
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = { id: id, nombre: "Juan" };
            resolve(usuario);
        }, 1000);
    });
}

function obtenerSaldo(saldo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(saldo);
        }, 2000);
    });
}

obtenerUsuario(1)
.then((usuario) => {
    console.log(`Usuario: ${usuario.nombre}`);
    return obtenerSaldo(1000);
})
.then((saldo) => {
    console.log(`Saldo: ${saldo}`);
})
.catch((error) => {
    console.error(error);
});


// manejo de errores en promesas
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero < 0) {
            reject("Número negativo.");
        }
        else if (numero % 2 === 0) {
            resolve("El número es par.");
        } else if (numero % 2 !== 0) {
            reject("El número es impar.");
        }
    });
}

verificarNumero(4)
.then((mensaje) => {
    console.log(mensaje);
})
.catch((error) => {
    console.error(error);
});

// uso de async/await
async function mostrarUsuarioSaldo(id) {
    try {
        const usuario = await obtenerUsuario(id);
        console.log(`Usuario: ${usuario.nombre}`);
        const saldo = await obtenerSaldo(1000);
        console.log(`Saldo: ${saldo}`);
    } catch (error) {
        console.error(error);
    }
}

mostrarUsuarioSaldo(1);

// simulando una llamada a una API
function simularAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Juan" });
        }, 2000);
    });
}

async function obtenerDatos() {
    try {
        const datos = await simularAPI();
        console.log(`Datos obtenidos: ${datos.nombre}`);
    } catch (error) {
        console.error(error);
    }
}

obtenerDatos();