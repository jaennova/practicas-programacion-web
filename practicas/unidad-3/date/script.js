function obtenerFecha() {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const anio = ahora.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

function obtenerHora() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    return `${horas}:${minutos}:${segundos}`;
}

function saludarConFechaYHora() {
    const fecha = obtenerFecha();
    const hora = obtenerHora();
    const saludo = `¡Hola! Hoy es ${fecha} y son las ${hora}.`;
    document.getElementById("saludo").innerHTML = saludo;
}

document.getElementById("boton").addEventListener("click", saludarConFechaYHora);
