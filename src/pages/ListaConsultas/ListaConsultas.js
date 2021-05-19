import React, { Fragment, useEffect, useCallback, useState } from "react";
import "../../style/pages/Lista/Lista.css";
import useFormDelPaciente from "../../components/useFormDelPaciente";
import NavbarPsicologo from "../../components/Navbar/NavbarPsicologo";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setCons } from "../../store/Consulta/actions";
import { Link, useParams } from "react-router-dom";
import Consultas from "./Consulta";
import { Icon } from 'semantic-ui-react'
//import Pacientes from "./Pacientes";

const ListaConsultas = ({ SubmitForm }) => {
  const { psic, pac, cons } = useSelector((state) => state);
  const dispatch = useDispatch();
  const changeCons = useCallback((cons) => dispatch(setCons(cons)), [dispatch]);
  const { infopaciente } = useParams();

  useEffect(() => {
    axiosInstance
      .get(
        `api/psicologos/${psic.user.username}/pacientes/${infopaciente}/consultas`
      )
      .then((data) => {
        changeCons(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <div className="body-content">
        <NavbarPsicologo />

        <main className="main-content">
          <div className="upper-main-content">
            <h2 class="page-name">Lista Consultas</h2>
            <Link to="/CadastrarPaciente">
              <button
                type="submit"
                onClick="" /*{handleSubmit}*/
                className="default-button"
              >
                {" "}
                Registrar consulta
              </button>
            </Link>
          </div>
          <table className="table-content" cellspacing="10">
            <thead>
              <tr className="table-header-columns">
                <th className="table-header-option">Data registrada</th>
              </tr>
            </thead>

            {cons.map((consulta, index) => (
              <tr>
                <td className="table-body-option">{consulta.data}</td>
                <td>
                  <Link to={`/RegistroConsulta/`}>
                    <button type="button" className="default-button" >
                      Dados da consulta 
                      <Icon name="arrow right" color="white" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}

            {/*             <tbody>
              <td>20-02-2021</td>

            </tbody> */}
          </table>
        </main>
      </div>
    </Fragment>
  );
};

export default ListaConsultas;
