import React, { Component } from 'react'
import { MenuItemsPsic } from "./MenuItems"
import { Button } from "../Button/Button"
import '../../style/pages/HomePage/NavbarPsic.css'

/*
    Fiz esse novo arquivo no intuito de termos uma Navbar do Psicólogo.
    Essa Navbar seria usada nas páginas após o Login.
*/

class NavbarPsic extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItemsPsic">
                <div className='logo-cheeryUpPsic'>
                        <img src = '/imagens/logoNavbarAlt.png' alt='Logo'/>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItemsPsic.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* <div className="dados-psicologo">
                    Nome do Psicólogo<br/>
                    Número do CRP
                </div> */}

            </nav>
        )
    }
}

export default NavbarPsic