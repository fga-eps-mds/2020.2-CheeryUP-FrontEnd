import {Component, Fragment} from 'react';
import React from 'react';
import GraficoProdutividade from '../../components/Graficos/GraficoProdutividade';



class DashboardProdutividade extends Component {
    render() {
        return (
            <Fragment>
                <h2>Hallou</h2>
               <GraficoProdutividade/>
            </Fragment>
        )
    }
}

export default DashboardProdutividade;
