import { Pie } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'

class GraficoAvaliaçãoMediaIndicadores extends Component {
    // Recupera dados da API
    state = {
        consultas: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/12312312312/pacientes/12312312311/consultas/');
        this.setState({ consultas: response.data });
    }


    render() {
        // Calcula Media de cada indicador
        var avaliacao = [0,0,0]
        var media = [];
        var posicaoIndicador;
        var { consultas } = this.state
        consultas.forEach(consulta => {
            posicaoIndicador = 0;
            delete consulta["registro"]
            for (var indicador in consulta) {
                if (consultas.indexOf(consulta) == 0)
                    media.push(consulta[indicador])
                else
                    media[posicaoIndicador] += consulta[indicador]
                posicaoIndicador++;
            }
        });
        media = media.map(valor => valor/consultas.length)
        media.forEach(mediaIndicador => {
            if (mediaIndicador > 0)
                avaliacao[0] ++;
            else if (mediaIndicador < 0)
                avaliacao[1]++;
            else 
                avaliacao[2]++;
        });

        // Implementação Grafica
        const data = {
            labels: ['Bom', 'Ruim', 'Regular'],
            datasets: [
                {
                    label: 'Avaliação média do paciente',
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