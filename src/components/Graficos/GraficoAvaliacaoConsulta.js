import { Pie } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'
import "../../style/pages/Graficos/Graficos.css"
class GraficoAvaliaçãoMediaIndicadores extends Component {
    // Recupera dados da API
    state = {
        consulta: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/davi/pacientes/07483676167/consultas/1/');
        this.setState({ consulta: response.data });
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


    editaIndicador(texto = "") {
        switch (texto) {

            case "problemasPessoais":
                return "Problemas pessoais"

            case "humor":
                return "Humor"

            case "estabilidadeDeEmoções":
                return "Estabilidade de Emoções"

            case "interessePelaVida":
                return "Interesse pela vida"

            case "capacidadeDeSituaçõesDificeis":
                return "Capacidade de situações difíceis"

            case "convivioFamiliar":
                return "Convivio familiar"

            case "energiaSono":
                return "Energia e sono"

            case "convivioAmigos":
                return "Convívio entre amigos"

            case "conhecimentoDoenca":
                return "Conheciemnto da doençã"

            case "criseEspaçoInterior":

            case "exposiçãoRisco":
                return "Exposição de risco"

            case "qualidadeSono":
                return "Qualidade do sono"

            case "tentativaSuicidio":
                return "Tentativa de suicidio"

            case "qualidadeEscuta":
                return "Qualidade da escuta"

            case "maturidadeEmocional":


            case "qualidadeNutritiva":
                return "Qualidade Nutritiva"


            case "autoMedicacao":
                return "Automedicação"


            case "intoleranciaFrustração":
                return "Intolerância a frustração"

            default:
                return ""
                
        }










    }

    render() {
        // Calcula Media de cada indicador
        var avaliacao = [0, 0, 0];
        var avaliacaoBoa = [];
        var avaliacaoRuim = [];
        var avaliacaoRegular = [];
        var { consulta } = this.state


        for (var indicador in consulta) {
            if (indicador != 'id' && indicador != 'data' && indicador != 'produtividade') {
                console.log(indicador);
                if (consulta[indicador] == 1) {
                    avaliacao[0]++;
                    avaliacaoBoa.push(this.editaIndicador(indicador))
                }
                else if (consulta[indicador] == -1) {
                    avaliacao[1]++;
                    avaliacaoRuim.push(this.editaIndicador(indicador))
                }
                if (consulta[indicador] == 0) {
                    avaliacao[2]++;
                    avaliacaoRegular.push(this.editaIndicador(indicador))
                }
            }
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
                <div>
                    <Pie data={data}
                        width={500}
                        height={500}
                        options={{ maintainAspectRatio: false, }} />
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