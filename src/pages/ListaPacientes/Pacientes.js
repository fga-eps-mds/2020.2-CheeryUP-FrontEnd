import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removerPaciente } from "../../store/Pacientes/actions";
import axiosInstance from "../../services/apiToken";
import { Link } from "react-router-dom";

const Pacientes = ({ paciente, index}) => {
  const [iniciouDel, setIniciouDel] = useState(false);
  const { psic } = useSelector((state) => state);
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

  return (
    <tr>
      {/*Individuo 1*/}
      <td>
        {iniciouDel ? (
          <button
            type="button"
            className="delete-button"
            onClick={deletarPaciente}
            style={{ cursor: "pointer" }}
          >
            Deletar Paciente?
          </button>
        ) : (
          <button
            type="button"
            className="delete-button"
            onClick={() => setIniciouDel(true)}
            style={{ cursor: "pointer" }}
          >
            X
          </button>
        )}
      </td>
      <td className="table-body-option">{index + 1}</td>
      <td className="table-body-option">{paciente.nome}</td>
      <td className="table-body-opthandleAgeion">
        {handleAge(paciente.data_nascimento)}
      </td>
      <td className="table-body-option">{paciente.regiao}</td>
      <td>
        <Link to={`/InformacoesPaciente/${paciente.cpf}`}>
          <button type="button" className="default-button">
            Informações <img src="img/arrow.png" alt='seta'/>
          </button>
        </Link>
      </td>
      <td>
        <Link to={`/RegistroConsulta/${paciente.cpf}`}>
          <button type="button" className="default-button">
            Registar consulta <img src="img/arrow.png" alt='seta'/>
          </button>
        </Link>
      </td>
      <td>
        <Link to={`/AtualizarPaciente/${paciente.cpf}`}>
          <button type="button" className="default-button">
            Atualizar Paciente <img src="img/arrow.png" alt='seta'/>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Pacientes;
