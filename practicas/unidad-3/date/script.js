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

function obtenerSaludo() {
    const hora = new Date().getHours();
    let saludo;

    if (hora >= 5 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    return saludo;
}

function saludarConFechaYHora() {
    const fecha = obtenerFecha();
    const hora = obtenerHora();
    const saludo = obtenerSaludo();
    const mensaje = `¡${saludo}! Hoy es ${fecha} y son las ${hora}.`;
    document.getElementById("saludo").innerHTML = mensaje;
}

document.getElementById("boton").addEventListener("click", saludarConFechaYHora);
