import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [currentTopic, setCurrentTopic] = useState("");

  const handleContent = (e) => {
    setCurrentTopic(e.target.name);
  };

  const [topics, setTopics] = useState([
    <button
      className="topic-button"
      name="Getting Started"
      onClick={handleContent}
    >
      Getting Started{" "}
    </button>,

    <button className="topic-button" name="Data Types" onClick={handleContent}>
      Data Types{" "}
    </button>,

    <button className="topic-button" name="Variables" onClick={handleContent}>
      Variables{" "}
    </button>,

    <button className="topic-button" name="Numbers" onClick={handleContent}>
      Numbers{" "}
    </button>,

    <button className="topic-button" name="Strings" onClick={handleContent}>
      Strings{" "}
    </button>,

    <button className="topic-button" name="Booleans" onClick={handleContent}>
      Booleans{" "}
    </button>,

    <button className="topic-button" name="Operators" onClick={handleContent}>
      Operators{" "}
    </button>,

    <button className="topic-button" name="if/else" onClick={handleContent}>
      if/else{" "}
    </button>,

    <button
      className="topic-button"
      name="Lists (Arrays)"
      onClick={handleContent}
    >
      Lists (Arrays){" "}
    </button>,

    <button className="topic-button" name="Tuples" onClick={handleContent}>
      Tuples{" "}
    </button>,
    <button className="topic-button" name="For Loops" onClick={handleContent}>
      For Loops{" "}
    </button>,

    <button className="topic-button" name="While Loops" onClick={handleContent}>
      While Loops{" "}
    </button>,

    <button className="topic-button" name="Functions" onClick={handleContent}>
      Functions{" "}
    </button>,

    <button
      className="topic-button"
      name="Dictionaries"
      onClick={handleContent}
    >
      Dictionaries{" "}
    </button>,

    <button className="topic-button" name="Sets" onClick={handleContent}>
      Sets{" "}
    </button>,

    <button className="topic-button" name="Classes" onClick={handleContent}>
      Classes{" "}
    </button>,
  ]);

  return (
    <Context.Provider
      value={{
        getTopicsContext: [topics, setTopics],
        getCurrentTopicsContext: [currentTopic, setCurrentTopic],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
