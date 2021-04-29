import {Component, Fragment} from 'react';
import React from 'react';
import GraficoRegiao from '../../components/Graficos/GraficoRegiao';



class DashboardPacientes extends Component {


    render() {
        const { value } = this.state
        return (
            <Fragment>
                <h2>Hallou</h2>
               <GraficoRegiao/>
            </Fragment>
        )
    }
}

export default DashboardPacientes;
