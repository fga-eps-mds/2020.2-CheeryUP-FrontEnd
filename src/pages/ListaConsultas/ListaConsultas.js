import React, { Fragment, useEffect, useCallback} from "react";
import "../../style/pages/Lista/Lista.css";
import NavbarPsicologo from "../../components/Navbar/NavbarPsicologo";
import axiosInstance from "../../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setCons } from "../../store/Consulta/actions";
import { Link, useParams } from "react-router-dom";
import Consultas from "./Consulta";
//import Pacientes from "./Pacientes";

const ListaConsultas = ({ SubmitForm }) => {
  const { psic, cons } = useSelector((state) => state);
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

  function mostrarPopup(id){
    console.log(id);
  }

  return (
    <Fragment>
      <div className="body-content">
        <NavbarPsicologo />

        <main className="main-content">
          <div className="upper-main-content">
            <h2 className="page-name">Lista Consultas</h2>
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
          <table className="table-content" cellSpacing="10">
            <thead>
              <tr className="table-header-columns">
                <th className="table-header-option">Data registrada</th>
              </tr>
            </thead>

            {cons.map((consulta, index) => (
              <Consultas consulta={consulta} key={index}/>
            ))}
          </table>
        </main>
      </div>


    </Fragment>
  );
};

export default ListaConsultas;
