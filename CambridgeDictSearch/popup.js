document.addEventListener('DOMContentLoaded', function () {
    var textBox = document.getElementById('input');
    var checkPageButton = document.getElementById('search');
    textBox.focus();
    checkPageButton.addEventListener('click', function () {
        searchCambridgeDict();
    }, false);

    textBox.addEventListener("keyup", function (event) {
        if (event.code === 'Enter') {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            checkPageButton.click();
        }
    });

    var searchCambridgeDict = function () {
        var url = 'https://dictionary.cambridge.org/dictionary/english/' + textBox.value.toLowerCase();
        window.open(url);
    }
}, false);
