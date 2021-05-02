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
                soma += consulta[indicador];
            }
          }
          media.push(soma);
       });
        
       var legenda = [];
       media.forEach(valor => {
          legenda.push((media.indexOf(valor)+1)+"º consulta")
       });
        const data = {
            labels: legenda,
            datasets: [
              {
                
                data: media,
                fill: true,
                backgroundColor: 'rgb(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.3,
              },
            ],
           

          };
          
          
        return (
            <>
                <Line data = {data} options= {{

scales: {
    xAxes: [{
        gridLines: {
            display:false
        }
    }],
    yAxes: [{
        gridLines: {
            display:false
        }
    }]
},
title:{
display:true,
text:'Minha pica',
fontiSize:64,
}

}}/>
            </>)

    }


}



export default GraficoEvolucaoPaciente;