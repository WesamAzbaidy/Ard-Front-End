import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../Redux/Login/LoginAction";
import ModeToggle from "./ModeToggle/ModeToggle";
import SearchBar from "./SearchBar/SearchBar";
import LocationButton from "./LocationButton/LocationButton";
import "./Header.css";
import LogoutIcon from "../../../assets/Icons/Logout";
import { AppDispatch } from "../../../Redux";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <header className="dashboard-header">
      <div className="header-section mode-section">
        <ModeToggle />
      </div>

      <div className="header-section search-section">
        <SearchBar />
      </div>

      <div className="header-section">
        <LocationButton />

        <div className="logout-section" onClick={handleLogout} title="Logout">
          <LogoutIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
