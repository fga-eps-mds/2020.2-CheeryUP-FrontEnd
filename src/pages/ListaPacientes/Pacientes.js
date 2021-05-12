import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/Pacientes/actions.js'
import DeletarPaciente from './DeletarPac'
import axiosInstance from '../../services/apiToken'
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPsic } from '../../store/Psicologo/actions';
import useFormDelPaciente from '../../components/useFormDelPaciente.js'

function handleAge (age) {
    var [year, month, date] = age.split("-");
    var birthday = new Date(year, month, date);
    var ageDifference = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifference);
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// function UserPsic() {
//     const {psic} = useSelector( (state) =>state)
//     const dispatch = useDispatch();
//     const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
//     useEffect(() => {
//       axiosInstance.get(`api/psicologos/${psic.user.username}/`).then((response) => {
//         console.log(response)
//         changePsic(response.data);
//       });
//     }, []);

//     var username = psic.user.username

//     return {username}
// }

class Pacientes extends React.Component {
    
    state = { iniciouDel : false }

    deletarPaciente = () => {
        const { iniciouDel } = this.state;
        if( !iniciouDel ) return this.setState({ iniciouDel : true });
        //const { userPsic } = useFormDelPaciente()
        //console.log(userPsic)
        DeletarPaciente( this.props.paciente.cpf)
        //console.log(this.props.paciente.cpf)
        
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
                        onClick={this.deletarPaciente}
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