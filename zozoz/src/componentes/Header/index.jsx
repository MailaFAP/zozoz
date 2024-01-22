import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <header>
                <span>
                    zozoz
                </span>
                <nav className="menu">
                    <Link className='home-link' to='/home'>Home</Link>
                    <Link className='sobre-link' to='/sobre'>Sobre</Link>
                    <Link className='servicos-link' to='/servicos'>Serviços</Link>
                    <Link className='contato-link' to='/contato'>Contato</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header