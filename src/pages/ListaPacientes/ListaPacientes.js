import React, { Fragment, useEffect, useCallback, useState } from "react";
import "../../style/pages/ListaPacientes/ListaPacientes.css";
import useFormPaciente from "../../components/useFormPaciente";
import NavbarPsicPerfil from "../../components/Navbar/NavbarPsicPerfil";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setPac } from "../../store/Pacientes/actions";
import { Link } from "react-router-dom";

const ListaPacientes = ({ SubmitForm }) => {
  const { psic, pac } = useSelector((state) => state);
  const history = useHistory();
  const { handleChange, values, handleSubmit } = useFormPaciente(SubmitForm);
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
          <NavbarPsicPerfil />

        <main className="main-content">
          <div className="upper-main-content">
            <h2 class="page-name">Lista Pacientes</h2>
            <Link to="/CadastrarPaciente">
              {" "}
              Cadastrar Paciente
              <button
                type="submit"
                onClick={handleSubmit}
                className="default-button"
              ></button>
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
              {/* tbody é onde sera inserido os individous */}
              {pac.map((paciente, index) => {
                return (
                  <tr>
                    {/*Individuo 1*/}
                    <td>
                      <button type="button" className="delete-button">
                        X
                      </button>
                    </td>
                    <td className="table-body-option">{index+1}</td>
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
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    </Fragment>
  );
};

export default ListaPacientes;
