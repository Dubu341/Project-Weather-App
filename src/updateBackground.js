async function updateBackground(condition) {
  const weather = condition.toLowerCase();
  let loader;
  if (weather.includes("clear")) {
    loader = () => import("./clear.js");
  } else if (weather.includes("cloud") || weather.includes("overcast")) {
    loader = () => import("./cloud.js");
  } else if (
    weather.includes("rain") ||
    weather.includes("drizzle") ||
    weather.includes("thunderstorm")
  ) {
    loader = () => import("./rain.js");
  } else if (weather.includes("snow")) {
    loader = () => import("./snow.js");
  } else {
    loader = () => import("./clear.js");
  }
  const module = await loader();
  module.apply();
}

export { updateBackground };
