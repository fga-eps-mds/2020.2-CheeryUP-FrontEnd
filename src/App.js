import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Body from './components/Body/Body';
import About from './components/About/About';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Body />
      <About />
    </Router>
  
  );
}

export default App;