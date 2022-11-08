import React from "react";

function ForecastDay(props) {
  let date = new Date(props.data.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = date.getDay();

  return (
    <div>
      <h3>{days[day]}</h3>
      <img
        src={props.data.condition.icon_url}
        alt="forecast weather icon"
        className="WeatherForecast-icon"
      />
      <div>
        <span className="WeatherForecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}

export default ForecastDay;
