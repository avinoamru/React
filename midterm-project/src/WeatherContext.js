import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState({
    def_c: null,
    def_f: null,
    def_wind: null,
    def_feel_c: null,
    def_feel_f: null,
    wind: null,
    city: "",
    title: "Vancouver",
  });

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
