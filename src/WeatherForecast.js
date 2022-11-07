import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  let [forecast, setForecast] = useState("null");

  function handleResponse(response) {
    setForecast(response.data);
  }

  if (forecast) {
    return (
      <div className="row WeatherForecast">
        <div className="col">
          <h3>Thu</h3>
          <img
            src="/"
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
  } else {
    let apiKey = "1bbac108daf130483ea36t3oa70341fd";
    let longitudes = props.data.coordinates.longitude;
    let langitudes = props.data.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${langitudes}&lon=${longitudes}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <p>Loading forecast data for {props.data.city}</p>;
  }
}

export default WeatherForecast;
