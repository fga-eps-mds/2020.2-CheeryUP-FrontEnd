import { Pie } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'

class GraficoAvaliaçãoMediaIndicadores extends Component {
    // Recupera dados da API
    state = {
        consulta: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/davi/pacientes/07483676167/consultas/1');
        this.setState({ consulta: response.data });
    }


    render() {
        // Calcula Media de cada indicador
        var avaliacao = [0,0,0];
        var avaliacaoBoa = [];
        var avaliacaoRuim = [];
        var avaliacaoRegular = [];
        var {consulta} = this.state
        
  
        for (var indicador in consulta) {
            if (indicador != 'id' && indicador != 'data'){ 
            if (consulta[indicador] == 1){
                avaliacao[0]++;
                avaliacaoBoa.push(indicador)
            }
            else if (consulta[indicador] == -1){
                avaliacao[1]++;
                avaliacaoRuim.push(indicador)
            }
            else{
                avaliacao[2]++;
                avaliacaoRegular.push(indicador)
            }
        }
        };
       console.log("Avaliações regular: ",avaliacaoRegular);
  
        // Implementação Grafica
        const data = {
            labels: ['Bom', 'Ruim', 'Regular'],
            datasets: [
                {
                    label: 'Avaliação de consulta',
                    data: avaliacao,
                    fill: false,
                    backgroundColor: [
                        'rgba(45, 69, 97, 0.7)',
                        'rgba(255, 66, 58, 0.7)',
                        'rgba(108, 194, 74, 0.7)',
                    ],
                    borderColor: [
                        'rgba(45, 69, 97)',
                        'rgba(249, 66, 58',
                        'rgba(108, 194, 74)',
                    ],
                    tension: 0.1,

                },
            ],
        };

        return (
            <>
                <Pie data={data}/>
                
            </>)

    }


}



export default GraficoAvaliaçãoMediaIndicadores;