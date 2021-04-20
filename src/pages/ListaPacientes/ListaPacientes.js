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
                        <h2 class= "page-name" >Lista Pacientes</h2>
                        <button type="button" className="default-button">Cadastrar paciente</button>
                        <form className="pesquisa">
                            <input type="search" id="texto-pesquisa" placeholder="Buscar por nome"/>
                            <img src="img/lupa.png" className="btn-pesquisa"/>
                        </form>
                    </div>
                    <table className= "table-content" cellspacing ="10px">
                        <thead> {/** constante, logo não mudará. É o header da table */}
                            <tr className="table-header-columns">
                                <th></th> 
                                <th className="table-header-option">Id</th>
                                <th className="table-header-option">Nome</th>
                                <th className="table-header-option">Idade</th>
                                <th className="table-header-option">Região</th>
         
                            </tr>
                        </thead>
                        <tbody> {/* tbody é onde sera inserido os individous */}
                            <tr> {/*Individuo 1*/ }
                                <td><button type="button" className="delete-button">X</button></td>
                                <td className="table-body-option" >1</td>
                                <td className="table-body-option" >Neymar</td>
                                <td className="table-body-option" >23</td>
                                <td className="table-body-option" >Ceilandia</td>
                                <td><button type="button" className="default-button">Informações</button></td>
                                <td><button type="button" className="default-button">Registar consulta</button></td>
                            </tr>

                            <tr> {/*Individuo 2*/ }
                                <td><button type="button" className="delete-button">X</button></td>
                                <td className="table-body-option" >2</td>
                                <td className="table-body-option" >Ednaldo Pereira</td>
                                <td className="table-body-option" >69</td>
                                <td className="table-body-option" >Mumbai</td>
                                <td><button type="button" className="default-button">Informações</button></td>
                                <td><button type="button" className="default-button">Registar consulta</button></td>
                            </tr>
                        </tbody>
                    </table>
                </main>

           </div>
            
        )
    }
}

export default ListaPacientes