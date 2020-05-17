import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Tutorial from "./components/Tutorial";
import Footer from "./components/Footer";
import { Provider } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

console.log(typeof Tutorial);
const App = (props) => {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Nav />
          <Route exact path="/tutorial" component={Tutorial}>
            <Tutorial />
          </Route>
        </Router>
        <Footer />
      </Provider>
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
