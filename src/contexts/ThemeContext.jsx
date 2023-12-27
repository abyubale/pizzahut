import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const LS_THEME_DARK = "isDark";
const inititalTheme =
  localStorage.getItem(LS_THEME_DARK) !== null
    ? localStorage.getItem(LS_THEME_DARK) === "true"
    : prefersDarkMode;

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(inititalTheme);

  useEffect(() => {
    localStorage.setItem(LS_THEME_DARK, isDark);
  }, [isDark]);

  const lightToDarkHandler = () => setIsDark(true);
  const darkToLightHandler = () => setIsDark(false);
  return (
    <ThemeContext.Provider
      value={{ isDark, lightToDarkHandler, darkToLightHandler }}
    >
      {children}

      {isDark && (
        <style>
          {`body{
        background-color:#101010;
        color:white;
      }`}
        </style>
      )}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
