import React from "react";
import "./DaysForecast.css";
import { useSelector } from "react-redux";
import Loading from "../../../../component/Loading/Loading";
import { RootState } from "../../../../Redux";

const DaysForecast = () => {
  const { forecast, loading } = useSelector(
    (state: RootState) => state.Weather
  );
  if (loading)
    return (
      <div className="loading">
        {" "}
        <Loading />{" "}
      </div>
    );

  return (
    <div className="days-forecast">
      <div className="forecast-title">
        <label>5 Days Forecast</label>
      </div>

      <div className="forecast-table">
        {Array.isArray(forecast) &&
          forecast.map((item, index) => (
            <div className="forecast-table-item" key={index}>
              <img
                className="icon"
                src={item?.condition?.icon}
                alt="Forecast Icon"
              />
              <span className="temp">{item?.avgtemp_c} °C</span>
              <span className="label">{item?.date}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DaysForecast;
