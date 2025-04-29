import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux";

export const ThemeProvider = ({ children }: any) => {
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const isDarkMode = mode === "dark";

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return children;
};
