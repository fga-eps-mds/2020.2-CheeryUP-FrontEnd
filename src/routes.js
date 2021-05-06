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
import AttDadosPsico from './pages/AtualizaDadosPessoais/AtualizarDadosPessoais';
import AttSenha from './pages/AtualizaSenha/AtualizaSenha';
import PerfilPsicologo from './pages/PerfilPsicologo/PerfilPsicologo';
import DashboardPacientes from './pages/DashboardPacientes/DashboardPacientes'
import RegistroConsulta from './pages/Registrar/RegistroConsulta'

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
        <Route path="/RegistroConsulta" component={RegistroConsulta}/>

        <Route
          Route
          path="/CadastrarPaciente"
          isAuth={auth}
          component={CadastroPac}
        />
        <PrivateRoute
          Route
          path="/AtualizarPaciente"
          isAuth={auth}
          component={AttDadosPac}
        />
        <PrivateRoute
          Route
          path="/PerfilPsicologo"
          isAuth={auth}
          component={PerfilPsicologo}
        />
        <PrivateRoute
          Route
          path="/DashboardPacientes"
          isAuth={auth}
          component={DashboardPacientes}
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
