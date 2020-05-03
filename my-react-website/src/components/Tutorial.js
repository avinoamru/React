import React from "react";
import TableOfContent from "./TableOfContent";
import Content from "./Content";
const Tutorial = (props) => {
  return (
    <div className="tutorial-page">
      <TableOfContent handleContent={(e) => e.target.innerHTML} />
      <Content topic={"gs"} />
    </div>
  );
};

export default Tutorial;
