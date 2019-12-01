/* Area cliente select form */

var selectPrenssa = document.querySelector(".formSelect");
var selectManchine = document.querySelector(".selectManchine");

function OptionSelect() {
    var options = document.querySelector("#optionSelect").value;
    if (options == "openPrensa") {
        selectPrenssa.classList.add('visibilityForm');
    } else if (options == "maginMachine") {
        selectManchine.classList.add('visibilityForm');
    } else {
        selectPrenssa.classList.remove('visibilityForm');
        selectManchine.classList.remove('visibilityForm');
    }
}