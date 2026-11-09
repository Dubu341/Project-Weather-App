import {} from "./styles.css";
import { getWeather } from "./getWeather.js";
console.log("hello");

const form = document.querySelector("form");
const search = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value.trim();
  if (!location) return;
  getWeather(location);
  form.reset();
});

getWeather("Bergamo");
