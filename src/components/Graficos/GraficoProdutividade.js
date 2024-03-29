import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'
class GraficoProdutividade extends Component {
  // Recupera dados da API
  constructor(props) {
    super(props);
    this.state = {
      consultas: [],
    };
  }

  async componentDidMount() {
    const response = await api.get(
      `api/psicologos/${this.props.usernamepsic}/pacientes/${this.props.paciente.cpf}/consultas`
    );
    this.setState({ consultas: response.data });
  }
  formataData(age) {
    var [year, month, date] = age.split("-");
    return date + "/" + month + "/" + year;
  }

  mostraAvaliações(avaliacoes = [], nomeAvaliacao = "") {
    if (avaliacoes.length === 0) {
      return (
        <>
          <h2>{nomeAvaliacao}</h2>
          <p>Nenhum indicador neste estado</p>
        </>
      );
    }
    return (
      <>
        <h2>{nomeAvaliacao}</h2>{" "}
        <ul>
          {avaliacoes.map((avaliacao) => (
            <li>{avaliacao}</li>
          ))}
        </ul>
      </>
    );
  }

  render() {
    // Calcula Media de cada indicador
    var datasFormatadas = [];
    var { consultas } = this.state;
    var produtividade = [0, 0, 0];

    consultas.forEach((element) => {
      datasFormatadas.push(element.data);
      if (element.produtividade === 1) {
        produtividade[0]++;
      }
      if (element.produtividade === 0) {
        produtividade[2]++;
      }
      if (element.produtividade === -1) {
        produtividade[1]++;
      }
    });

    // Implementação Grafica
    const data = {
      labels: [
        "Consultas Produtivas",
        "Consultas improdutivas",
        "Produtividade estavel",
      ],
      datasets: [
        {
          label: "Avaliação média do paciente",
          data: produtividade,
          fill: false,
          backgroundColor: [
            "rgba(45, 69, 97, 0.7)",
            "rgba(255, 66, 58, 0.7)",
            "rgba(108, 194, 74, 0.7)",
          ],
          borderColor: [
            "rgba(45, 69, 97)",
            "rgba(249, 66, 58",
            "rgba(108, 194, 74)",
          ],
          tension: 0.1,
        },
      ],
    };

    return (
      <>
        <div>
          <Doughnut
            data={data}
            width={370}
            height={500}
            options={{ maintainAspectRatio: false  }}
          />
        </div>
      </>
    );
  }
}



export default GraficoProdutividade;