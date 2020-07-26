import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const handleBetInput = (e) => {
  console.log(e.target.value);
  return e.target.value;
};

const handleClick = () => {
  // This is where I stuck...
};

function App() {
  const budget = useSelector((state) => state);
  return (
    <div className="App-container">
      <Navbar></Navbar>
      <h1>{budget}</h1>
      <input type="number" id="bet-amount" onChange={handleBetInput} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Bet
      </button>
    </div>
  );
}

export default App;
