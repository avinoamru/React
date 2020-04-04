import React, { useState, useEffect } from "react";
import { Content } from "./Content";

const api_key = "d9346072d6699bbf487242a9cdecda9b";

export const Weather = () => {
  const [weather, setweather] = useState({
    def_c: 1,
    def_f: 0,
    def_wind: null,
    def_feel: null,
  });

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=${api_key}`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          let temp = data.main.temp;
          const cel = (c) => (c = c - 273.15);
          const fahr = (f) => (f = ((f - 273.15) * 9) / 5 + 32);
          console.log(data);
          setweather({
            def_c: Number(cel(temp).toFixed(2)),
            def_f: Number(fahr(temp).toFixed(2)),
          });
        })
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div className="weather">
      <Content city="vancouver" cel={weather.def_c} fahr={weather.def_f} />
    </div>
  );
};
