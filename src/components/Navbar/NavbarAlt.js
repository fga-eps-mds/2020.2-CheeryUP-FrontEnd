import React, { useEffect } from "react";
import { NavbarItemsPsic } from "./MenuItems";
import "../../style/pages/HomePage/NavbarPsic.css";
import axiosInstance from "../../services/api";

/*
    Fiz esse novo arquivo no intuito de termos uma Navbar do Psicólogo.
    Essa Navbar seria usada nas páginas após o Login.
*/

export const NavbarAlt = () => {
  useEffect(() => {
    axiosInstance.get("/api/psicologos/").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <nav className="NavbarItemsPsic">
      <div className="logo-cheeryUpPsic">
        <img src="/imagens/logoNavbarAlt.png" alt="Logo" />
      </div>

      <ul className="nav-menu">
        {NavbarItemsPsic.map((item, index) => {
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
          Nome do Psicólogo
          <br />
          Número do CRP
        </div>
      }
    </nav>
  );
};

export default NavbarAlt;
