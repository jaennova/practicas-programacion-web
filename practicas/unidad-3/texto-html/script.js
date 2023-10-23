// Función para obtener el estilo de color
function obtenerColorEstilo(color) {
    let colorHtml;
    switch (color) {
        case '1':
            colorHtml = 'color: blue;';
            break;
        case '2':
            colorHtml = 'color: red;';
            break;
        case '3':
            colorHtml = 'color: green;';
            break;
        case '4':
            colorHtml = 'color: orange;';
            break;
        default:
            colorHtml = 'color: black;';
    }
    return colorHtml;
}

// Función para obtener el estilo de alineación
function obtenerAlineacionEstilo(alineacion) {
    let alineacionHtml;
    switch (alineacion) {
        case '1':
            alineacionHtml = 'text-align: center;';
            break;
        case '2':
            alineacionHtml = 'text-align: left;';
            break;
        case '3':
            alineacionHtml = 'text-align: right;';
            break;
        default:
            alineacionHtml = '';
    }
    return alineacionHtml;
}

// Función para generar el texto con el estilo aplicado
function generarTexto(texto, color, tamano, alineacion) {
    const colorHtml = obtenerColorEstilo(color);
    const alineacionHtml = obtenerAlineacionEstilo(alineacion);

    const estilo = `${colorHtml} ${alineacionHtml} font-size: ${tamano}px;`;

    const elementoP = document.createElement('p');
    elementoP.style = estilo;
    elementoP.textContent = texto;

    document.body.appendChild(elementoP);
}

// Obtener entradas del usuario
const texto = prompt('Ingresa el texto');
const color = prompt('Elige un color (1. Azul, 2. Rojo, 3. Verde, 4. Naranja)');
const tamano = prompt('Ingresa el tamaño del texto (en px)');
const alineacion = prompt('Elige la alineación (1. Centrado, 2. Izquierda, 3. Derecha)');

generarTexto(texto, color, tamano, alineacion);
