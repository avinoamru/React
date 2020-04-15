import React from "react";
import { Weather } from "./Weather";
import { WeatherProvider } from "./WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
};

export default App;
