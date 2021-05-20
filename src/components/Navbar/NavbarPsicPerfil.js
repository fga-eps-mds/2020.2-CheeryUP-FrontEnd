import React, { useEffect, useCallback } from "react";
import "../../style/pages/HomePage/NavbarPsicPerfil.css";
import axiosInstance from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setPsic } from "../../store/Psicologo/actions";
import { MenuItemsPsicPerfil } from "./MenuItems";
import {Link} from 'react-router-dom'

/*
    Fiz esse novo arquivo no intuito de termos uma Navbar do Psicólogo.
    Essa Navbar seria usada nas páginas após o Login.
*/

export const NavbarPsicPerfil = () => {
  const {psic} = useSelector( (state) =>state)
  const dispatch = useDispatch();
  const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
  useEffect(() => {
    axiosInstance.get(`api/psicologos/${psic.user.username}/`).then((response) => {
      console.log(response)
      changePsic(response.data);
    });
  });
  useEffect( () => {
      console.log(psic)
  },[psic])
  
  return (
    <nav className="NavbarItemsPsic">
      <div className="logo-cheeryUpPsic">
        <img src="/imagens/logoNavbarAlt.png" alt="Logo" />
      </div>

      <ul className="nav-menuPsic">
        {MenuItemsPsicPerfil.map((item, index) => {
          return (  
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {
        <div className="dados-psicologo">
          {psic.name}
          <br />
          {psic.nCRP}
        </div>
      }
    </nav>
  );
};

export default NavbarPsicPerfil;
