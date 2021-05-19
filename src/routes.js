import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUP from './pages/Registrar/SignUP';
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';
import RecSenha from './pages/RecSenha/RecSenha';
import AboutPage from './pages/AboutPage/AboutPage';
import ListaPacientes from './pages/ListaPacientes/ListaPacientes';
import CadastroPac from './pages/Registrar/CadastroPaciente';
import AttDadosPac from './pages/AtualizaDados/AttPaciente';
import AttSenha from './pages/AtualizaSenha/AtualizaSenha';
import PerfilPsicologo from './pages/PerfilPsicologo/PerfilPsicologo';
import RegistroConsulta from './pages/Registrar/RegistroConsulta'
import InformacoesPaciente from './pages/InformacoesPaciente/InformacoesPaciente'
import DashboardsGerais from './pages/DashboardsGerais/DashboardGerais'
 
import InfoPac from "./pages/InfoPaciente/InfoPaciente";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/Login", state: { from: props.location } }}
        />
      )
    }
  />
);


export default function Routes() {
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignUP" component={SignUP} />
        <Route path="/AboutPage" component={AboutPage} />
        <Route path="/Login" component={Login} />
        <Route path="/ListaPacientes" isAuth={auth} component={ListaPacientes} />
        <Route path="/RegistroConsulta/:infopaciente" component={RegistroConsulta}/>
        <Route path="/InformacoesPaciente/:infopaciente" component={InformacoesPaciente}/>
        <Route
          path= '/ListaPacientes/:infopaciente'
          //isAuth={auth}
          component = {InfoPac}
        />
        <Route path="/DashboardGerais" component={DashboardsGerais}/>
        <Route
          Route
          path="/CadastrarPaciente"
          isAuth={auth}
          component={CadastroPac}
        />
        <Route
          Route
          path="/AtualizarPaciente/:infopaciente"
          component={AttDadosPac}
        />
        <Route
          Route
          path="/PerfilPsicologo"
          isAuth={auth}
          component={PerfilPsicologo}
        />
       
        <PrivateRoute
          Route
          path="/RecuperarSenha"
          isAuth={auth}
          component={RecSenha}
        />
      </Switch>
    </BrowserRouter>
  );
}

