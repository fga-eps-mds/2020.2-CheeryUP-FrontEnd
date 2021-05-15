

import React, { Fragment, useEffect, useCallback, useState } from "react";
import "../../style/pages/Lista/Lista.css";
import useFormDelPaciente from "../../components/useFormDelPaciente";
import NavbarPsicologo from "../../components/Navbar/NavbarPsicologo";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setPac } from "../../store/Pacientes/actions.js";
import { Link } from "react-router-dom";
//import Pacientes from "./Pacientes";

const ListaConsultas = ({ SubmitForm }) => {
  /*
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
*/

  return (
    <Fragment>
        <div className="body-content">
            <NavbarPsicologo/>

            <main className="main-content">
                <div className="upper-main-content">
                    <h2 class="page-name">Lista Consultas</h2>
                    <Link to="/CadastrarPaciente">  
                    <button
                        type="submit"
                        onClick=""/*{handleSubmit}*/
                        className="default-button"
                    > Registrar consulta</button>
                    </Link>
                </div>
                <table className="table-content" cellspacing="10">
                        <thead>
                        {/** constante, logo não mudará. É o header da table */}
                        <tr className="table-header-columns">
                            <th className="table-header-option">Data registrada</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>                            
                            <td>20-02-2021</td>
                            <td><button type="button" className="delete-button">x</button></td>
                        {/* tbody é onde sera inserido os individous */}
                        {/*
                        {pac.map((paciente, index) => (
                            <Pacientes paciente={paciente} key={index}></Pacientes>
                        ))} */}

                        </tbody>
                </table>
            </main>
        </div>
    </Fragment>
  );
};

export default ListaConsultas;
