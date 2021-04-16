import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from "../../components/Navbar/Navbar";
import Body from '../../components/Body/Body';
import {BrowserRouter as Router} from 'react-router-dom';

function Home() {
  return(
    <div>
      <Navbar />
      <Body />
    </div>
  ) 
}

export default Home