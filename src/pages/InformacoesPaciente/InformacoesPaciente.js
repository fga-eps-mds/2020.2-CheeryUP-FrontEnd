import {Component, Fragment} from 'react'
import GraficoEvolucaoPaciente from '../../components/Graficos/GraficoEvolucaoPaciente'
import GraficoEstabilidadeEmocional from '../../components/Graficos/GraficoEstabilidadeEmocional'

class InformacoesPaciente extends Component{

    render(){

        return(
            <Fragment>
                <GraficoEvolucaoPaciente/>
                <GraficoEstabilidadeEmocional />
            </Fragment>

        )
    }
}

export default InformacoesPaciente;