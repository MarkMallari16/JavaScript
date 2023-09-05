let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

let degreeOneTxt = document.getElementById("degreeOne");
let degreeTwoTxt = document.getElementById("degreeTwo");


//arrow function 
const swapType = document.getElementById("swapType").addEventListener("click", () => {
    let type1 = document.getElementById("type1");
    let type2 = document.getElementById("type2");
    // Swap the selected values of type1 and type2
    let tempValue = type1.value;
    type1.value = type2.value;
    type2.value = tempValue;

    let tempTypeValue = celcius.value;
    celcius.value = fahrenheit.value;
    fahrenheit.value = tempTypeValue;

    if (type1.value === "celcius") {
        if (type2.value === "fahrenheit") {
            celToFar();

        }
    } else if (type1.value === "fahrenheit") {
        if (type2.value === "celcius") {
            farToCel();

        }
    }
    updateSelectedElements();
});


function updateSelectedElements() {
    if (type1.value === type2.value) {
        if (type1.value === "celcius") {
            type2.value = "fahrenheit";

        } else if (type1.value === "fahrenheit") {
            type1.value = "celcius";

        }
    }
}
//normal function
function celToFar() {
    let celciusValue = celcius.value.trim();
    if (celciusValue === "") {
        fahrenheit.value = ""; // Set the result field to empty if Celsius field is empty
        return;
    }
    celciusValue = parseFloat(celcius.value);
    if (isNaN(celciusValue)) {
        celciusValue = 0;

    }
    let result = ((celciusValue * 9 / 5) + 32).toFixed(4);
    fahrenheit.value = parseFloat(result);
}
function farToCel() {
    let fahrenheitValue = fahrenheit.value.trim();
    if (fahrenheitValue === "") {
        celcius.value = "";
        return;
    }
    fahrenheitValue = parseFloat(fahrenheit.value);
    if (isNaN(fahrenheitValue)) {
        fahrenheitValue = 0;

    }

    let result = ((fahrenheitValue - 32) * 5 / 9).toFixed(4);
    celcius.value = parseFloat(result);
    console.log(result);
}
// Event listener for the first select element
type1.addEventListener("click", updateSelectedElements);

// Event listener for the second select element
type2.addEventListener("click", updateSelectedElements);