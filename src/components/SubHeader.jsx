import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubHeader.css';

const SubHeader = () => {
  return (
    <nav className="subheader-container">
      <ul className="subheader-nav-list">
        <li><NavLink to="/camara" className="subheader-nav-link">Câmara</NavLink></li>
        <li><NavLink to="/" className="subheader-nav-link">Livros</NavLink></li>
        <li><NavLink to="/noticias" className="subheader-nav-link">Notícias</NavLink></li>
        <li><NavLink to="/sobre" className="subheader-nav-link">Sobre</NavLink></li>
      </ul>
    </nav>
  );
};

export default SubHeader;
