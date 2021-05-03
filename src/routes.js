import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUP from './pages/Registrar/SignUP';
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';
import RecSenha from './pages/RecSenha/RecSenha';
import AboutPage from './pages/AboutPage/AboutPage';
import ListaPacientes from './pages/ListaPacientes/ListaPacientes';
import CadastroPac from './pages/Registrar/CadastroPaciente';
import AttDadosPac from './pages/AtualizaDados/AttPaciente';
import PerfilPsicologo from './pages/PerfilPsicologo/PerfilPsicologo';
import DashboardPacientes from './pages/DashboardPacientes/DashboardPacientes'
import DashboardEvolucao from './pages/DashboradEvolucao/DashboardEvolucao'
import InformacoesPaciente from './pages/InformacoesPaciente/InformacoesPaciente'
import DashboardEstabilidade from './pages/DashboardEstabilidadeEmocional/DashboardEstabilidade';
import DashboardQualidadeVida from './pages/DashboardQualidadeVida/DashboardQualidadeVida'
import DashboardAvaliacaoMedia from './pages/DashboardAvaliacaoMedia/DashboardAvaliaçãoMedia'
import DashboardAvaliacaoConsulta from './pages/DashboardAvaliacaoConsulta/DashboardAvaliacaoConsulta'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/SignUP" component={SignUP} />  
                <Route path="/AboutPage" component={AboutPage} />
                <Route path="/Login" component={Login} />
                <Route path="/ListaPacientes" component={ListaPacientes} />
                <Route path="/CadastrarPaciente" component={CadastroPac} />
                <Route path="/AtualizarPaciente" component={AttDadosPac} />
                <Route path="/PerfilPsicologo" component={PerfilPsicologo} />
                <Route path="/DashboardPacientes" component={DashboardPacientes}/>
                <Route path="/DashboardEvolucao" component={DashboardEvolucao}/>
                <Route path="/DashboardEstabilidade" component={DashboardEstabilidade}/>
                <Route path="/DashboardQualidadeVida"  component={DashboardQualidadeVida}/>
                <Route path="/DashboardAvaliacaoMedia" component={DashboardAvaliacaoMedia}/>
                <Route path="/DashboardAvaliacaoConsulta" component={DashboardAvaliacaoConsulta}/>
                <Route path="/RecuperarSenha" component={RecSenha} />
                <Route path="/InformacoesPaciente" component={InformacoesPaciente}/>
            </Switch>
        </BrowserRouter>
    );
}