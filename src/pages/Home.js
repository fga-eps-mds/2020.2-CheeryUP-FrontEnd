import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Body from '../components/Body/Body';
import About from '../components/About/About';
//import '../styles/Home';
import {BrowserRouter as Router} from 'react-router-dom';

function Home() {
  return(
    <div className='Homepage'>
      <Router>
        <Navbar />
        <Body />
        <About />
      </Router>
    </div>
  ) 
}

export default Home