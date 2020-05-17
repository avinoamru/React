import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { inc } from "./actions";
import { navbar, Navbar } from "./components";

function App() {
  // const counter = useSelector((state) => state.counter);
  // const name = useSelector((state) => state.name);
  // const dispatch = useDispatch();
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
