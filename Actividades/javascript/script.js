// Definir el artículo
var articulo = "laptop";

// Solicitar la cantidad y el precio del artículo
var cantidadArticulos = parseFloat(prompt("Ingrese la cantidad de " + articulo + "s para comprar"));
var precioArticulo = parseFloat(prompt("Ingrese el precio del/la " + articulo));

// Validar si las entradas son números válidos
if (isNaN(cantidadArticulos) || isNaN(precioArticulo)) {
    alert("Por favor, ingrese números válidos.");
} else {
    var descuento = 0.0;
    var total = cantidadArticulos * precioArticulo;

    if (cantidadArticulos >= 10) {
        var confirmacion = confirm("Esta compra ha obtenido un descuento, ¿desea aceptar el descuento?");
        if (confirmacion) {
            descuento = 20;
            totalConDescuento = total - (total * (descuento / 100));
        }
    }

    // Crear la tabla
    var tabla = '<table border="0" width="80%" align="center">';
    tabla += '<tr align="center">';
    tabla += '<th width="10%">Nombre Articulo</th>';
    tabla += '<th width="20%">Cantidad Productos</th>';
    tabla += '<th width="40%">Total de la compra</th>';
    tabla += '</tr>';

    // Añadir fila de descripción del artículo
    tabla += '<tr align="center">';
    tabla += '<td>' + articulo + '</td>';
    tabla += '<td>' + cantidadArticulos + '</td>';
    tabla += '<td><a>$ ' + (totalConDescuento || total).toFixed(2) + '</a></td>';
    tabla += '</tr>';

    // Cerrar la tabla
    tabla += '</table>';

    // Mostrar la tabla en el documento
    document.write(tabla);
}