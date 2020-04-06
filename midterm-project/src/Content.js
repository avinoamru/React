import React, { useState, useEffect } from "react";
export const Content = (props) => {
  const [content, setContent] = useState({
    city: props.city,
    cel: props.cel,
    fahr: props.fahr,
    feel_c: props.feel_c,
    feel_f: props.feel_f,
    wind: props.wind,
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
    <div className="content">
      <h3 id="content-title">{content.city}</h3>
      <table>
        <tbody>
          <tr>
            <td className="content-cells" id="cel-cell">
              {content.cel}
            </td>
            <td className="content-cells" id="fahr-cell">
              {content.fahr}
            </td>
            <td className="content-cells" id="feel-cell">
              <li>Feels like: {content.feel_c}</li>
              <li>Feels like F: {content.feel_f}</li>
            </td>
            <td className="content-cells" id="wind-cell">
              {content.wind}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
