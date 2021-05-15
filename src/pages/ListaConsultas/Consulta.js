import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removerPaciente } from "../../store/Pacientes/actions";
import axiosInstance from "../../services/apiToken";
import { Link } from "react-router-dom";

const Consulta = ({ consulta }) => {

  const [iniciouDel, setIniciouDel] = useState(false);
  const { psic, pac, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const removerPac = useCallback(
    (cpf) => dispatch(removerPaciente(cpf)),
    [dispatch]
  );

  const deletarPaciente = () => {
    axiosInstance
      .delete(`api/psicologos/${psic.user.username}/pacientes/${paciente.cpf}/consulta`)
      .then(() => {
        removerPac(paciente.cpf);
        alert("Consulta deletada com sucesso!");
      })
      .catch((err) => alert("Impossível realizar essa operação!"));
  };


  return (
    <tr>
      <td>
      </td>
      <td className="table-body-option">{consulta.data}</td>
      <td>
      {iniciouDel ? (
          <button
            type="button"
            className="delete-button"
            onClick={deletarPaciente}
            style={{ cursor: "pointer" }}
          >
            Deletar consulta?
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
    </tr>
  );
};

export default Consulta;
