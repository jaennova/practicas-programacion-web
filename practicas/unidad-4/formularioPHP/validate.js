function validateForm() {
    var rfc = document.forms["myForm"]["rfc"].value;
    var rfcRegex = /^[A-ZÑ&]{3,4}\d{6}(?:[A-Z\d]{2})?$/; // Expresión regular para validar el RFC

    if (!rfcRegex.test(rfc.toUpperCase())) {
        alert("El RFC ingresado no es válido");
        return false;
    }
}