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

// Función para obtener el estilo de fuente
function obtenerFuenteEstilo(fuente) {
    let fuenteCss;
    switch (fuente) {
        case '1':
            fuenteCss = 'font-family: Arial;';
            break;
        case '2':
            fuenteCss = 'font-family: Verdana;';
            break;
        case '3':
            fuenteCss = 'font-family: Times New Roman;';
            break;
        case '4':
            fuenteCss = 'font-family: Courier New;';
            break;
        default:
            fuenteCss = '';
    }
    return fuenteCss;
}

// Función para generar el texto con el estilo aplicado
function generarTexto(texto, color, tamano, alineacion, fuente) {
    const colorCss = obtenerColorEstilo(color);
    const alineacionCss = obtenerAlineacionEstilo(alineacion);
    const fuenteCss = obtenerFuenteEstilo(fuente);

    const estilo = `
        color: ${colorCss};
        font-size: ${tamano}px;
        ${alineacionCss}
        ${fuenteCss}
    `;

    document.write(`<p style="${estilo}">${texto}</p>`);
}

// Obtener entradas del usuario
const texto = prompt('Ingresa el texto');
const color = prompt('Elige un color (1. Azul, 2. Rojo, 3. Verde, 4. Naranja)');
const tamano = prompt('Ingresa el tamaño del texto (en px)');
const alineacion = prompt('Elige la alineación (1. Centrado, 2. Izquierda, 3. Derecha)');
const fuente = prompt('Elige la fuente (1. Arial, 2. Verdana, 3. Times, 4. Courier)');

generarTexto(texto, color, tamano, alineacion, fuente);
