import React from "react";
export const Content = (props) => {
  return (
    <div className="weather-content container ">
                <button id="temp-format" onClick={props.tempFormat}>{props.formatType}</button>

            <input
        type="text"
        required
        id="city-input"
        placeholder="Enter City Here..."
        value={props.city}
        onChange={props.handleCityChange}
      />
      <button id="search-btn" onClick={props.searchFunc}>
        Search
      </button>

      <h3 id="content-title">{props.title}</h3>
       
          <div className="row">
            <div className="temp-container">

              <h6 id="cel" className="info-content col-md-6">Temp: {props.cel} C</h6>
              <h6 id="farh" className="info-content col-md-6">Temp: {props.fahr} F</h6>
              <h6 id="feel-cel" className="info-content col-md-6">Feels like: {props.feel_c} C</h6>
              <h6 id="feel-farh" className="info-content col-md-6">Feels like: {props.feel_f} F</h6>
              </div>
              <div className = "time-container">
              <h6 id="sunrise">Sunrise: {props.sunrise}</h6>
              <h6 id="sunset">Sunset: {props.sunset}</h6>
           
            
              
               </div>
               </div>
        </div>

  );
};
