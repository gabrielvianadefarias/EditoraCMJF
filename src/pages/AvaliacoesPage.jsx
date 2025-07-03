import React from 'react';
import './Paginas.css'; 

const AvaliacoesPage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Avaliações dos Leitores</h1>
        
        <div className="form-container">
          <h2>Deixe sua avaliação:</h2>
          <form>
            <input type="text" placeholder="Seu nome" className="form-input" />
            <textarea placeholder="Sua mensagem..." rows="4" className="form-textarea"></textarea>
            <button type="submit" className="form-button">Enviar Avaliação</button>
          </form>
        </div>

        <div className="reviews-container">
          <h2>O que outros leitores dizem</h2>
          <div className="review-card">
            <p className="review-text">"Incrível! Encontrei livros que procurava há anos. Projeto fantástico!"</p>
            <p className="review-author">- Átila Henrique.</p>
          </div>
          <div className="review-card">
            <p className="review-text">"A facilidade de baixar os PDFs é o melhor. Site limpo e direto ao ponto."</p>
            <p className="review-author">- Evandro Machado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvaliacoesPage;
