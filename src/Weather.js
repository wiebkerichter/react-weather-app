import React from "react";
import "./Weather.css";
import icon from "./images/location_icon.png";

function Weather() {
  return (
    <div className="wrapper">
      <h1>Weather Application</h1>
      <p className="current-time-details">Wednesday 2/11/2022 14:54</p>
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
            <h2>Palam de Mallorca</h2>
            <p>Humidity 71 % | Wind 4 km/h | scattered clouds</p>
          </div>
          <div className="col-4">
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt="current weather icon"
              className="weather-icon"
            />
            <span className="temperature">25</span>
            <span className="units"> °C</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Weather;
