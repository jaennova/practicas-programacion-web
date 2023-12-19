<?php
include 'connect.php';

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$numero_control = $_POST['numero_control'];
$carrera = $_POST['carrera'];
$rfc = strtoupper($_POST['rfc']); // Convertir el RFC a mayúsculas

$rfcRegex = '/^[A-ZÑ&]{4}\d{6}[A-Z\d]{3}?$/';

if (!preg_match($rfcRegex, $rfc)) {
    echo "<script>alert('El RFC ingresado no es válido');</script>";
    exit;
}

$sql = "INSERT INTO MyGuests (nombre, apellido, correo, numero_control, carrera, rfc)
VALUES ('$nombre', '$apellido', '$correo', '$numero_control', '$carrera', '$rfc')";

if ($conn->query($sql) === TRUE) {
  echo "<script>alert('Nuevo registro creado con éxito');</script>";
  header("Location: display.php"); // Redirigir a la página de la tabla
  exit;
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>