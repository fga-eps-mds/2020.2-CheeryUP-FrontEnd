import React from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'


class GraficoRegiao extends Component {
    state = {
        pessoas: [],
    }

    async componentDidMount() {
        const response = await api.get('/psicologos/33333333333/pacientes');
        this.setState({ pessoas: response.data });
    }

    render() {
        const { pessoas } = this.state;
        var regioes = pessoas.map(pessoa => pessoa.regiao);
        console.log("regioes Totais:", regioes);

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
                case "RF":
                    legenda[legenda.indexOf(regiao)] = "Riacho Fundo"
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
                case "RF2":
                    legenda[legenda.indexOf(regiao)] = "Riacho Fundo II"
                    break;
                case "SI":
                    legenda[legenda.indexOf(regiao)] = "SIA"
                    break;
                case "SO":
                    legenda[legenda.indexOf(regiao)] = "Sobradinho"
                    break;
                case "SO2":
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
                case "EO":
                    legenda[legenda.indexOf(regiao)] = "Entre outros"
            }
        })

        console.log(legenda);

        const data = {
            labels: legenda,
            datasets: [
                {
                    label: 'Pessoas por região',
                    data: qtdRegioes,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                    ],

                    borderWidth: 1,
                },
            ],
        };
        return (
            <>
                <Bar data={data} />
            </>)

    }


}



export default GraficoRegiao;