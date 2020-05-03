import React from "react";

const TableOfContent = (props) => {
  return (
    <div className="table-of-content-container">
      <ul>
        <li className="toc-links">
          <button onClick={props.handleContent}>Getting Started </button>
        </li>

        <li className="toc-links">
          <button onClick={props.handleContent}>Data Types </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Variables </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Numbers </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Strings </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Booleans </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Operators </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>if/else </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Lists (Arrays) </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Tuples </button>
        </li>
        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>For Loops </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>While Loops </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Functions </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Dictionaries </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Sets </button>
        </li>

        <li className="toc-links">
          {" "}
          <button onClick={props.handleContent}>Classes </button>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContent;
