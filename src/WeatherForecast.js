import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";

function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "1bbac108daf130483ea36t3oa70341fd";
    let longitudes = props.data.coordinates.longitude;
    let langitudes = props.data.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${langitudes}&lon=${longitudes}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyforecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}

export default WeatherForecast;
