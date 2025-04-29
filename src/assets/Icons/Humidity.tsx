import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux";

const Humidity = () => {
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const isDarkMode = mode === "dark";

  const strokeColor = isDarkMode ? "#ffffff" : "#000000";

  return (
    <svg
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="none"
          stroke={strokeColor}
          strokeMiterlimit="10"
          strokeWidth="1.92"
          d="M.5,3.4c1.92,0,1.92.95,3.83.95S6.25,3.4,8.16,3.4s1.92.95,3.83.95,1.92-.95,3.83-.95,1.92.95,3.84.95,1.92-.95,3.84-.95
                    M.5,9.15c1.92,0,1.92.95,3.83.95s1.92-.95,3.83-.95,1.92.95,3.83.95,1.92-.95,3.83-.95,1.92.95,3.84.95,1.92-.95,3.84-.95
                    M.5,14.9c1.92,0,1.92.95,3.83.95s1.92-.95,3.83-.95,1.92.95,3.83.95,1.92-.95,3.83-.95,1.92.95,3.84.95,1.92-.95,3.84-.95
                    M.5,20.65c1.92,0,1.92,1,3.83,1s1.92-1,3.83-1,1.92,1,3.83,1,1.92-1,3.83-1,1.92,1,3.84,1,1.92-1,3.84-1"
        />
      </g>
    </svg>
  );
};

export default Humidity;
