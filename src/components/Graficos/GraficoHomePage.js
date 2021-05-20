import { Doughnut } from 'react-chartjs-2';
import { Component } from 'react'

class GraficoProdutividade extends Component {
    // Recupera dados da API
   
    render() {
        // Calcula Media de cada indicador
       
        // Implementação Grafica
        const data = {
            labels: ['Consultas Produtivas','Consultas improdutivas' ,'Produtividade estavel', ],
            datasets: [
                {
                    
                    label: 'Avaliação média do paciente',
                    data: [15,20,30],
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
                <div>
                <Doughnut 
                    data={data}
                    height={400}
                    options={{ maintainAspectRatio: false  }}
                />
                </div>

                       
            </>)

    }


}



export default GraficoProdutividade;