import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import "../../style/pages/HomePage/Navbar.css";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";
//import { useState } from 'react'

export const Navbar = () => {
  const { mobile } = useSelector((state) => state);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log(mobile)
  }, [mobile]);

  return (
    <div>
      {mobile ? (
        <div>
          <nav className="NavbarItemsMobile">
            <Icon name="bars" onClick={() => setVisible(!visible)} />
          </nav>

          <Drawer
            anchor="left"
            open={visible}
            onClose={() => {
              setVisible(false);
            }}
          >
            <div className="ContainerSideBar">
              {MenuItems.map((item, index) => {
                return (
                  <Link className="ContentSideBar" key={index} to={item.url}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </Drawer>
        </div>
      ) : (
        <nav className="NavbarItems">
          <div className="logo-cheeryUp">
            <img src="/imagens/cereja.png" alt="Logo" />
          </div>
          <ul className={"nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

