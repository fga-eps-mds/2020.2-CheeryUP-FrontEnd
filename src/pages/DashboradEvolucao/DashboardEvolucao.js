import {Component, Fragment} from 'react';
import React from 'react';
import GraficoEvolucaoPaciente from '../../components/Graficos/GraficoEvolucaoPaciente';



class DashboardEvolucao extends Component {
    render() {
        return (
            <Fragment>
                <h2>Hallou</h2>
               <GraficoEvolucaoPaciente/>
            </Fragment>
        )
    }
}

export default DashboardEvolucao;
