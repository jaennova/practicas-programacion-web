// Este programa calcula el sueldo total de un empleado tomando en cuenta su sueldo diario, antigüedad y días trabajados, aplicando un bono si corresponde, y muestra el detalle en una tabla.

// Solicitar información del empleado
var nombreEmpleado = prompt("Nombre del empleado/a");
var departamento = prompt("Departamento del empleado: " + nombreEmpleado);
var sueldoDiario = parseFloat(prompt("Ingrese el sueldo diario de " + nombreEmpleado));
var antiguedad = parseFloat(prompt("Años de antigüedad para " + nombreEmpleado));
var diasTrabajados = parseFloat(prompt("Días trabajados"));
var bono = 0.0;
var total = 0.0;

// Validar si las entradas son números válidos
if (isNaN(sueldoDiario) || isNaN(antiguedad) || isNaN(diasTrabajados)) {
    alert("Por favor, ingrese números válidos.");
} else {
    var subtotal = sueldoDiario * diasTrabajados;

    if (antiguedad >= 1) {
        var confirmacion = confirm("Este empleado ha obtenido bono por antigüedad, ¿desea aceptar el bono?");
        if (confirmacion) {
            if (antiguedad >= 15 && antiguedad < 20) {
                bono = subtotal * 0.30;
            } else if (antiguedad >= 20 && antiguedad < 30) {
                bono = subtotal * 0.35;
            } else if (antiguedad >= 30 && antiguedad < 40) {
                bono = subtotal * 0.40;
            } else if (antiguedad >= 40) {
                bono = subtotal * 0.50;
            }
        } else {
            alert("No se ha aceptado el bono.");
            total = subtotal;
            bono = "No hay bono";
        }
    }

    // Si hay bono, ajustar el total
    if (bono > 0.0) {
        total = subtotal + bono;
    } else {
        total = subtotal;
    }

    // Crear la tabla
    var tabla = '<table width="80%" align="center">';
    tabla += '<tr align="center">';
    tabla += '<th width="10%">Nombre Empleado</th>';
    tabla += '<th width="20%">Departamento</th>';
    tabla += '<th width="15%">Sueldo diario</th>';
    tabla += '<th width="15%">Antigüedad</th>';
    tabla += '<th width="10%">Días trabajando</th>';
    tabla += '<th width="10%">Subtotal</th>';
    tabla += '<th width="20%">Bono</th>';
    tabla += '<th width="20%">Sueldo total</th>';
    tabla += '</tr>';

    // Añadir fila de descripción del empleado
    tabla += '<tr align="center">';
    tabla += '<td>' + nombreEmpleado + '</td>';
    tabla += '<td>' + departamento + '</td>';
    tabla += '<td>' + sueldoDiario + '</td>';
    tabla += '<td>' + antiguedad + '</td>';
    tabla += '<td>' + diasTrabajados + '</td>';
    tabla += '<td>' + subtotal + '</td>';
    tabla += '<td>' + bono + '</td>';
    tabla += '<td>' + total + '</td>';
    tabla += '</tr>';

    // Cerrar la tabla
    tabla += '</table>';

    // Mostrar la tabla en el documento
    document.write(tabla);
}
