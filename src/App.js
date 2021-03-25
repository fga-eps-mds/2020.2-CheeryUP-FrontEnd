import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Body from './components/Body/Body';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <About />
    </div>
  );
}

export default App;