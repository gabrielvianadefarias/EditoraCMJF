import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import AvaliacoesPage from './pages/AvaliacoesPage';

function App() {
  const [termoBusca, setTermoBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(''); 

  return (
    <div className="app-container">
      <Cabecalho 
        termoBusca={termoBusca} 
        setTermoBusca={setTermoBusca}
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}
      />
      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage termoBusca={termoBusca} categoriaSelecionada={categoriaSelecionada} />} 
          />
          <Route path="/sobre" element={<SobrePage />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  );
}

export default App;
