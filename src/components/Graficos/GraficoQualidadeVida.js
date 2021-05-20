import { Line } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'

class GraficoQualidadeVida extends Component {
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

  render() {
    var { consultas } = this.state;
    var mediaConsulta = [];
    var datasFormatadas = [];
    var date = new Date("2021-05-06");
    var txtBonito = date.toLocaleString();
    console.log(txtBonito);

    var soma = 0;
    consultas.forEach((consulta) => {
      datasFormatadas.push(this.formataData(consulta["data"]));
      for (var indicador in consulta) {
        if (
          indicador !== "id" &&
          indicador !== "data" &&
          indicador !== "produtividade"
        ) {
          if (
            indicador === "interessePelaVida" ||
            indicador === "exposiçãoRisco" ||
            indicador === "qualidadeNutritiva"
          )
            soma += consulta[indicador];
        }
      }
      mediaConsulta.push(soma);
    });

    var legenda = [];
    var i = 0;
    mediaConsulta.map((element) => {
      legenda.push(datasFormatadas[i]);
      i++;
    });

    const data = {
      labels: legenda,
      datasets: [
        {
          label: "Qualidade de Vida",
          data: mediaConsulta,
          fill: false,
          backgroundColor: "rgba(45, 69, 97, 0.8)",
          borderColor: "rgba(45, 69, 97, 0.8)",
          tension: 0.2,
        },
      ],
    };

    return (
      <>
        <div>
          <Line
            data={data}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  display: false,
                },
                x: {
                  display: true,
                },
              },
            }}
          />
        </div>
      </>
    );
  }
}



export default GraficoQualidadeVida;