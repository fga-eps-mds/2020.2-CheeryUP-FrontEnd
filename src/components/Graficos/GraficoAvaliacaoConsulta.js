import { Pie } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'

class GraficoAvaliaçãoMediaIndicadores extends Component {
    // Recupera dados da API
    state = {
        consulta: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/12312312312/pacientes/12312312311/consultas/200/');
        this.setState({ consulta: response.data });
    }


    render() {
        // Calcula Media de cada indicador
        var {consulta} = this.state
        delete consulta.registro
        var avaliacao = [0,0,0];
        console.log(consulta);
        for (var indicador in consulta) {
            console.log(avaliacao)
            if (consulta[indicador] == 1)
                avaliacao[0]++;
            else if (consulta[indicador] == -1)
                avaliacao[1]++;
            else
                avaliacao[2]++;
        };
       
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
                <Pie data={data} />
            </>)

    }


}



export default GraficoAvaliaçãoMediaIndicadores;