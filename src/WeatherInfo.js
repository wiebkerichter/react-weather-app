import React from "react";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container text-center location-div">
        <div className="row">
          <div className="col-8">
            <h2>{props.data.city}</h2>
            <p>
              Humidity {Math.round(props.data.humidity)} % | Wind{" "}
              {Math.round(props.data.wind)} km/h | {props.data.description}
            </p>
          </div>
          <div className="col-4">
            <img
              src={props.data.iconUrl}
              alt="current weather icon"
              className="weather-icon"
            />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
