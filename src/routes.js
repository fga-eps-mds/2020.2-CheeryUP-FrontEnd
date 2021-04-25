import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUP from './pages/Registrar/SignUP';
import Home from './pages/HomePage/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login';
import RecSenha from './pages/RecSenha/RecSenha';
import AboutPage from './pages/AboutPage/AboutPage';
import ListaPacientes from './pages/ListaPacientes/ListaPacientes';
import CadastroPac from './pages/Registrar/CadastroPaciente';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/SignUP" component={SignUP} />  
                <Route path="/AboutPage" component={AboutPage} />
                <Route path="/Login" component={Login} />
                <Route path="/ListaPacientes" component={ListaPacientes} />
                <Route path="/CadastroPaciente" component={CadastroPac} />
=======
                <Route path="/RecuperarSenha" component={RecSenha} />
            </Switch>
        </BrowserRouter>
    );
}