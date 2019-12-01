/* Area cliente select form */

var selectPrenssa = document.querySelector(".formSelect");
var selectManchine = document.querySelector(".selectManchine");

function OptionSelect() {
    var options = document.querySelector("#optionSelect").value;
    if (options == "openPrensa") {
        selectPrenssa.classList.add('visibilityForm');
    } else {
        selectPrenssa.classList.remove('visibilityForm');
    }

    if(options == "magicManchine") {
        selectManchine.classList.add('visibilityForm');
    }
}