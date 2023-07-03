import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CarWidget from '../CarWidget/CarWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">SPARTAN NUTRITION</a>
        <img src="../../assets/LOGO.png" alt="" />
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className='nav-link' to={'/'} style={{ color: 'inherit', textDecoration: 'inherit' }}>HOME</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
              </a>
              <ul className="dropdown-menu">
                <li><Link to={'/category/Limpia'} style={{ color: 'inherit', textDecoration: 'inherit' }}>Limpias</Link></li>
                <li><Link to={'/category/Hipercalorica'} style={{ color: 'inherit', textDecoration: 'inherit' }}>Hipercaloricas</Link></li>
                
                </ul>
            </li>
            <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
  <CarWidget/>
</li>

            </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="GOLD WHEY" aria-label="Search" />
            <button className="btn btn-dark" type="button">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


