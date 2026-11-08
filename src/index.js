console.log("hello");
const API_KEY = "T2CFU9BY2K94SK4UZD96B3J8Q";
const form = document.querySelector("form");
const search = document.querySelector("input");

async function getWeather(country, unitGroup) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(country)}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json`,
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    const address = data.address;
    const temp = data.currentConditions.temp;
    const humidity = data.currentConditions.humidity;
    const wind = data.currentConditions.windspeed;
    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;
    const conditions = data.currentConditions.conditions;
    console.log(
      `Address: ${address}, Temp: ${temp}, Humidity: ${humidity}, Wind: ${wind}, Sunrise: ${sunrise}, Sunset: ${sunset}, Conditions: ${conditions}`,
    );
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value.trim();
  if (!location) return;
  getWeather(location, "metric");
});
