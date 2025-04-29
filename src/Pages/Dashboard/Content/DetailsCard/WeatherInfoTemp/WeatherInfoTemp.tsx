import React from "react";
import "./WeatherInfoTemp.css";
import Sunrise from "../../../../../assets/Icons/Sunrise";
import Sunset from "../../../../../assets/Icons/Sunset";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Redux";

const WeatherInfoTemp = () => {
  const { details, astro } = useSelector((state: RootState) => state.Weather);

  return (
    <div className="weather-info-temp">
      <div className="temp">
        <p className="tempC">{details?.temp_c}°C</p>
        <p className="feels-like">
          Feels Like: <span>{details?.feelslike_c}°C</span>
        </p>
      </div>

      <div className="time-sections">
        <div className="sunrise">
          <Sunrise />
          <div className="time-label-container">
            <p>Sunrise</p>
            <p>{astro?.sunrise}</p>
          </div>
        </div>

        <div className="sunset">
          <Sunset />
          <div className="time-label-container">
            <p>Sunset</p>
            <p>{astro?.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfoTemp;
