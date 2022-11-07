import React from "react";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  return (
    <div className="row WeatherForecast">
      <div className="col">
        <h3>Thu</h3>
        <img
          src={props.data.iconUrl}
          alt="forecast weather icon"
          className="WeatherForecast-icon"
        />
        <div>
          <span className="WeatherForecast-temp-max">19°</span>
          <span className="WeatherForecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
