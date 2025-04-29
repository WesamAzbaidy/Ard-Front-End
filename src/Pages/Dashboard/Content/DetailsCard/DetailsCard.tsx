// src/components/DetailsCard/DetailsCard.js
import React from "react";
import "./DetailsCard.css";
import WeatherInfoTemp from "./WeatherInfoTemp/WeatherInfoTemp";
import ClimateData from "./ClimateData/ClimateData";
import { useSelector } from "react-redux";
import Loading from "../../../../component/Loading/Loading";
import { RootState } from "../../../../Redux";

const DetailsCard = () => {
  const { details, loading } = useSelector((state: RootState) => state.Weather);

  if (loading)
    return (
      <div className="loading">
        {" "}
        <Loading />{" "}
      </div>
    );

  return (
    <div className="details-card">
      <div className="column temp-column">
        <WeatherInfoTemp />
      </div>

      <div className="column weather-column">
        <img
          className="weather-icon"
          src={details?.condition?.icon}
          alt="Weather Icon"
        />
        <p className="weather-text">{details?.condition?.text}</p>
      </div>

      <div className="column weather-column">
        <ClimateData />
      </div>
    </div>
  );
};

export default DetailsCard;
