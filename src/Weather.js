import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    let apiKey = "1bbac108daf130483ea36t3oa70341fd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="wrapper">
        <h1>Weather Application</h1>
        <div className="current-time-details">
          <FormattedDate date={weatherData.date} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="col-9"
            placeholder="Type a city..."
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="button-search col-3" />
        </form>
        <hr />
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}

export default Weather;
