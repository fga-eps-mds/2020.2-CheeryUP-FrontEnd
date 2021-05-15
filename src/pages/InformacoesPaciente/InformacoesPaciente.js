import React, { useEffect, useState, Fragment } from "react";
import "../../style/pages/InfoPaciente/InfoPaciente.css";
//import { handleGenero, handleAge, handleRegiao } from "../../helper/index";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/apiToken";
import { useSelector } from "react-redux";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";

const InfoPac = () => {
  const { infopaciente } = useParams();
  const { psic } = useSelector((state) => state);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    axiosInstance
      .get(
        `api/psicologos/${psic.user.username}/pacientes/${infopaciente}/`
      )
      .then((value) => {
        setPaciente(value.data);
      })
      .catch((err) => console.log("Impossível realizar essa operação!"));

    console.log(infopaciente);
  }, [infopaciente]);

  useEffect(() => {
    console.log(paciente);
  }, [paciente]);

  const genero = "";

  return (
    <Fragment>
      <NavbarPsic />

      <div className="info-paciente">
        <div className="dados-pac">
          <h4>Dados do Paciente</h4> <br />
          Nome: {paciente.nome} <br />
          Idade: {paciente.data_nascimento} <br />
          CPF: {paciente.cpf} <br />
          Gênero: {paciente.genero} <br />
          Região: {paciente.regiao}
        </div>
        <div className="descricao">Descrição: {paciente.descricao}</div>
      </div>

      <div className="graficos"></div>
    </Fragment>
  );
};

export default InfoPac;
