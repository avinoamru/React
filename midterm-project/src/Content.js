import React, { useState, useEffect } from "react";
export const Content = (props) => {
  const [content, setContent] = useState({
    city: props.city,
    cel: props.cel,
    fahr: props.fahr,
    feel_c: props.feel_c,
    feel_f: props.feel_f,
    time: props.time,
  });

  useEffect(() => {
    setContent({
      ...content,
      city: props.city,
      cel: props.cel,
      fahr: props.fahr,
      feel_c: props.feel_c,
      feel_f: props.feel_f,
      wind: props.wind,
    });
  }, [
    props.city,
    props.cel,
    props.fahr,
    props.feel_c,
    props.feel_f,
    props.wind,
  ]);

  return (
    <div className="weather-content container">
      <h3 id="content-title">{content.city}</h3>
      <table>
        <tbody className= "row">
          <tr>
            <td className="content-cells col-md-6 row" id="temp-cell">
             <li className ="col-md-6">{content.cel}</li> 
             <li className ="col-md-6">{content.fahr}</li> 
            </td>
          
              
            
            <td className="content-cells col-md-6 row" id="feel-cell">
              <li className ="col-md-6">Feels like: {content.feel_c}</li>
              <li className ="col-md-6">Feels like F: {content.feel_f}</li>
            </td>
            <td className="content-cells col-md-3" id="wind-cell">
              {content.wind}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
