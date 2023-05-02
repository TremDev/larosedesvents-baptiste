import React from "react";
import './index.css'

const Darkmode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") setDarkMode();

  const darkModeToggle = (e) =>
    e.target.checked ? setDarkMode() : setLightMode();
  return (
    <label className="switch">
      <input type="checkbox" onChange={darkModeToggle} defaultChecked={selectedTheme === "dark"} className="checkbox"/>
      <span className="slider "></span>
    </label>
    
  );
};

export default Darkmode;
