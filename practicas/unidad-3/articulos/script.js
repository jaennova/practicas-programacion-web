// Este programa calcula el costo de compra de un artículo, aplicando un descuento si corresponde, y muestra el detalle en una tabla.

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
            if (cantidadArticulos >= 10 && cantidadArticulos < 20) {
                descuento = 20;
            } else if (cantidadArticulos >= 20 && cantidadArticulos < 30) {
                descuento = 40;
            } else if (cantidadArticulos >= 30 && cantidadArticulos < 40) {
                descuento = 60;
            } else if (cantidadArticulos >= 40) {
                descuento = 80;
            }
        }
    }

    // Calcular el subtotal
    var subtotal = total;

    // Si hay descuento, ajustar el subtotal
    if (descuento > 0) {
        subtotal = total - (total * (descuento / 100));
    }

    var ahorro = total - subtotal;
    var porcentajeDescuento = descuento;

    // Crear la tabla
    var tabla = '<table border="0" width="80%" align="center">';
    tabla += '<tr align="center">';
    tabla += '<th width="10%">Nombre Articulo</th>';
    tabla += '<th width="20%">Cantidad Productos</th>';
    tabla += '<th width="15%">Precio Producto</th>';
    tabla += '<th width="15%">Subtotal</th>';
    tabla += '<th width="10%">Descuento %</th>';
    tabla += '<th width="10%">Usted ahorró</th>';
    tabla += '<th width="20%">Total de la compra</th>';
    tabla += '</tr>';

    // Añadir fila de descripción del artículo
    tabla += '<tr align="center">';
    tabla += '<td>' + articulo + '</td>';
    tabla += '<td>' + cantidadArticulos + '</td>';
    tabla += '<td>$ ' + precioArticulo.toFixed(2) + '</td>';
    tabla += '<td>$ ' + total.toFixed(2) + '</td>';
    tabla += '<td>' + porcentajeDescuento + '%</td>';
    tabla += '<td>$ ' + ahorro.toFixed(2) + '</td>';
    tabla += '<td><a>$ ' + subtotal.toFixed(2) + '</a></td>';
    tabla += '</tr>';

    // Cerrar la tabla
    tabla += '</table>';

    // Mostrar la tabla en el documento
    document.write(tabla);
}