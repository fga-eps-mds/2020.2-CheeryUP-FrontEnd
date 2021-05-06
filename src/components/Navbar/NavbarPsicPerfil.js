import React, { useEffect, useCallback } from "react";
import "../../style/pages/HomePage/NavbarPsicologo.css";
import axiosInstance from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setPsic } from "../../store/Psicologo/actions";
import { MenuItems, MenuItemsPsicPerfil } from "./MenuItems";

/*
    Fiz esse novo arquivo no intuito de termos uma Navbar do Psicólogo.
    Essa Navbar seria usada nas páginas após o Login.
*/

export const NavbarPsic = () => {
  const {psic} = useSelector( (state) =>state)
  const dispatch = useDispatch();
  const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
  useEffect(() => {
    axiosInstance.get("/api/psicologos/{psic.user.username}/").then((response) => {
      changePsic(response.data);
    });
  }, []);
  useEffect( () => {
      console.log(psic)
  },[psic])
  
  return (
    <nav className="NavbarItemsPsico">
      <div className="logo-cheeryUpPsic">
        <img src="/imagens/logoNavbarAlt.png" alt="Logo" />
      </div>

      <ul className="nav-menu">
        {MenuItemsPsicPerfil.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      {
        <div className="dados-psicologo">
          {psic.user.username}
          <br />
          {psic.nCRP}
        </div>
      }
    </nav>
  );
};

export default NavbarPsic;
