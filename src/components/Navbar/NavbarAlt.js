import React, { Component } from 'react'
import { MenuItemsAlt } from "./MenuItems"
import { Button } from "../Button/Button"
import '../../style/pages/HomePage/Navbar.css'

/*
    Fiz esse novo arquivo no intuito de termos uma Navbar alternativa,
    que mostre apenas o botão Home.
    Essa Navbar seria usada nas seguintes paginas:
    About, Cadastro de Psicologo, Login, etc
*/

class NavbarAlt extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItemsAlt">
                <div className='logo-cheeryUpAlt'>
                    <img src = '/imagens/logoNavbarAlt.png' alt='Logo'/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItemsAlt.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default NavbarAlt