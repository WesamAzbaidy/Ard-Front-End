import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import Header from "./Header/Header";
import TimeCard from "./Content/TimeCard/TimeCard";
import DetailsCard from "./Content/DetailsCard/DetailsCard";
import DaysForecast from "./Content/DaysForecast/DaysForecast";
import HourlyForecast from "./Content/HourlyForecast/HourlyForecast";
import { fetchWeather } from "../../Redux/Weather/WeatherActions";
import { AppDispatch, RootState } from "../../Redux";

const Dashboard = () => {
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const { error } = useSelector((state: RootState) => state.Weather);

  const isDarkMode = mode === "dark";
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ latitude, longitude }));
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, [dispatch]);

  return (
    <div
      className={`dashboard-container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <Header />
      {error ? (
        <div className="errorMessage">
          <h2>{error}</h2>
        </div>
      ) : (
        <div className="dashboard-content">
          <div className="grid-container">
            <div className="card timeCard">
              <TimeCard />
            </div>
            <div className="card detailsCard">
              <DetailsCard />
            </div>
            <div className="card daysForecast">
              <DaysForecast />
            </div>
            <div className="card hourlyForecast">
              <HourlyForecast />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
