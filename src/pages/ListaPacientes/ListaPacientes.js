import React, { Fragment, useEffect, useCallback, useState } from "react";
import "../../style/pages/Lista/Lista.css";
import useFormDelPaciente from "../../components/useFormDelPaciente";
import NavbarPsicPerfil from "../../components/Navbar/NavbarPsicologo";
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
    console.log(psic.user.username);
    var storage = localStorage.getItem("pac");
    if (storage) {
      changePac(JSON.parse(storage));
    }
    else {
      axiosInstance
        .get(`api/psicologos/${psic.user.username}/pacientes/`)
        .then((data) => {
          changePac(data.data);
          localStorage.setItem("pac", JSON.stringify(data.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);
  
  return (
    <Fragment>
      <div className="body-content">
        <NavbarPsicPerfil />

        <main className="main-content">
          <div className="upper-main-content">
            <h2 class="page-name">Lista Pacientes</h2>
            <Link to="/CadastrarPaciente">
              <button
                type="submit"
                onClick={handleSubmit}
                className="default-button"
              >
                {" "}
                Cadastrar Paciente
              </button>
            </Link>
            <form className="pesquisinfopacientea">
              <input
                type="search"
                infopaciente
                id="texto-pesquisa"
                placeholder="Buscar por nome"
              />
              <img src="img/lupa.png" className="btn-pesquisa" />
            </form>
          </div>
          <table className="table-content" cellspacing="10">
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
            {pac.map((paciente, index) => {
                console.log(index);
                return <Pacientes paciente={paciente} key={index} index = {index}/>;
              })}
            </tbody>
          </table>
        </main>
      </div>
    </Fragment>
  );
};

export default ListaPacientes;
