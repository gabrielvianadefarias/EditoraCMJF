import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CCollapse, CContainer, CNavbar, CNavbarBrand,
  CNavbarToggler, CForm, CDropdown,
  CDropdownToggle, CDropdownMenu, CDropdownItem
} from '@coreui/react';

import './Cabecalho.css';

const Cabecalho = ({ termoBusca, setTermoBusca, categoriaSelecionada, setCategoriaSelecionada }) => {
  const [visible, setVisible] = useState(false);
  const categorias = ['Clássico', 'Ficção', 'Aventura', 'Romance'];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <CNavbar
      expand="lg"
      className="custom-navbar"
      data-bs-theme="dark"
      style={{ backgroundColor: '#1561dc' }}
    >
      <CContainer fluid>
        <CNavbarBrand as={Link} to="/">
          <img src="/images/logoeditora.png" alt="Logo Editora Câmara JF" className="navbar-logo" />
        </CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <div className="d-flex align-items-center ms-auto">
            <CDropdown className="category-dropdown">
              <CDropdownToggle color="light" variant="outline">{categoriaSelecionada || 'Categorias'}</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => setCategoriaSelecionada('')}>Todas</CDropdownItem>
                {categorias.map(cat => (
                    <CDropdownItem key={cat} onClick={() => setCategoriaSelecionada(cat)}>{cat}</CDropdownItem>
                ))}
              </CDropdownMenu>
            </CDropdown>

            <CForm className="d-flex search-form-container" onSubmit={handleSubmit}>
              <span className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </span>
              <input
                type="search"
                className="form-control search-input"
                placeholder="Título ou autor"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
              />
            </CForm>
          </div>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Cabecalho;
