// Función para obtener el estilo de color
function obtenerColorEstilo(color) {
    let colorCss;
    switch (color) {
        case '1':
            colorCss = 'blue';
            break;
        case '2':
            colorCss = 'red';
            break;
        case '3':
            colorCss = 'green';
            break;
        case '4':
            colorCss = 'orange';
            break;
        default:
            colorCss = 'black';
    }
    return colorCss;
}

// Función para obtener el estilo de alineación
function obtenerAlineacionEstilo(alineacion) {
    let alineacionCss;
    switch (alineacion) {
        case '1':
            alineacionCss = 'text-align: center;';
            break;
        case '2':
            alineacionCss = 'text-align: left;';
            break;
        case '3':
            alineacionCss = 'text-align: right;';
            break;
        default:
            alineacionCss = '';
    }
    return alineacionCss;
}


// Función para generar el texto con el estilo aplicado
function generarTexto(texto, color, tamano, alineacion) {
    const colorCss = obtenerColorEstilo(color);
    const alineacionCss = obtenerAlineacionEstilo(alineacion);
    const fuenteCss = obtenerFuenteEstilo(fuente);

    const estilo = `
        color: ${colorCss};
        font-size: ${tamano}px;
        ${alineacionCss}
    `;

    document.write(`<p style="${estilo}">${texto}</p>`);
}

// Obtener entradas del usuario
const texto = prompt('Ingresa el texto');
const color = prompt('Elige un color (1. Azul, 2. Rojo, 3. Verde, 4. Naranja)');
const tamano = prompt('Ingresa el tamaño del texto (en px)');
const alineacion = prompt('Elige la alineación (1. Centrado, 2. Izquierda, 3. Derecha)');

generarTexto(texto, color, tamano, alineacion, fuente);
