import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import icon from "./images/location_icon.png";

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
        <p className="current-time-details">
          <FormattedDate date={weatherData.date} />
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="col-8"
            placeholder="Type a city..."
            autofocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="button-search col-2" />
          <button className="button-location col-1">
            <img src={icon} alt="location icon" className="location-icon" />
          </button>
        </form>
        <hr />
        <WeatherInfo data={weatherData} />
        <hr />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}

export default Weather;
