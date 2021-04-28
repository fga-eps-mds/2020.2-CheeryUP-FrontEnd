import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api'
import {Component} from 'react'




class GraficoRegiao extends Component {

  state = {
    pessoas: [],
  }
  
    async componentDidMount(){
        const response = await api.get('/psicologos/33333333333/pacientes');
        this.setState({ pessoas: response.data });
      }

render() {       
    const { pessoas } = this.state;
    
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [10,10,10,10,10,10],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
      <>
        <Doughnut data={data} />
      </>)
    
  }

  
}



export default GraficoRegiao;