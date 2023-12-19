<?php
include 'connect.php';

if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM MyGuests WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Registro eliminado con éxito";
    } else {
        echo "Error al eliminar el registro: " . $conn->error;
    }
} else {
    echo "ID no especificado";
}

$conn->close();
?>