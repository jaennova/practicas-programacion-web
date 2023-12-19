<?php
echo '<link rel="stylesheet" type="text/css" href="style.css">';
include 'connect.php';

$sql = "SELECT id, nombre, apellido, correo, numero_control, carrera, rfc FROM MyGuests";
$result = $conn->query($sql);

echo "<table>";
echo "<tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Número de Control</th><th>Carrera</th><th>RFC</th><th>Imagen</th><th>Editar</th><th>Eliminar</th></tr>";

if ($result->num_rows > 0) {
    $count = 0;
    while($row = $result->fetch_assoc()) {
        $count++;
        $color = $count % 2 == 0 ? 'blue' : 'yellow';
        $rfc = $row['rfc'];
        try {
            $imagePath = glob("uploads/$rfc.*");
            if (empty($imagePath)) {
                throw new Exception();
            }
            $imagePath = $imagePath[0];
        } catch (Exception $e) {
            $imagePath = "uploads/404.webp"; // Imagen por defecto
        }
        echo "<tr style='background-color: $color;'><td>".$row['id']."</td><td>".$row['nombre']."</td><td>".$row['apellido']."</td><td>".$row['correo']."</td><td>".$row['numero_control']."</td><td>".$row['carrera']."</td><td>".$row['rfc']."</td><td><img src='$imagePath' width='100' height='100'></td><td><a class='edit' href='edit.php?id=".$row['id']."'>Editar</a></td><td><a class='delete' href='delete.php?id=".$row['id']."'>Eliminar</a></td></tr>";
    }
} else {
    echo "</table>";
    echo "<div class='no-data'>No hay datos disponibles</div>";
}
$conn->close();
?>