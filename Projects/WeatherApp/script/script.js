const apiKey = "841ac98594d26ba5d9b6c008b851d118";

const placeInputField = document.getElementById("input-weather");
const weatherBtn = document.getElementById("weatherBtn");
document.addEventListener("DOMContentLoaded", () => {
    const defaultCity = "Manila"
    getWeatherData(defaultCity);
    weatherBtn.addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
        placeInputField.value = "";
    });
})


async function getWeatherData(placeWeatherValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeWeatherValue}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();


        //getting the data

        //city name and country
        const countryName = data.sys.country;
        const cityName = data.name;

        //description
        const temperature = Math.round(data.main.temp).toFixed();
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        //details
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${Math.round(data.main.humidity)}%`,
            `Wind speed: ${Math.round(data.wind.speed)}m/s`
        ];
        //city place
        document.querySelector('.place-weather').textContent = `${cityName}, ${countryName}`;
        //icon
        document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon"
        class="weather-icon w-50">`;
        //place description
        document.querySelector('.place-description').textContent = description;
        //temperature text
        document.querySelector('.temperature-text').textContent = `${temperature}°`;
        //description
        const descriptionElements = document.querySelectorAll('.description');
        descriptionElements.forEach((element, index) => {
            element.textContent = details[index];
        });


    } catch (error) {
       alert('City Not Found Try Again.')
    }
};
function validateInput() {
    const placeValue = placeInputField.value.trim();

    if (placeValue === "" || placeValue.trim() === null) {
        alert('Please enter a location');
    } else {
        getWeatherData(placeValue);
    }
}
// add event listener
weatherBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        weatherBtn.click();
    }
});
