import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api'
import { Component } from 'react'

class GraficoProdutividade extends Component {
    // Recupera dados da API
    state = {
        consultas: [],
    }

    async componentDidMount() {
        const response = await api.get('api/psicologos/davi/pacientes/07483676167/consultas/');
        this.setState({ consultas: response.data });
    }


    render() {
        // Calcula Media de cada indicador
      
        var {consultas} = this.state
        var produtividade = [0,0,0]
        consultas.forEach(element => {
            console.log(element.produtividade);
            if(element.produtividade == 1){
                produtividade[0]++ 
            }
             if (element.produtividade == 0)
                produtividade[2]++
            if (element.produtividade == -1) 
                produtividade[1]++
        });
        // Implementação Grafica
        Doughnut.heigth(100)
        const data = {
            labels: ['Consultas Produtivas','Consultas improdutivas' ,'Produtividade estavel', ],
            datasets: [
                {
                    
                    label: 'Avaliação média do paciente',
                    data: produtividade,
                    fill: false,
                    backgroundColor: [
                        'rgba(45, 69, 97, 0.7)',
                        'rgba(255, 66, 58, 0.7)',
                        'rgba(108, 194, 74, 0.7)',
                    ],
                    borderColor: [
                        'rgba(45, 69, 97)',
                        'rgba(249, 66, 58',
                        'rgba(108, 194, 74)',
                    ],
                    tension: 0.1,
                },
            ],
        };
        
        return (
            <>
                <Doughnut data={data} />
            </>)

    }


}



export default GraficoProdutividade;