const apiKey = "841ac98594d26ba5d9b6c008b851d118";

const placeInputField = document.getElementById("input-weather");
const weatherBtn = document.getElementById("weatherBtn");
weatherBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const placeValue = placeInputField.value;
    console.log(placeValue);
    placeInputField.value = "";
});

weatherBtn.addEventListener("keydown", (event) =>{
    if (event.key === "Enter"){
        weatherBtn.click();
    }
})