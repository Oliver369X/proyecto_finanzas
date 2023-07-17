//import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from "../assets";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/proyecto_finanzas">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li>
            <Link to="/proyecto_finanzas">Inicio</Link>
          </li>
          {/* <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li> */}
          {/* <li>
            <Link to="/contacto">Contacto</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
