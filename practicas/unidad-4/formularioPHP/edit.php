<?php
include 'connect.php';

if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM MyGuests WHERE id=$id";
    $result = $conn->query($sql);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        ?>
        <link rel="stylesheet" type="text/css" href="style.css">
        <form action="update.php" method="post" class="form-style">
            <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
            <table class="table-style">
                <tr>
                    <td><label for="nombre">Nombre:</label></td>
                    <td><input type="text" id="nombre" name="nombre" value="<?php echo $row['nombre']; ?>"></td>
                </tr>
                <tr>
                    <td><label for="apellido">Apellido:</label></td>
                    <td><input type="text" id="apellido" name="apellido" value="<?php echo $row['apellido']; ?>"></td>
                </tr>
                <tr>
                    <td><label for="correo">Correo:</label></td>
                    <td><input type="text" id="correo" name="correo" value="<?php echo $row['correo']; ?>"></td>
                </tr>
                <tr>
                    <td><label for="numero_control">Número de Control:</label></td>
                    <td><input type="text" id="numero_control" name="numero_control" value="<?php echo $row['numero_control']; ?>"></td>
                </tr>
                <tr>
                    <td><label for="carrera">Carrera:</label></td>
                    <td><input type="text" id="carrera" name="carrera" value="<?php echo $row['carrera']; ?>"></td>
                </tr>
                <tr>
                    <td><label for="rfc">RFC:</label></td>
                    <td><input type="text" id="rfc" name="rfc" value="<?php echo $row['rfc']; ?>"></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" value="Actualizar"></td>
                </tr>
            </table>
        </form>
        <?php
    } else {
        echo "No se encontró el registro";
    }
} else {
    echo "ID no especificado";
}
?>