import {Component, Fragment} from 'react';
import React from 'react';
import GraficoEstabilidade from '../../components/Graficos/GraficoEstabilidadeEmocional';



class DashboardEstabilidade extends Component {
    render() {
        return (
            <Fragment>
                <h2>Hallou</h2>
               <GraficoEstabilidade/>
            </Fragment>
        )
    }
}

export default DashboardEstabilidade;
