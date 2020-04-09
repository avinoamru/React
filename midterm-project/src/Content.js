import React from "react";
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
      <table>
        <tbody className="row">
          <tr>
            <td className="content-cells col-md-6 row" id="temp-cell">
              <li className="col-md-6">{props.cel}</li>
              <li className="col-md-6">{props.fahr}</li>
            </td>

            <td className="content-cells col-md-6 row" id="feel-cell">
              <li className="col-md-6">Feels like: {props.feel_c}</li>
              <li className="col-md-6">Feels like F:{props.feel_f}</li>
            </td>
            <td className="content-cells col-md-3" id="wind-cell">
              {props.wind}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
