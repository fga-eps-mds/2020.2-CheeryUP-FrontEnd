import React from "react"
import "../../style/pages/PerfilPsicologo/PerfilPsicologo.css"
import NavbarPerfil from "../../components/Navbar/NavbarPsicPerfil"
import { useSelector } from "react-redux";
import axiosInstance from "../../services/apiToken"
import {useHistory} from "react-router-dom" 
import { Link } from 'react-router-dom'

const PerfilPsicologo = () => {
    const history = useHistory();
    const { psic } = useSelector((state) => state);

    const handleSubmit = async (e) => {
        await axiosInstance
          .delete(`api/psicologos/${psic.user.username}/`)
          .then(() => {
            alert("Conta excluída com sucesso.");
            history.push("/");
        })
          .catch((err) => alert("Não foi possível excluir."));
      };
      
    return (
      <div className="perfil-psicologo-container">
        <NavbarPerfil />
        <div className="all">
          <div className="left">
            <div className="data">
              <p>
                <strong>Seus Dados</strong>
              </p>
              <p> Nome: {psic.name}</p>
              <p>Email: {psic.user.email}</p>
              <p>CRP: {psic.nCRP}</p>
              <button>Alterar Dados</button>
              <button type="submit" onClick={handleSubmit} >Excluir Conta</button>
            </div>
          </div>
          <div className="right">
            <div className="rigth-content">
              <img src="/img/imgPerfilPsicologo.png" alt="imagem psicologo" />
              <div className="buttons">
                <Link to="/ListaPacientes">
                  <button>Lista de Pacientes</button>
                </Link>
                <Link to="/DashboardGerais">
                  <button>Dashboards Gerais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PerfilPsicologo;