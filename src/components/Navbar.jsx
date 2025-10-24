import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbarStyles.css';

function Navbar() {
    return (
        <nav className= 'navbar'>
            <ul>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/productos">CATALOGO</Link></li>
                <li><Link to="">CARRITO</Link></li>
                <li><Link to="/iniciar-sesion">INICIAR SESION</Link></li>
            </ul>
        </nav>
    );
}export default Navbar;
