import React from 'react';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const App = () =>{
  return (
    <Router>
    <div className="App">
    <Nav></Nav>
    <Home></Home>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>


    </div>
    </Router>
  );
}

export default App;
