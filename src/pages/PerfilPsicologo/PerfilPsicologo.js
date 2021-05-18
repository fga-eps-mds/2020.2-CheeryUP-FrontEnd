import React from "react"
import "../../style/pages/PerfilPsicologo/PerfilPsicologo.css"
import NavbarPerfil from "../../components/Navbar/NavbarPsicPerfil"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PerfilPsicologo = () => {
    const { psic } = useSelector((state) => state);
    return (
      <div className="perfil-psicologo-container">
        <NavbarPerfil />

        <div className="all">
          <div className="left">
            <div className="data">
              <p>
                <strong>Seus Dados</strong>
              </p>
              <p>Nome: {psic.name}</p>
              <p>Email: {psic.user.email}</p>
              <p>Numero do CRP: {psic.nCRP}</p>
              <Link to="/AtualizarDadosPessoais">
                <button>Alterar Dados</button>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="rigth-content">
              <img src="/img/imgPerfilPsicologo.png" alt="imagem psicologo" />
              <div className="buttons">
                <Link to="/ListaPacientes">
                  <button>Lista de Pacientes</button>
                </Link>
                <Link to="#">
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