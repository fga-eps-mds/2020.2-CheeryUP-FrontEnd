import React, { Component } from 'react'
import '../../style/pages/ListaPacientes/ListaPacientes.css';

class ListaPacientes extends Component{
    render(){
        return(
           <div>
               <div className="topside">
                    <a href=""><img className="logo" src="img/logo_word.png"/></a>
                   <nav className="navbar">
                        <ul>
                            <a><li>Dashboard geral</li></a>
                            <a><li>Perfil</li></a>
                        </ul>
                   </nav>
                   <div className="info-psicologo">
                       <p>Nome do psicologo <br/> Numero CRP</p>
                   </div>
               </div>

            <main>
                <h2>Lista Pacientes</h2>
                <button type="button">Cadastrar paciente</button>
                <form className="pesquisa">
                    <input type="search" id="texto-pesquisa" placeholder="Buscar por nome"/>
                    <img src="img/lupa.png" className="btn-pesquisa"/>
                </form>

                <table >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Região</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>Excluir</td>
                        <td>1</td>
                        <td>Neymar</td>
                        <td>23</td>
                        <td>Ceilandia</td>
                        <td>Informações</td>
                        <td>Registar Consulta</td>
                    </tbody>
                </table>
            </main>

           </div>
            
        )
    }
}

export default ListaPacientes