import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = (props) => {
  const [topics, setTopics] = useState({
    gs: "gs",
    dt: "dt",
  });
};
