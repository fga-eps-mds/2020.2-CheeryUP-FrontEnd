import React, { Component } from "react";
import "../../style/pages/ListaPacientes/ListaPacientes.css";
import useFormPaciente from "../../components/useFormPaciente";
import NavbarPsic from '../../components/Navbar/NavbarPsicologo'

const ListaPacientes = ({ SubmitForm }) => {
  const { handleChange, values, handleSubmit } = useFormPaciente(SubmitForm);
  return (
    <div className="body-content">
      <header className="top-content">
            <NavbarPsic />
      </header>

      <main className="main-content">
        <div className="upper-main-content">
          <h2 class="page-name">Lista Pacientes</h2>
          <button
            type="submit"
            onClick={handleSubmit}
            className="default-button"
          >
            Cadastrar paciente
          </button>
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
            {" "}
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
            {" "}
            {/* tbody é onde sera inserido os individous */}
            <tr>
              {" "}
              {/*Individuo 1*/}
              <td>
                <button type="button" className="delete-button">
                  X
                </button>
              </td>
              <td className="table-body-option">1</td>
              <td className="table-body-option">Neymar</td>
              <td className="table-body-option">23</td>
              <td className="table-body-option">Ceilandia</td>
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
            <tr>
              {" "}
              {/*Individuo 2*/}
              <td>
                <button type="button" className="delete-button">
                  X
                </button>
              </td>
              <td className="table-body-option">2</td>
              <td className="table-body-option">Ednaldo Pereira</td>
              <td className="table-body-option">69</td>
              <td className="table-body-option">Mumbai</td>
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
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ListaPacientes;
