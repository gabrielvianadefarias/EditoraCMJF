import React from 'react';
import './Paginas.css'; 

const SobrePage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Sobre a Livraria Grátis</h1>
        <p className="page-text">
          Bem-vindo à Editora da Câmara Municipal de Juiz de Fora! Totalmente Grátis! Este projeto nasceu da paixão pela leitura e do desejo de tornar o conhecimento acessível a todos. Acreditamos que os livros são portais para novos mundos, ideias e perspectivas, e ninguém deveria ser impedido de acessá-los por barreiras financeiras.
        </p>
        <p className="page-text">
          Nossa missão é simples: disponibilizar uma coleção diversificada de livros em formato PDF, de forma totalmente gratuita e legal. Todos os títulos disponíveis aqui são de domínio público ou foram cedidos pelos autores para distribuição livre.
        </p>
        <p className="page-text">
          Explore, baixe, leia e compartilhe. Boa leitura!
        </p>
      </div>
    </div>
  );
};

export default SobrePage;
