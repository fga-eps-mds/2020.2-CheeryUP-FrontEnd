import React from "react"
import "../../style/pages/PerfilPsicologo/PerfilPsicologo.css"
import NavbarPerfil from "../../components/Navbar/NavbarPsicPerfil"
import { useSelector } from 'react-redux'

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
              <p>Nome: {psic.user.username}</p>
              <p>Email: {psic.user.email}</p>
              <p>CRP: {psic.nCRP}</p>
              <button>Alterar Dados</button>
            </div>
          </div>
          <div className="right">
            <div className="rigth-content">
              <img src="/img/imgPerfilPsicologo.png" alt="imagem psicologo" />
              <div className="buttons">
                <button>Lista de Pacientes</button>
                <button>Dashboards Gerais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PerfilPsicologo;