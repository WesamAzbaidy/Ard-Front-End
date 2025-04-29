import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModeAction } from "../../../../Redux/Mode/ModeAction";
import "./ModeToggle.css";
import { AppDispatch, RootState } from "../../../../Redux";

const ModeToggle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const isDarkMode = mode === "dark";

  const handleToggle = () => {
    dispatch(setModeAction(isDarkMode ? "light" : "dark"));
  };

  return (
    <div className="switch-container">
      <div className="custom-switch" onClick={handleToggle}>
        <div className={`switch-circle ${isDarkMode ? "dark" : "light"}`}></div>
      </div>
      <label className="switch-label">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
};

export default ModeToggle;
