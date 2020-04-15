import React from "react";
export const Content = (props) => {
  return (
    <div class="container-fluid weather-wrapper">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="content-wrapper container-fluid col-md-6 row">
          <section id="temp-side" class="col-md-8">
            <div class="temp-info">
              <button id="temp-format" onClick={props.tempFormat}>
                {props.formatType}
              </button>
              <span id="temp-city" class="temp-item">
                {props.title}
              </span>
              <span id="cel" class="temp-item temp">
                {props.cel} C
              </span>
              <span id="farh" class="temp-item temp">
                {props.fahr} F
              </span>
            </div>
          </section>

          <aside id="info-side" class="col-md-4">
            <input
              type="text"
              required
              id="city-input"
              placeholder="Enter City Here..."
              value={props.city}
              onChange={props.handleCityChange}
            />
            <button id="search-btn" onClick={props.searchFunc} type="submit">
              <i class="fa fa-search"></i>
            </button>
            <hr />

            <ul id="additional-info">
              <li id="feel-cel"> Feels like: {props.feel_c} C</li>
              <li id="feel-farh">Feels like: {props.feel_f} F</li>

              <li id="sunrise">Sunrise: {props.sunrise}</li>
              <li id="sunset">Sunset: {props.sunset}</li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  );
};
