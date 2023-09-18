document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll("#menu li");
    for (var i = 0; i < listItems.length; i++) {
        if ((i + 1) % 6 === 0) {
            listItems[i].insertAdjacentHTML('afterend', '<br>');
        }
    }
});
