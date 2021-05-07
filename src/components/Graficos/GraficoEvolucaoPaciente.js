import { Line } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'

class GraficoEvolucaoPaciente extends Component {

    state = {
        consultas: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/davi/pacientes/07483676167/consultas/');
        this.setState({ consultas: response.data });
    }
    formataData(age) {
      var [year, month, date] = age.split("-");
      return date + '/' + month + '/' + year;
    }
    render() {
        var datasFormatadas = []

        var {consultas} = this.state
        var mediaConsulta = [];

        var soma = 0;
        consultas.forEach(consulta => {
        datasFormatadas.push(this.formataData(consulta["data"]))
        for (var indicador in consulta){    
            if (indicador != 'id' && indicador != 'data'){ 
              if (indicador == "humor" || indicador == "estabilidadeDeEmoções")
                soma += consulta[indicador]*3
              else{
                soma += consulta[indicador];
              }
              }
          }
          mediaConsulta.push(soma);
       });
       var legenda = []
      
       var i = 0;
       mediaConsulta.map(element => {
            legenda.push(datasFormatadas[i])
          i++
       })
      
        const data = {
            labels: legenda,
            datasets: [
              {
                label:'Evolução do paciente',
                data: mediaConsulta,
                fill: false,
                backgroundColor: 'rgba(45, 69, 97, 0.8)',
                borderColor: 'rgba(45, 69, 97, 0.8)',
                tension: 0.1,
                
              },
            ],
          };
             
        return (

            <>
            <div>
            <Line data={data}
                        width={500}
                        height={500}
                        options={{ maintainAspectRatio: false , 
                          scales: {
                            y: {
                              display: false,
                            },
                            x: {
                              display: true,
                             
                            }
                          }
                        
                  }}/>
                  </div>
            </>)

    }


}



export default GraficoEvolucaoPaciente;