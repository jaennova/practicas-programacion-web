document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll("#menu li");
    for (var i = 0; i < listItems.length; i++) {
        if ((i + 1) % 6 === 0) {
            listItems[i].insertAdjacentHTML('afterend', '<br>');
        }
    }
});
///////
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a");

    function mostrarFecha(e, fecha) {
        var tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = "Fecha: " + fecha;

        document.body.appendChild(tooltip);

        var offsetX = 10;
        var offsetY = 10;

        tooltip.style.left = (e.pageX + offsetX) + "px";
        tooltip.style.top = (e.pageY + offsetY) + "px";

        setTimeout(function() {
            tooltip.remove();
        }, 2000);
    }

    links.forEach(function(link) {
        link.addEventListener("mouseover", function(e) {
            var fecha = this.getAttribute("data-fecha");
            mostrarFecha(e, fecha);
        });

        link.addEventListener("mouseout", function() {
            var tooltips = document.querySelectorAll(".tooltip");
            tooltips.forEach(function(tooltip) {
                tooltip.remove();
            });
        });
    });
});
