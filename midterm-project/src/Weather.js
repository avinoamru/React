import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "./WeatherContext";
import { Content } from "./Content";

const api_key = "d9346072d6699bbf487242a9cdecda9b";
const capitalize = (str) => {
  if (typeof str === "string") {
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }
};

export const Weather = () => {
  const [weather, setWeather] = useContext(WeatherContext);

  useEffect(() => {
    console.log("The Weather useEffect is running here");

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${api_key}`
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
            city: "",
            def_c: Number(cel(mainData.temp).toFixed(2)),
            def_f: Number(fahr(mainData.temp).toFixed(2)),
            def_feel_c: Number(cel(mainData.feels_like).toFixed(2)),
            def_feel_f: Number(fahr(mainData.feels_like).toFixed(2)),
          });
        })
        .catch((err) => console.log(err))
    );
  }, []);

  const handleCityChange = (event) => {
    setWeather({
      ...weather,
      city: event.target.value,
    });
  };

  const searchCity = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${weather.city}&appid=${api_key}`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          let mainData = data.main;
          const cel = (c) => (c = c - 273.15);
          const fahr = (f) => (f = ((f - 273.15) * 9) / 5 + 32);

          setWeather({
            ...weather,
            title: capitalize(weather.city),
            city: "",
            def_c: Number(cel(mainData.temp).toFixed(2)),
            def_f: Number(fahr(mainData.temp).toFixed(2)),
            def_feel_c: Number(cel(mainData.feels_like).toFixed(2)),
            def_feel_f: Number(fahr(mainData.feels_like).toFixed(2)),
          });
        })
        .catch((err) => console.log(err))
    );
  };

  return (
    <div className="weather">
      <Content
        city={weather.city}
        title={weather.title}
        cel={weather.def_c}
        fahr={weather.def_f}
        feel_c={weather.def_feel_c}
        feel_f={weather.def_feel_f}
        wind={weather.wind}
        searchFunc={searchCity}
        handleCityChange={handleCityChange}
      />
    </div>
  );
};
