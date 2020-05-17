import React, { useContext } from "react";
import { Context } from "../Context";
const TableOfContent = (props) => {
  const { getTopicsContext, getCurrentTopicsContext } = useContext(Context);
  const [topics, setTopics] = getTopicsContext;
  const [currentTopic, setCurrentTopic] = getCurrentTopicsContext;
  return (
    <div className="table-of-content-container">
      <ul>
        {topics.map((topic, index) => (
          <li key={index} className="toc-Links">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
