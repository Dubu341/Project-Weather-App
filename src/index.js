import {} from "./styles.css";

console.log("hello");

const API_KEY = "679762401ccb45b2873182056260811";
const form = document.querySelector("form");
const search = document.querySelector("input");
const img = document.querySelector("img");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const condition = document.querySelector(".condition");

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}`,
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
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

    country.textContent = `${countryData}, ${cityData}.`;

    temp.textContent = `${tempC} °C`;
    humidity.textContent = `Humidity: ${humidityData}%`;
    wind.textContent = `Wind Speed: ${windKph} km/h`;
    condition.textContent = `${conditionsData}.`;
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value.trim();
  if (!location) return;
  getWeather(location);
});
