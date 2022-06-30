import React from "react";

import './header.css'

import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";

function Header() {
  return (
    <header className="header">
      <div className="banner-container">
        <img src={banner} alt="Banner mostrando uma pizza" />
      </div>
      <div className="logo-container">
        <img src={logo} alt="logo da Alura Pizza" />
      </div>
    </header>
  );
}

export default Header;
