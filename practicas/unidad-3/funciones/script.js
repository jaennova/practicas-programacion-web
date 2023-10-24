function suma(num1, num2) {
    return num1 + num2; // Cambiado de num1 + num1 a num1 + num2
}

function saludo(nombre) {
    document.write("Saludos " + nombre); // Corregido el mensaje de saludo
}

function calcularArea(base, altura) {
    return base * altura; // Añadida la implementación para calcular el área
}

function texto(texto, color, tamanio) {
    document.write('<font color="' + color + '" size="' + tamanio + '">' + texto + '</font>'); // Corregido el formato de la etiqueta de fuente
}
