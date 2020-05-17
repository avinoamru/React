import React, { useState, useEffect, useContext } from "react";
import GettingStarted from "./topics/GettingStarted";
import DataTypes from "./topics/DataTypes";
import { Context } from "../Context";
const Content = (props) => {
  const { getCurrentTopicsContext } = useContext(Context);
  const [currentTopic, setCurrentTopic] = getCurrentTopicsContext;
  console.log(currentTopic);
  const [topicContent, setTopicContent] = useState(GettingStarted);
  useEffect(() => {
    console.log(`Content Loaded`);

    switch (currentTopic) {
      case "Getting Started":
        setTopicContent(GettingStarted);
        break;
      case "Data Types":
        setTopicContent(DataTypes);
        break;
      default:
        console.log("default invoked");
    }
  }, [currentTopic]);
  return (
    <main className="main-content-container">
      <div className="content">{topicContent}</div>
    </main>
  );
};
export default Content;
