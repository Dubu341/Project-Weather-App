console.log("hello");
const API_KEY = "679762401ccb45b2873182056260811";
const form = document.querySelector("form");
const search = document.querySelector("input");

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}`,
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    const country = data.location.country;
    const city = data.location.name;
    const tempC = data.current.temp_c;
    const humidity = data.current.humidity;
    const windKph = data.current.wind_kph;
    const conditions = data.current.condition.text;
    console.log(
      `Country: ${country}, City: ${city}, Temp: ${tempC}C, Humidity: ${humidity}, Wind: ${windKph}KPH, Conditions: ${conditions}`,
    );
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
