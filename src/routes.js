import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUP from './pages/Registrar/SignUP';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/SignUP" component={SignUP} />
                
            </Switch>
        </BrowserRouter>
    );
}