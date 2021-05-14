import React, { useState, useEffect, useCallback } from "react";
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/Pacientes/actions.js'
import DeletarPaciente from './DeletarPac'
import { Link } from 'react-router-dom'
import {handleAge} from '../../helper/index'
import axiosInstance from '../../services/apiToken'
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removerPaciente } from "../../store/Pacientes/actions";
import axiosInstance from "../../services/apiToken";
import { Link } from "react-router-dom";

const Pacientes = ({ paciente }) => {
  const [iniciouDel, setIniciouDel] = useState(false);
  const { psic, pac, auth} = useSelector((state) => state);
  const dispatch = useDispatch();
  const removerPac = useCallback(
    (cpf) => dispatch(removerPaciente(cpf)),
    [dispatch]
  );
  
  const deletarPaciente = () => {
    axiosInstance
      .delete(`api/psicologos/${psic.user.username}/pacientes/${paciente.cpf}/`)
      .then(() => {
        removerPac(paciente.cpf);
        alert("Paciente deletado com sucesso!");
      })
      .catch((err) => alert("Impossível realizar essa operação!"));
  };

  const handleAge = (age) => {
    var [year, month, date] = age.split("-");
    var birthday = new Date(year, month, date);
    var ageDifference = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifference);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

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
                    <Link to ={`/ListaPacientes/${paciente.cpf}`} className="default-button">
                            Informações <img src="img/arrow.png" />
                    </Link>
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

export default Pacientes;
