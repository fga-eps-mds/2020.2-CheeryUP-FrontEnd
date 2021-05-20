import React, { Fragment, useEffect, useCallback } from "react";
import "../../style/pages/ListaPacientes/ListaPacientes.css";
import NavbarPsicPerfil from "../../components/Navbar/NavbarPsicologo";
import axiosInstance from "../../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setPac } from "../../store/Pacientes/actions.js";
import { Link } from "react-router-dom";
import Pacientes from "./Pacientes";

const ListaPacientes = ({ SubmitForm }) => {
  const { psic, pac } = useSelector((state) => state);
  //const { handleSubmit } = useFormDelPaciente(SubmitForm);
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
                className="default-button"
              > Cadastrar Paciente</button>
            </Link>
            <form className="pesquisinfopacientea">
              <input
                type="search"
                infopaciente
                id="texto-pesquisa"
                placeholder="Buscar por nome"
              />
              <img src="img/lupa.png" className="btn-pesquisa" alt='imagem'/>
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
                console.log(index);
                return <Pacientes paciente={paciente} key={paciente.cpf} index = {index}/>;
              })}
            </tbody>
          </table>
        </main>
      </div>
    </Fragment>
  );
};

export default ListaPacientes;
