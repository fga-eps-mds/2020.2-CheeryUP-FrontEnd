import { Pie } from "react-chartjs-2";
import api from "../../services/api";
import { Component } from "react";
import "../../style/pages/Graficos/Graficos.css";
class GraficoAvaliaçãoMediaIndicadores extends Component {
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

  editaIndicador(texto = "") {
    switch (texto) {
      case "problemasPessoais":
        return "Problemas pessoais";

      case "humor":
        return "Humor";

      case "estabilidadeDeEmoções":
        return "Estabilidade de Emoções";

      case "interessePelaVida":
        return "Interesse pela vida";

      case "capacidadeDeSituaçõesDificeis":
        return "Capacidade de situações difíceis";

      case "convivioFamiliar":
        return "Convivio familiar";

      case "energiaSono":
        return "Energia Sono"
      case "exposiçãoRisco":
        return "Exposição de risco";

      case "qualidadeSono":
        return "Qualidade do sono";

      case "tentativaSuicidio":
        return "Tentativa de suicidio";

      case "qualidadeEscuta":
        return "Qualidade da escuta";

      case "maturidadeEmocional":

      case "qualidadeNutritiva":
        return "Qualidade Nutritiva";

      case "autoMedicacao":
        return "Automedicação";

      case "intoleranciaFrustração":
        return "Intolerância a frustração";

      default:
        return "";
    }
  }

  mostraAvaliações(avaliacoes = [], nomeAvaliacao = "") {
    if (avaliacoes.length == 0) {
      return (
        <>
          <div>
            <h2>{nomeAvaliacao}</h2>
            <p>Nenhum indicador neste estado</p>
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          <h2>{nomeAvaliacao}</h2>{" "}
          <ul>
            {avaliacoes.map((avaliacao) => (
              <li>{avaliacao}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  render() {
    // Calcula Media de cada indicador
    var avaliacao = [0, 0, 0];
    var media = [];
    var posicaoIndicador = 0;
    var nomeIndicador = [];
    var avaliacaoBoa = [];
    var avaliacaoRuim = [];
    var avaliacaoRegular = [];
    var { consultas } = this.state;
    consultas.forEach((consulta) => {
      posicaoIndicador = 0;

      for (var indicador in consulta) {
        if (
          indicador != "id" &&
          indicador != "data" &&
          indicador != "produtividade"
        ) {
          if (consultas.indexOf(consulta) == 0) {
            nomeIndicador.push(indicador);
            media.push(consulta[indicador]);
          } else media[posicaoIndicador] += consulta[indicador];
          posicaoIndicador++;
        }
      }
    });
    posicaoIndicador = 0;
    media.forEach((mediaIndicador) => {
      if (mediaIndicador > 1) {
        avaliacaoBoa.push(this.editaIndicador(nomeIndicador[posicaoIndicador]));
        avaliacao[0]++;
      } else if (mediaIndicador < -1) {
        avaliacaoRuim.push(this.editaIndicador(nomeIndicador[posicaoIndicador]));
        avaliacao[1]++;
      } else {
        avaliacaoRegular.push(this.editaIndicador(nomeIndicador[posicaoIndicador]));
        avaliacao[2]++;
      }
      posicaoIndicador++;
    });

    // Implementação Grafica
    const data = {
      labels: ["Bom", "Ruim", "Regular"],
      datasets: [
        {
          label: "Avaliação média do paciente",
          data: avaliacao,
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
          <Pie
            data={data}
            width={400}
            height={450}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div class="avaliacoes">
          {this.mostraAvaliações(avaliacaoBoa, "Avaliações Boas")}
          {this.mostraAvaliações(avaliacaoRuim, "Avaliações Ruins")}
          {this.mostraAvaliações(avaliacaoRegular, "Avaliações Regulares")}
        </div>
      </>
    );
  }
}

export default GraficoAvaliaçãoMediaIndicadores;
