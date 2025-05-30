import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux";

const Wind = () => {
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const isDarkMode = mode === "dark";

  const fillColor = isDarkMode ? "#ffffff" : "#000000";
  return (
    <svg fill={fillColor} viewBox="0 -1 28 28" version="1.1">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Icon-Set-Filled"
            transform="translate(-468.000000, -832.000000)"
            fill={fillColor}
          >
            <path
              d="M490,846 L469,846 C468.447,846 468,846.447 468,847 C468,847.553 468.447,848 469,848 L488.833,848 C491.687,848 494,849.791 494,852 C494,854.209 492.291,856 488,856 L488,858 L490,858 C493.313,858 496,855.313 496,852 C496,848.687 493.313,846 490,846 L490,846 Z M482.002,850 L474,850 C473.447,850 473,850.448 473,851 C473,851.553 473.447,852 474,852 L482,852 C483.104,852 484,852.896 484,854 C484,855.104 483.104,856 482,856 L482,858 C484.209,858 486,856.209 486,854 C486,851.792 484.21,850.002 482.002,850 L482.002,850 Z M477,840 L489,840 C489.553,840 490,839.553 490,839 C490,838.448 489.553,838 489,838 L477,838 C476.447,838 476,838.448 476,839 C476,839.553 476.447,840 477,840 L477,840 Z M472,844 L490,844 C493.313,844 496,841.313 496,838 C496,834.687 493.313,832 490,832 L490,834 C492.822,834.531 494,835.791 494,838 C494,840.209 491.687,842 488.833,842 L472,842 C471.447,842 471,842.448 471,843 C471,843.553 471.447,844 472,844 L472,844 Z"
              id="wind"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Wind;
