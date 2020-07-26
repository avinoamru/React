import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { CasinoCraps } from "./components/CasinoCraps";

function App() {
  const [betValue, setBetValue] = useState();

  const budget = useSelector((state) => state.budget);
  const sum = useSelector((state) => state.sumOfDices);
  const isPass = useSelector((state) => state.isPass);

  const dispatch = useDispatch();
  const craps = CasinoCraps();

  const handleBetInput = (e) => {
    console.log(e.target.value);
    // return e.target.value;
    //convert to number, else it will be saved as a string
    setBetValue(Number(e.target.value));
  };
  const handlePassCheckbox = (e) => {
    dispatch({ type: "PASS_CHECK", payload: isPass });
  };
  const handleClick = () => {
    // This is where I stuck...
    console.log(craps);

    dispatch({
      type: craps.type,
      payload: betValue,
      sumOfDices: craps.payload,
    });
  };

  return (
    <div className="App-container">
      <Navbar></Navbar>
      <h1>{budget}</h1>
      <h1>{sum}</h1>
      <input type="number" id="bet-amount" onChange={handleBetInput} />
      <button onClick={handleClick}>Bet</button>
      <input type="checkbox" onChange={handlePassCheckbox}></input>
    </div>
  );
}

export default App;
