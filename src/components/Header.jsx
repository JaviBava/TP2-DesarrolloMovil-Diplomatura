import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid px-3">
          <a className="navbar-brand fw-bold" href="#">CINEFLIX</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#peliculas">Películas</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
);

export default Header;