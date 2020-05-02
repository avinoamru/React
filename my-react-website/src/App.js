import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Tutorial from "./components/Tutorial";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <Nav />
    </div>
  );
};
export default App;

/*
<Router>
        <Home />
        <Tutorial />
      </Router>
      <Footer />
*/
