import axios from "axios";

const getWeather = async (latitude: any, longitude: any) => {
  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude,
        longitude,
        current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
        daily: "temperature_2m_max,temperature_2m_min",
        forecast_days: 7,
        timezone: "auto"
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default getWeather;