import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUP from './pages/Registrar/SignUP';
import Home from './pages/HomePage/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Home" component={Home} />
                <Route path="/SignUP" component={SignUP} />  
                <Route path="/About" component={About} />
            </Switch>
        </BrowserRouter>
    );
}