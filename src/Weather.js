import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import icon from "./images/location_icon.png";

function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Wednesday 2/11/2022 14:54",
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="wrapper">
        <h1>Weather Application</h1>
        <p className="current-time-details">{weatherData.date}</p>
        <form>
          <input type="search" className="col-8" />
          <input type="submit" value="Search" className="button-search col-2" />
          <button className="button-location col-1">
            <img src={icon} alt="location icon" className="location-icon" />
          </button>
        </form>
        <hr />
        <div className="container text-center location-div">
          <div className="row">
            <div className="col-8">
              <h2>{weatherData.city}</h2>
              <p>
                Humidity {Math.round(weatherData.humidity)} % | Wind{" "}
                {Math.round(weatherData.wind)} km/h | {weatherData.description}
              </p>
            </div>
            <div className="col-4">
              <img
                src={weatherData.iconUrl}
                alt="current weather icon"
                className="weather-icon"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units"> °C</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    let apiKey = "1bbac108daf130483ea36t3oa70341fd";
    let city = "Rostock";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}

export default Weather;
