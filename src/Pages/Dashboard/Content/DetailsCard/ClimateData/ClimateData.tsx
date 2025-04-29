import React from "react";
import "./ClimateData.css";
import Humidity from "../../../../../assets/Icons/Humidity";
import Wind from "../../../../../assets/Icons/Wind";
import Pressure from "../../../../../assets/Icons/Pressure";
import UV from "../../../../../assets/Icons/UV";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Redux";

const ClimateData = () => {
  const { details } = useSelector((state: RootState) => state.Weather);
  return (
    <div className="column column-climate-data">
      <div className="climate-data-container">
        <div className="climate-box">
          <Humidity />
          <p className="data-value">{details?.humidity}%</p>
          <p className="data-label">Humidity</p>
        </div>
        <div className="climate-box">
          <Wind />
          <p className="data-value">{details?.wind_kph} km/h</p>
          <p className="data-label">Wind</p>
        </div>
        <div className="climate-box">
          <Pressure />
          <p className="data-value">{details?.pressure_mb} hPa</p>
          <p className="data-label">Pressure</p>
        </div>
        <div className="climate-box">
          <UV />
          <p className="data-value">{details?.uv}</p>
          <p className="data-label">UV</p>
        </div>
      </div>
    </div>
  );
};

export default ClimateData;
