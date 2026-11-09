async function updateBackground(condition) {
  const weather = condition.toLowerCase();

  if (weather.includes("clear")) {
    await import("./clear.js");
  } else if (weather.includes("cloud") || weather.includes("overcast")) {
    await import("./cloud.js");
  } else if (
    weather.includes("rain") ||
    weather.includes("drizzle") ||
    weather.includes("thunderstorm")
  ) {
    await import("./rain.js");
  } else if (weather.includes("snow")) {
    await import("./snow.js");
  } else {
    await import("./clear.js");
  }
}

export { updateBackground };
