import React from "react";
import { Weather } from "./Weather";
import { WeatherProvider } from "./WeatherContext";

const App = () => {
  const cityInput = document.getElementById("city-input");

  return (
    <WeatherProvider>
      <div className="App">
        <h1>Weather Cast</h1>

        <Weather />
      </div>
    </WeatherProvider>
  );
};

export default App;
