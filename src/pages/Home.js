import React from 'react';
//import ReactDOM from 'react-dom'
import Navbar from "../components/Navbar/Navbar";
import Body from '../components/Body/Body';
import About from '../components/About/About';
//import {BrowserRouter as Router} from 'react-router-dom';

function Home() {
  return(
    <div className='Homepage'>
      <Navbar />
      <Body />
      <About />
    </div>
  ) 
}

export default Home