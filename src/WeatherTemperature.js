import React, { useState } from "react";

function WeatherTemperature(props) {
  let [temperature, setTemperature] = useState(props.celsius);

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(Math.round(props.celsius));
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.celsius * 9) / 5 + 32));
  }

  return (
    <span>
      <span className="temperature">{Math.round(temperature)}</span>
      <span className="units">
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </span>
  );
}

export default WeatherTemperature;
