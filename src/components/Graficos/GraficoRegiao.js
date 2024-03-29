import { Pie } from 'react-chartjs-2';
import axiosInstance from '../../services/apiToken'
import { Component } from 'react'
import { connect } from 'react-redux'

class GraficoRegiao extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            pessoas: [],
        }
    }
   
    async componentDidMount() {
        const response = await axiosInstance.get(`api/psicologos/${this.props.psic.user.username}/pacientes/`);
        this.setState({ pessoas: response.data });
    }
    
    render() {
        const { pessoas } = this.state;
        var regioes = pessoas.map(pessoa => pessoa.regiao);

        var legenda = [];
        var qtdRegioes = [];

        regioes.forEach(regiao => {
            if (!legenda.includes(regiao)) {
                legenda.push(regiao);
                qtdRegioes.push(1);
            }
            else {
                qtdRegioes[legenda.indexOf(regiao)] += 1;
            }
        });

        legenda.forEach(regiao => {
            switch (regiao) {
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AS":
                    legenda[legenda.indexOf(regiao)] = "Asa Sul"
                    break;
                case "AN":
                    legenda[legenda.indexOf(regiao)] = "Asa Norte"
                    break;
                case "AR":
                    legenda[legenda.indexOf(regiao)] = "Arniqueiras"
                    break;
                case "BZ":
                    legenda[legenda.indexOf(regiao)] = "Brazilândia"
                    break;
                case "CA":
                    legenda[legenda.indexOf(regiao)] = "Candangolândia"
                    break;
                case "CI":
                    legenda[legenda.indexOf(regiao)] = "Ceilândia"
                    break;
                case "CZ":
                    legenda[legenda.indexOf(regiao)] = "Cruzeiro"
                    break;
                case "FE":
                    legenda[legenda.indexOf(regiao)] = "Fercal"
                    break;
                case "GA":
                    legenda[legenda.indexOf(regiao)] = "Gama"
                    break;
                case "GR":
                    legenda[legenda.indexOf(regiao)] = "Guará"
                    break;
                case "IT":
                    legenda[legenda.indexOf(regiao)] = "Itapoã"
                    break;
                case "JB":
                    legenda[legenda.indexOf(regiao)] = "Jardim Botânico"
                    break;
                case "LS":
                    legenda[legenda.indexOf(regiao)] = "Lago Sul"
                    break;
                case "LN":
                    legenda[legenda.indexOf(regiao)] = "Lago Norte"
                    break;
                case "NB":
                    legenda[legenda.indexOf(regiao)] = "Núcleo Bandeirante"
                    break;
                case "PW":
                    legenda[legenda.indexOf(regiao)] = "Park Way"
                    break;
                case "PA":
                    legenda[legenda.indexOf(regiao)] = "Paranoá"
                    break;
                case "PL":
                    legenda[legenda.indexOf(regiao)] = "Planaltina"
                    break;
                case "PP":
                    legenda[legenda.indexOf(regiao)] = "Plano Piloto"
                    break;
                case "RE":
                    legenda[legenda.indexOf(regiao)] = "Recanto das Emas"
                    break;
                case "SA":
                    legenda[legenda.indexOf(regiao)] = "Samambaia"
                    break;
                case "SM":
                    legenda[legenda.indexOf(regiao)] = "Santa Maria"
                    break;
                case "SB":
                    legenda[legenda.indexOf(regiao)] = "São Sebastião"
                    break;
                case "SCIA":
                    legenda[legenda.indexOf(regiao)] = "SCIA"
                    break;
                case "RF":
                    legenda[legenda.indexOf(regiao)] = "Riacho Fundo"
                    break;
                case "RFII":
                    legenda[legenda.indexOf(regiao)] = "Riacho Fundo II"
                    break;
                case "SI":
                    legenda[legenda.indexOf(regiao)] = "SIA"
                    break;
                case "SO":
                    legenda[legenda.indexOf(regiao)] = "Sobradinho"
                    break;
                case "SOII":
                    legenda[legenda.indexOf(regiao)] = "Sobradinho II"
                    break;
                case "SN":
                    legenda[legenda.indexOf(regiao)] = "Sol Nascente"
                    break;
                case "SD":
                    legenda[legenda.indexOf(regiao)] = "Sudoeste"
                    break;
                case "TA":
                    legenda[legenda.indexOf(regiao)] = "Taguatinga"
                    break;
                case "VA":
                    legenda[legenda.indexOf(regiao)] = "Varjão"
                    break;
                case "VP":
                    legenda[legenda.indexOf(regiao)] = "Vicente Pires"
                    break;
                case "EO":
                    legenda[legenda.indexOf(regiao)] = "Entre outros"
                    break;
                default: 

            }
        })


        const data = {
            labels: legenda,
            datasets: [
                {
                    label: 'Pessoas por região',
                    data: qtdRegioes,
                    backgroundColor: [
                        'rgba(103, 160, 224, 0.7)', // azul claro
                        'rgba(249, 66, 58, 0.7)',//vermelho clar
                        'rgba(159, 219, 127, 0.7)', // verde claro

                        'rgba(45, 69, 97, 0.7)', // a escuro
                        'rgba(183, 49, 43, 0.7)', // vermelho escuro
                        'rgba(108, 194, 74, 0.7)', // verde escuro
                        
                    ],
                    borderColor: [
                        'rgba(103, 160, 224, 0.8)', // azul claro
                        'rgba(249, 66, 58, 0.8)',//vermelho clar
                        'rgba(159, 219, 127, 0.8)', // verde claro

                        'rgba(45, 69, 97, 0.8)', // a escuro
                        'rgba(183, 49, 43, 0.8)', // vermelho escuro
                        'rgba(108, 194, 74, 0.8)', // verde escuro
                      ],

                    
                },
            ],
        };
        return (
            <>
               <div>
                <Pie data={data}
                        width={500}
                        height={500}
                        options={{ maintainAspectRatio: false,
                            animation: {
                                duration: 2500,
                                easing: 'easeOutQuint',
                                delay: 500,  
                            } }}
                        />
                        </div>
            </>)
    }
}

function getState ( state ) {
    return { psic:state.psic}
}

export default connect(getState)(GraficoRegiao);