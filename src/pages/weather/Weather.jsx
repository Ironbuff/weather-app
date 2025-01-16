import React, { useState } from "react";

const App = () => {
  // State variables
  const [location, setLocation] = useState(""); // User's input
  const [weather, setWeather] = useState(null); // Weather data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch weather data based on location
  const fetchWeather = async () => {
    const API_KEY = "cb899aff7d909ad7141bf4a7db1d8d4b"; // Replace with your OpenWeatherMap API key
    const GEOCODING_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`;
    setLoading(true);
    setError(null);

    try {
      // Step 1: Get Latitude and Longitude
      const geoResponse = await fetch(GEOCODING_URL);
      if (!geoResponse.ok) throw new Error("Failed to fetch location data");

      const geoData = await geoResponse.json();
      if (geoData.length === 0) throw new Error("Location not found");

      const { lat, lon } = geoData[0];

      // Step 2: Get Weather Data
      const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const weatherResponse = await fetch(WEATHER_URL);
      if (!weatherResponse.ok) throw new Error("Failed to fetch weather data");

      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Nepal Weather App</h1>

      {/* Input and Button */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter location (e.g., Kathmandu)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchWeather}
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Get Weather
        </button>
      </div>

      {/* Loading State */}
      {loading && <p className="mt-6 text-gray-600">Loading...</p>}

      {/* Error State */}
      {error && <p className="mt-6 text-red-500">{error}</p>}

      {/* Weather Data */}
      {weather && (
        <div className="mt-6 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-gray-700">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-gray-600">Temperature: {weather.main.temp}°C</p>
          <p className="text-gray-600">Weather: {weather.weather[0].description}</p>
          <p className="text-gray-600">Humidity: {weather.main.humidity}%</p>
          <p className="text-gray-600">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
