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
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
                    break;
                case "AC":
                    legenda[legenda.indexOf(regiao)] = "Águas Claras"
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