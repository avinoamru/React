import React, { useState, useEffect } from "react";
export const Content = (props) => {
  const [content, setContent] = useState({
    city: props.city,
    cel: props.cel,
    fahr: props.fahr,
    feel: props.feel,
    wind: props.wind,
  });

  useEffect(() => {
    setContent({
      city: props.city,
      cel: props.cel,
      fahr: props.fahr,
      feel: props.feel,
      wind: props.wind,
    });
  }, []);

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
              {content.feel}
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
