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
    document.getElementById("farh").style.display = "none"
        document.getElementById("feel-farh").style.display = "none"

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
    ).then((res) =>{
      if(!res.ok){
        alert("City Not Found");
        
      }

      return res.json().then((data) => {
        let mainData = data.main;
        const cel = (c) => (c = c - 273.15);
        const fahr = (f) => (f = ((f - 273.15) * 9) / 5 + 32);
console.log(data)
        setWeather({
          ...weather,
          title: `${capitalize(weather.city)} ${data.sys.country}`,
          city: "",
          def_c: Number(cel(mainData.temp).toFixed(2)),
          def_f: Number(fahr(mainData.temp).toFixed(2)),
          def_feel_c: Number(cel(mainData.feels_like).toFixed(2)),
          def_feel_f: Number(fahr(mainData.feels_like).toFixed(2)),
        });
      } ).catch(err => console.log(err))
  })}  


  const tempFormat = () => {
      let formatType = document.getElementById("temp-format").innerHTML
     
      if (formatType === "F"){
        setWeather({
          ...weather,
         
          formatType: "C"
        })
        document.getElementById("cel").style.display = "none"
        document.getElementById("feel-cel").style.display = "none"
        document.getElementById("farh").style.display = "flex"
        document.getElementById("feel-farh").style.display = "flex"
        
      }
      else if(formatType === "C"){
        setWeather({
          ...weather,
          formatType: "F"

        })
        document.getElementById("farh").style.display = "none"
        document.getElementById("feel-farh").style.display = "none"
        document.getElementById("cel").style.display = "flex"
        document.getElementById("feel-cel").style.display = "flex"

      }
  }
  

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
        formatType={weather.formatType}
        tempFormat={tempFormat}
        handleCityChange={handleCityChange}
      />
    </div>
  );
};
