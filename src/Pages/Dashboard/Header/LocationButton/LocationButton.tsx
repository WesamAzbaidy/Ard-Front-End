import React from "react";
import { useDispatch } from "react-redux";
import LocationIcon from "../../../../assets/Icons/LocationIcon";
import "./LocationButton.css";
import { fetchWeather } from "../../../../Redux/Weather/WeatherActions";
import { clearSearchInput } from "../../../../Redux/SearchInput/SearchInputAction";
import { AppDispatch } from "../../../../Redux";

const LocationButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ latitude, longitude }));
          dispatch(clearSearchInput());
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  };

  return (
    <button className="location-button" onClick={handleClick}>
      <LocationIcon />
      Current Location
    </button>
  );
};

export default LocationButton;
