import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/Pacientes/actions.js'
import axiosInstance from "../../services/apiToken";
import { useSelector } from "react-redux";

function handleAge (age) {
    var [year, month, date] = age.split("-");
    var birthday = new Date(year, month, date);
    var ageDifference = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifference);
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

class Pacientes extends React.Component {
    state = { iniciouDel : false }

    deletarPaciente = () => {
        const { iniciouDel } = this.state;
        if( !iniciouDel ) return this.setState({ iniciouDel : true });
        this.props.removerPaciente(this.props.paciente.cpf)
        
        
    }

    mostrarCpf = () => {
        console.log(this.props.paciente.cpf)
    }

    render() {
        const { paciente } = this.props;
        const { iniciouDel } = this.state;
        return(
            <tr>
                {/*Individuo 1*/}
                <td>
                    <button 
                        type="button" 
                        className="delete-button" 
                        onClick={this.mostrarCpf}
                        style={{cursor: "pointer"}}
                    >
                        { iniciouDel ? "Deletar Paciente?" : "X" }
                    </button>
                </td>
                <td className="table-body-option">1</td>
                <td className="table-body-option">{paciente.nome}</td>
                <td className="table-body-option">
                    {handleAge(paciente.data_nascimento)}
                </td>
                <td className="table-body-option">{paciente.regiao}</td>
                <td>
                    <button type="button" className="default-button">
                    Informações <img src="img/arrow.png" />
                    </button>
                </td>
                <td>
                    <button type="button" className="default-button">
                    Registar consulta <img src="img/arrow.png" />
                    </button>
                </td>
            </tr>
        )
    }
}

export default connect(null, actions)(Pacientes)