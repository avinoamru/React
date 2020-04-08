import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "./WeatherContext";
import { Content } from "./Content";

const api_key = "d9346072d6699bbf487242a9cdecda9b";
let cityInput = document.getElementById("city-input");

export const Weather = (props) => {
  const [weather, setWeather] = useContext(WeatherContext);

  useEffect(() => {
    console.log("The Weather useEffect is running here");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${weather.city}&appid=${api_key}`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          let mainData = data.main;
          const cel = (c) => (c = c - 273.15);
          const fahr = (f) => (f = ((f - 273.15) * 9) / 5 + 32);
          console.log(data);
          setWeather({
            ...weather,
            def_c: Number(cel(mainData.temp).toFixed(2)),
            def_f: Number(fahr(mainData.temp).toFixed(2)),
            def_feel_c: Number(cel(mainData.feels_like).toFixed(2)),
            def_feel_f: Number(fahr(mainData.feels_like).toFixed(2)),
          });
        })
        .catch((err) => console.log(err))
    );
  }, [weather.city]);

  const searchCity = () => {
    // fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${api_key}`
    // )
    //   .then(async (res) => {
    //     const data = await res.json();
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="weather">
      <Content
        city={weather.city}
        // searchFunc={}
        cel={weather.def_c}
        fahr={weather.def_f}
        feel_c={weather.def_feel_c}
        feel_f={weather.def_feel_f}
        wind={weather.wind}
        searchFunc={searchCity}
      />
    </div>
  );
};
