import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <span className="logo">zozoz</span>

      {/* Menu hamburguer visível na versão mobile */}
      <div className="hamburger-menu">
        <input
          id="menu__toggle"
          type="checkbox"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Link className="menu__item" to="/home" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/sobre" onClick={toggleMenu}>
              Sobre
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/servicos" onClick={toggleMenu}>
              Serviços
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/contato" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </div>

      {/* Restante da sua navbar (para a versão desktop) */}
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link className="home-link" to="/home">
          Home
        </Link>
        <Link className="sobre-link" to="/sobre">
          Sobre
        </Link>
        <Link className="servicos-link" to="/servicos">
          Serviços
        </Link>
        <Link className="contato-link" to="/contato">
          Contato
        </Link>
      </div>
    </div>
  );
}

export default Header;
