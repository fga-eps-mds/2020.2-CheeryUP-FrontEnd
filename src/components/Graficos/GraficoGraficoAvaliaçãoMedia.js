import { Pie } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'
import "../../style/pages/Graficos/Graficos.css"
class GraficoAvaliaçãoMediaIndicadores extends Component {
    // Recupera dados da API
    state = {
        consultas: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/davi/pacientes/07483676167/consultas/');
        this.setState({ consultas: response.data });
    }

    mostraAvaliações(avaliacoes = [], nomeAvaliacao = "") {
        if (avaliacoes.length == 0) {
            return <>
                <div>
                    <h2>{nomeAvaliacao}</h2>
                    <p>Nenhum indicador neste estado</p>
                </div>
            </>
        }
        return <>
            <div>
                <h2>{nomeAvaliacao}</h2> <ul>{avaliacoes.map(avaliacao => <li>{avaliacao}</li>)}</ul>
            </div>
        </>;
    }
    


    render() {
        // Calcula Media de cada indicador
        var avaliacao = [0,0,0]
        var media = [];
        var posicaoIndicador=0;
        var nomeIndicador = [];
        var avaliacaoBoa = [];
        var avaliacaoRuim = [];
        var avaliacaoRegular = [];
        var { consultas } = this.state
        consultas.forEach(consulta => {
            posicaoIndicador = 0;
           

            for (var indicador in consulta) {
                if (indicador != 'id' && indicador != 'data' && indicador != 'produtividade'){ 
                if (consultas.indexOf(consulta) == 0){
                    nomeIndicador.push(indicador)
                    media.push(consulta[indicador])
                }
                else
                    media[posicaoIndicador] += consulta[indicador]
                posicaoIndicador++;
            }
        }
        });
        posicaoIndicador = 0;
        media.forEach(mediaIndicador => {
            if (mediaIndicador > 1){
                avaliacaoBoa.push(nomeIndicador[posicaoIndicador])
                avaliacao[0] ++;
            }
            else if (mediaIndicador < -1){
                avaliacaoRuim.push(nomeIndicador[posicaoIndicador])
                avaliacao[1]++;
            }
            else {
                avaliacaoRegular.push(nomeIndicador[posicaoIndicador])
                avaliacao[2]++;
            }
            posicaoIndicador++;
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
               <div>
                <Pie data={data}
                        width={500}
                        height={500}
                        options={{ maintainAspectRatio: false  }}/>
                        </div>
                <div class="avaliacoes">
                    {this.mostraAvaliações(avaliacaoBoa, "Avaliações Boas")}
                    {this.mostraAvaliações(avaliacaoRuim, "Avaliações Ruins")}
                    {this.mostraAvaliações(avaliacaoRegular, "Avaliações Regulares")}
                </div>
                        
            </>)

    }


}



export default GraficoAvaliaçãoMediaIndicadores;