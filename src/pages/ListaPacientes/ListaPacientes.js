import React, { Fragment, useEffect, useCallback, useState } from "react";
import "../../style/pages/ListaPacientes/ListaPacientes.css";
import useFormDelPaciente from "../../components/useFormDelPaciente";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setPac } from "../../store/Pacientes/actions.js";
import { Link } from "react-router-dom";
import Pacientes from "./Pacientes";

const ListaPacientes = ({ SubmitForm }) => {
  const { psic, pac } = useSelector((state) => state);
  const history = useHistory();
  const { handleSubmit } = useFormDelPaciente(SubmitForm);
  const dispatch = useDispatch();
  const changePac = useCallback((pac) => dispatch(setPac(pac)), [dispatch]);

  useEffect(() => {
    
    axiosInstance
      .get(`api/psicologos/${psic.user.username}/pacientes/`)
      .then((data) => {
        changePac(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAge (age) {
    var [year, month, date] = age.split("-");
    var birthday = new Date(year, month, date);
    var ageDifference = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifference);
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
  
  return (
    <Fragment>
      <div className="body-content">
          <NavbarPsic />

        <main className="main-content">
          <div className="upper-main-content">
            <h2 className="page-name">Lista Pacientes</h2>
            <Link to="/CadastrarPaciente">
              {" "}
              <button
                type="submit"
                // onClick={handleSubmit}
                className="default-button-cadastro"
              >Cadastrar Paciente</button>
            </Link>
            <form className="pesquisa">
              <input
                type="search"
                id="texto-pesquisa"
                placeholder="Buscar por nome"
              />
              <img src="img/lupa.png" className="btn-pesquisa" />
            </form>
          </div>
          <table className="table-content" cellSpacing="10">
            <thead>
              {/** constante, logo não mudará. É o header da table */}
              <tr className="table-header-columns">
                <th></th>
                <th className="table-header-option">Id</th>
                <th className="table-header-option">Nome</th>
                <th className="table-header-option">Idade</th>
                <th className="table-header-option">Região</th>
              </tr>
            </thead>
            <tbody>
              {/* tbody é onde sera inserido os individous */}
              {
                pac.map((paciente, index) => (
                  <Pacientes paciente={paciente} key={index}></Pacientes>
                ))
              }
            </tbody>
          </table>
        </main>
      </div>
    </Fragment>
  );
};

export default ListaPacientes;
