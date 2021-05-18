import React, { useEffect } from "react";
import { MenuItemsAlt } from "./MenuItems";
import "../../style/pages/HomePage/NavbarAlt.css";
import {Link} from 'react-router-dom'


/*
    Fiz esse novo arquivo no intuito de termos uma Navbar do Psicólogo.
    Essa Navbar seria usada nas páginas após o Login.
*/

export const NavbarAlt = () => {

  return (
    <nav className="NavbarItemsAlt">
        <div className='logo-cheeryUpAlt'>
                <img src = '/imagens/logoNavbarAlt.png' alt='Logo'/>
        </div>

        <ul className='nav-menuAlt'>
            {MenuItemsAlt.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>

    </nav>
  );
};

export default NavbarAlt;


