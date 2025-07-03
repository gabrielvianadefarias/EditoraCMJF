import React from 'react';
import './Rodape.css'; 

const Rodape = () => {

  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape-container">
      <p>&copy; {anoAtual} EDITORA CMJF. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Rodape;
