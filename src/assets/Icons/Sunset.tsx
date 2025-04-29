import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux";

const Sunset = () => {
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const isDarkMode = mode === "dark";

  const strokeColor = isDarkMode ? "#ffffff" : "#000000";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18H2M6.31412 12.3141L4.8999 10.8999M17.6858 12.3141L19.1 10.8999M22 18H20M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M22 22H2M16 5L12 9M12 9L8 5M12 9V2"
        stroke={strokeColor}
        strokeWidth="0.96"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sunset;
