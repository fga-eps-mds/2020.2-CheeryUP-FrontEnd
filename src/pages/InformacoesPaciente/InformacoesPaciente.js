import React, { useEffect, useState, Fragment } from "react";
import "../../style/pages/InfoPaciente/InfoPaciente.css";
//import { handleGenero, handleAge, handleRegiao } from "../../helper/index";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/apiToken";
import { useSelector } from "react-redux";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import GraficoQualidadeVida from "../../components/Graficos/GraficoQualidadeVida";
import GraficoAvaliaçãoMediaIndicadores from "../../components/Graficos/GraficoGraficoAvaliaçãoMedia";
import GraficoEvolucaoPaciente from "../../components/Graficos/GraficoEvolucaoPaciente";
import GraficoEstabilidadeEmocional from "../../components/Graficos/GraficoEstabilidadeEmocional";
import GraficoProdutividade from "../../components/Graficos/GraficoHomePage";

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

  }, [infopaciente]);


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
          <br />
        </div>

        <div className="descricao">Descrição: {paciente.descricao}</div>
      </div>
      {Object.keys(paciente).length !== 0 ? (
        <Fragment>
          <div className= "container-graficos">
            <div className="wrap-graficos">
              <div className="graficos">
                <GraficoQualidadeVida
                  paciente={paciente}
                  usernamepsic={psic.user.username}
                />
              </div>
              <div className="graficos">
                <GraficoEvolucaoPaciente
                  paciente={paciente}
                  usernamepsic={psic.user.username}
                />
              </div>
              <div className="graficos">
                <GraficoEstabilidadeEmocional
                  paciente={paciente}
                  usernamepsic={psic.user.username}
                />
              </div>
            </div>
            <div className="wrap-graficos">
              <div className="graficos-pizzas">
                <GraficoProdutividade
                  paciente={paciente}
                  usernamepsic={psic.user.username}
                />
              </div>
            </div>
          </div>
          <div className="graficos-metricas">
            <GraficoAvaliaçãoMediaIndicadores
              paciente={paciente}
              usernamepsic={psic.user.username}
            />
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default InfoPac;
