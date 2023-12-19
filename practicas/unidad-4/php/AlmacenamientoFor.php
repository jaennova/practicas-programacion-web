<?php

$nombre = $_GET['nombre'];
$apellidos = $_GET['apellidos'];
$correo = $_GET['email'];
$control = $_GET['no_control'];
$carrera = $_GET['carrera'];


$contador = 1;

// mostrar en pantalla indice, tabla
// guardarla en una bd
// enviar por correo electronico

echo "Hola como estas? ".$nombre." ".$apellidos;

echo "<br><br><br>";


?>
