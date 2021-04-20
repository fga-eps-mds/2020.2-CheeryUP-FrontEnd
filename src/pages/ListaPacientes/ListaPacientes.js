import React, { Component } from 'react'
import '../../style/pages/ListaPacientes/ListaPacientes.css';

class ListaPacientes extends Component{
    render(){
        return(
           <div className="body-content">
               <header className="top-content">
                    <a href=""><img className="logo" src="img/logo_word.png"/></a>
                    {/* <div className="conteudo-header"> */}
                        <nav>
                            <ul className= "nav__links">
                                <li><a>Dashboard geral</a></li>
                                <li><a>Perfil</a></li>
                            </ul>
                        </nav>

                        <div className="info-psicologo">
                            <ul>
                                <li>Nome do psicologo</li>
                                <li>Numero CRP</li>
                            </ul>
                        </div>
                    {/*</div>*/}
                </header>

                <main className="main-content">
                    <div className="upper-main-content">
                        <h2>Lista Pacientes</h2>
                        <button type="button" className="default-button">Cadastrar paciente</button>
                        <form className="pesquisa">
                            <input type="search" id="texto-pesquisa" placeholder="Buscar por nome"/>
                            <img src="img/lupa.png" className="btn-pesquisa"/>
                        </form>
                    </div>
                    <table >
                        <thead>
                            <tr>
                                <th></th> 
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Região</th>
                                <th></th> 
                                <th></th> 
                            </tr>
                        </thead>
                        <tbody>
                            <td><button type="button" className="delete-button">X</button></td>
                            <td>1</td>
                            <td>Neymar</td>
                            <td>23</td>
                            <td>Ceilandia</td>
                            <td><button type="button" className="default-button">Informações</button></td>
                            <td><button type="button" className="default-button">Registar consulta</button></td>
                        </tbody>
                    </table>
                </main>

           </div>
            
        )
    }
}

export default ListaPacientes