import React from "react";
import "./HourlyForecast.css";
import navigation from "../../../../assets/Images/navigation.png";
import { useSelector } from "react-redux";
import Loading from "../../../../component/Loading/Loading";
import { RootState } from "../../../../Redux";

const HourlyForecast = () => {
  const { hour, forecast, loading } = useSelector(
    (state: RootState) => state.Weather
  );
  if (loading)
    return (
      <div className="loading">
        <Loading />
      </div>
    );

  const desiredOrder = ["12:00", "15:00", "18:00", "21:00", "00:00"];

  return (
    <div className="hourly-forecast-container">
      <div className="hourlyForecast-title">
        <label>Hourly Forecast: {forecast && forecast[0]?.date}</label>
      </div>

      <div className="hourly-cards-container">
        {desiredOrder.map((targetTime) => {
          const data =
            forecast &&
            hour?.find((item: any) => item?.time?.split(" ")[1] === targetTime);
          if (!data) return null;

          return (
            <div className="card-hourlyForecast" key={targetTime}>
              <label>{targetTime}</label>
              <img
                className="arrow"
                src={data?.condition?.icon}
                alt="Weather Icon"
                loading="lazy"
              />
              <label>{data?.temp_c} °C</label>
              <img
                className="arrow"
                src={navigation}
                alt="Arrow"
                loading="lazy"
              />
              <label>{data?.wind}</label>
              <label>{data?.wind_kph}km/h</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
