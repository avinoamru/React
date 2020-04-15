import React from "react";
import { Weather } from "./Weather";
import { WeatherProvider } from "./WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <header className="header">
       <img src="./cloudy.svg" alt="logo" width="50" height="50" /> <h1>Weather Cast</h1>
      </header>
      
        <Weather />
      
    </WeatherProvider>
  );
};

export default App;
