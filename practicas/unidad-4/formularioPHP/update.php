<?php
include 'connect.php';

if(isset($_POST['id'], $_POST['nombre'], $_POST['apellido'], $_POST['correo'], $_POST['numero_control'], $_POST['carrera'], $_POST['rfc'])) {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $numero_control = $_POST['numero_control'];
    $carrera = $_POST['carrera'];
    $rfc = $_POST['rfc'];

    $sql = "UPDATE MyGuests SET nombre=?, apellido=?, correo=?, numero_control=?, carrera=?, rfc=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssi", $nombre, $apellido, $correo, $numero_control, $carrera, $rfc, $id);

    if ($stmt->execute() === TRUE) {
        echo "Registro actualizado con éxito";
    } else {
        echo "Error al actualizar el registro: " . $conn->error;
    }
} else {
    echo "Datos no especificados";
}

$conn->close();
?>