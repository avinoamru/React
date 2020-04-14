import React from "react";
import { Weather } from "./Weather";
export const Content = (props) => {
  return (
    <div className="weather-content container">
      <h3 id="content-title">{props.title}</h3>
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
  <button id="temp-format" onClick={props.tempFormat}>{props.formatType}</button>
        <div className="row">
          
            <div className="content-cells col-md-10 row" id="temp-cell">
              <ul>
              <li id="cel" className="col-md-12">Temp: {props.cel} C</li>
              <li id="farh" className="col-md-12">Temp: {props.fahr} F</li>
              </ul>
            </div>

            <div className="content-cells col-md-10 row" id="feel-cell">
              <ul>
              <li id="feel-cel" className="col-md-12">Feels like: {props.feel_c} C</li>
              <li id="feel-farh" className="col-md-12">Feels like: {props.feel_f} F</li>
              </ul>
            </div>
            
          </div>
        </div>
  );
};
