import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUP from './pages/Registrar/SignUP';
import Home from './pages/HomePage/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Home" component={Home} />
                <Route path="/SignUP" component={SignUP} />  
            </Switch>
        </BrowserRouter>
    );
}