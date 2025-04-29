import React from "react";
import { useSelector } from "react-redux";
import "./TimeCard.css";
import Loading from "../../../../component/Loading/Loading";
import { RootState } from "../../../../Redux";

const TimeCard = () => {
  const { weather, loading } = useSelector((state: RootState) => state.Weather);
  if (loading)
    return (
      <div className="loading">
        {" "}
        <Loading />{" "}
      </div>
    );

  return (
    <div className="time-card">
      {weather && (
        <>
          <div className="city">{weather?.name}</div>
          <div className="current-time">{weather?.localtime}</div>
          <div className="day-date">
            <div className="day-and-date">{weather?.localdate}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TimeCard;
