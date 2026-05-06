import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      emoji: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
    let apiKey = "5c04157d3b5bt2eeaa66db333fod0d64";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {Math.round(weather.humidity)}</li>
          <li>Wind:{Math.round(weather.wind)}</li>
          <li>
            {" "}
            <img src={weather.emoji} alt="weather image" />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
