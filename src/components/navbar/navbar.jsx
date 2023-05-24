import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CarWidget from '../CarWidget/CarWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SPARTAN NUTRITION</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">QUIENES SOMOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONOCE TU PROTEINA IDEAL</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Proteinas</a></li>
                <li><a className="dropdown-item" href="#">Creatinas</a></li>
                </ul>
            </li>
            <li className="nav-item">
              <CarWidget/>
            </li>
            </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="GOLD WHEY" aria-label="Search" />
            <button className="btn btn-outline-success" type="button">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


