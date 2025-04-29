import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../../../assets/Icons/SearchIcon";
import "./SearchBar.css";
import { fetchWeather } from "../../../../Redux/Weather/WeatherActions";
import { updateSearchInput } from "../../../../Redux/SearchInput/SearchInputAction";
import { AppDispatch, RootState } from "../../../../Redux";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector((state: RootState) => state.SearchInput);

  const fetchCurrentLocation = () => {
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
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    dispatch(updateSearchInput(value));

    if (value.trim() === "") {
      fetchCurrentLocation();
    }
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      dispatch(fetchWeather(inputValue.trim()));
    } else {
      fetchCurrentLocation();
    }
  };

  return (
    <div className="search-container">
      <span className="search-icon" onClick={handleSearch}>
        <SearchIcon />
      </span>
      <input
        type="text"
        className="search-input"
        placeholder="Search for your preferred city..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
