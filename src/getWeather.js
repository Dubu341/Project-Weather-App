import { updateBackground } from "./updateBackground.js";
import { loading, hideLoading } from "./loading.js";
const API_KEY = "679762401ccb45b2873182056260811";
const img = document.querySelector("img");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const condition = document.querySelector(".condition");
const searchBar = document.querySelector(".search-bar");
const showError = document.createElement("p");

async function getWeather(location) {
  try {
    showError.textContent = "";

    loading();
    
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}`,
    );

    if (!response.ok) {
      console.log(`Request failed: ${response.status}`);
      showError.textContent = "Could not find the City";
      searchBar.append(showError);
      return;
    }

    const data = await response.json();

    const countryData = data.location.country;
    const cityData = data.location.name;
    const tempC = data.current.temp_c;
    const humidityData = data.current.humidity;
    const windKph = data.current.wind_kph;
    const conditionsData = data.current.condition.text;

    img.src = data.current.condition.icon;

    console.log(
      `Country: ${countryData}, City: ${cityData}, Temp: ${tempC}C, Humidity: ${humidityData}, Wind: ${windKph}KPH, Conditions: ${conditionsData}`,
    );

    country.textContent = `${countryData}, ${cityData}`;

    temp.textContent = `${Math.round(tempC)} °C`;
    humidity.textContent = `Humidity: ${humidityData}%`;
    wind.textContent = `Wind Speed: ${windKph} km/h`;
    condition.textContent = `${conditionsData}`;
    updateBackground(conditionsData);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading();
  }
}

export { getWeather };
