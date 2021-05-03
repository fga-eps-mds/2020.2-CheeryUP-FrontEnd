import { Line } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'

class GraficoEstabilidadeEmocional extends Component {

    state = {
        consultas: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/12312312312/pacientes/07483676169/consultas/');
        this.setState({ consultas: response.data });
    }


    render() {
         
        var {consultas} = this.state
        var mediaConsulta = [];
        mediaConsulta[0] = 0;
        var soma = 0;
        var qualidadeDeVida = [];
       consultas.forEach(consulta => {
        for (var indicador in consulta){    

            if (indicador != "registro" ){ 
              if (indicador == "convivioFamiliar" || indicador == "capacidadeDeSituaçõesDificeis" || indicador == "convivioAmigos")
                soma += consulta[indicador]*3;
              }
          }
          mediaConsulta.push(soma);
       });
        
       var legenda = [];
       var i = 0;
       mediaConsulta.forEach(valor => {
         if (i==0)
         legenda.push(" ")
         else 
          legenda.push(i+"º consulta")
         i++;
         
       });
        const data = {
            labels: legenda,
            datasets: [
              {
                label:'Estabilidade emocional',
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
                <Line data={data}/>
            </>)

    }


}



export default GraficoEstabilidadeEmocional;