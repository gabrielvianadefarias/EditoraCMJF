import React from 'react';
import './CardLivro.css';

//const EstrelasAvaliacao = ({ nota }) => {
//  const estrelas = Array.from({ length: 5 }, (_, i) => (
//    <span key={i} className={`estrela ${i < nota ? 'preenchida' : ''}`}>★</span>
//  ));
//  return <div className="avaliacao-estrelas">{estrelas}</div>;
//};
// {livro.avaliacao > 0 && <EstrelasAvaliacao nota={livro.avaliacao} />}

const CardLivro = ({ livro, onCardClick }) => {
  return (

    <div className="card-livro" onClick={onCardClick}>
      <div className="card-livro-imagem-container">
        <img src={livro.imagemCapa} alt={`Capa do livro ${livro.titulo}`} className="imagem-capa" />
      </div>
      <div className="card-livro-conteudo">
        <h3 className="livro-titulo">{livro.titulo}</h3>
        <p className="livro-autor">{livro.autor}</p>

        <a 
          href={livro.urlPdf} 
          download 
          target="_blank" 
          rel="noopener noreferrer" 
          className="botao-download"
          onClick={(e) => e.stopPropagation()}
        >
          Baixar PDF
        </a>
      </div>
    </div>
  );
};

export default CardLivro;
