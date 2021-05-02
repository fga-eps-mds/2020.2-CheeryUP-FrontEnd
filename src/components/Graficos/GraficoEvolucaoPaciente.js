import { Line } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'


class GraficoEvolucaoPaciente extends Component {

    state = {
        consultas: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/12312312312/pacientes/07483676169/consultas/');
        this.setState({ consultas: response.data });
    }

    render() {

        var {consultas} = this.state
        var media = [];
        var soma = 0;
       consultas.forEach(consulta => {
        for (var indicador in consulta){        
            if (indicador != "registro"){  
              if (indicador == "humor" || indicador == "estabilidadeDeEmoções"){
                soma += consulta[indicador]*3
              }  
              else{
                soma += consulta[indicador];
              }
              }
              
          }
          media.push(soma);
       });
        
       var legenda = [];
       var i = 1;
       media.forEach(valor => {
          legenda.push(i+"º consulta")
          i++;
       });
        const data = {
            labels: legenda,
            datasets: [
              {
                
                data: media,
                fill: false,
                backgroundColor: 'rgba(45, 69, 97, 0.8)',
                borderColor: 'rgba(45, 69, 97, 0.8)',
                tension: 0.1,
                
              },
            ],
          };
          
         

        return (

            <>
                <Line data = {data}/>
            </>)

    }


}



export default GraficoEvolucaoPaciente;