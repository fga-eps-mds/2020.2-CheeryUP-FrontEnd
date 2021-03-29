import React, { Component } from 'react'
//import { useState } from 'react'
//import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button/Button"
import '../../style/pages/HomePage/Navbar.css'





class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className='logo-cheeryUp'>
                    <img src = '/imagens/logoUpper-removebg-preview.png' alt='Logo'/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
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

export default Navbar
