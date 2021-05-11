import {Component, Fragment} from 'react';
import React from 'react';
import GraficoAvaliacaoConsulta from '../../components/Graficos/GraficoAvaliacaoConsulta';



class DashboardMediaSintomas extends Component {
    render() {
        return (
            <Fragment>
                <h2>Hallou</h2>
               <GraficoAvaliacaoConsulta/>
            </Fragment>
        )
    }
}

export default DashboardMediaSintomas;
