import {Component, Fragment} from 'react';
import React from 'react';
import GraficoQualidadeVida from '../../components/Graficos/GraficoQualidadeVida';



class DashboardEvolucao extends Component {
    render() {
        return (
            <Fragment>
                <h2>Hallou</h2>
               <GraficoQualidadeVida/>
            </Fragment>
        )
    }
}

export default DashboardEvolucao;
