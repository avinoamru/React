import React from "react";
import { Weather } from "./Weather";
import { WeatherProvider } from "./WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <header className="header">
        <h1>Weather Cast</h1>
      </header>
      <div className="App container">
        <Weather />
      </div>
    </WeatherProvider>
  );
};

export default App;
