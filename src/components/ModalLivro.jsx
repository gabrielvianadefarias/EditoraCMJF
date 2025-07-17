import React from 'react';
import './ModalLivro.css';

const ModalLivro = ({ livro, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          <div className="modal-imagem-container">
            <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`} />
          </div>
          <div className="modal-info-container">
            <h2 className="modal-titulo">{livro.titulo}</h2>
            <h3 className="modal-autor">{livro.autor}</h3>
            
            <div className="modal-detalhes-tecnicos">
              <span>Ano: {livro.ano}</span>
              <span>Páginas: {livro.paginas}</span>
              <span>Categoria: {livro.categoria}</span>
            </div>
            
            <p className="modal-sinopse-titulo">Sinopse</p>
            
            <div 
            className="modal-sinopse" 
            dangerouslySetInnerHTML={{ __html: livro.sinopse }} 
            />
            {/* <p className="modal-sinopse">{livro.sinopse}</p> */}

            <a href={livro.urlPdf} download target="_blank" rel="noopener noreferrer" className="modal-botao-download">
              Baixar PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLivro;
