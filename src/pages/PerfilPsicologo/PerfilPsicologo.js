import React from "react"
import "../../style/pages/PerfilPsicologo/PerfilPsicologo.css"
import NavbarPerfil from "../../components/Navbar/NavbarPsicPerfil"

const PerfilPsicologo = () => {
    return (
        <div className = "perfil-psicologo-container">
            <NavbarPerfil/>

            <div className = "all">
                <div className = "left">
                    <div className = "data">
                        <p><strong>Seus Dados</strong></p>
                        <p>Nome do Psicologo</p>
                        <p>Email</p>
                        <p>Numero do CRP</p>
                        <button>Alterar Dados</button>
                    </div>
                </div> 
                <div className = "right">
                    <div className = "rigth-content">
                        <img src="/img/imgPerfilPsicologo.png" alt="imagem psicologo"/>
                        <div className="buttons">
                            <button>Lista de Pacientes</button>
                            <button>Dashboards Gerais</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PerfilPsicologo;