import React, { useState, useEffect } from "react";
import GettingStarted from "./topics/GettingStarted";
import DataTypes from "./topics/DataTypes";
const Content = (props) => {
  const [currentTopic, setCurrentTopic] = useState(props.topic);

  useEffect(() => {
    console.log(`Content Loaded`);
    //   switch () {
    //     case "gs":
    //       setCurrentTopic(GettingStarted);
    //       break;
    //     case "dt":
    //       setCurrentTopic(DataTypes);
    //       break;
    //     default:
    //       alert("Wrong input");
    //   }
  }, []);
  return (
    <main className="main-content-container">
      <p>{currentTopic}</p>
    </main>
  );
};
export default Content;
