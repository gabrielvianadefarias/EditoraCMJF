import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes de Layout
import Cabecalho from './components/Cabecalho';
import SubHeader from './components/SubHeader';
import Banner from './components/Banner';
import Rodape from './components/Rodape';

// Páginas Principais
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import NoticiasPage from './pages/NoticiasPage';
import NoticiaDetalhePage from './pages/NoticiaDetalhePage';
import AvaliacoesPage from './pages/AvaliacoesPage';

// Páginas Adicionais (placeholders para fazer os links funcionarem)
const CamaraPage = () => <div style={{padding: '4rem', textAlign: 'center'}}><h1>Página da Câmara</h1><p>Conteúdo em breve.</p></div>;
const SeriesPage = () => <div style={{padding: '4rem', textAlign: 'center'}}><h1>Página de Séries e Coleções</h1><p>Conteúdo em breve.</p></div>;
const EditaisPage = () => <div style={{padding: '4rem', textAlign: 'center'}}><h1>Página de Editais</h1><p>Conteúdo em breve.</p></div>;

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
      <SubHeader />
      <Banner />
      <main className="main-content">
        <Routes>
          {/* Rota Principal (Livros) */}
          <Route 
            path="/" 
            element={<HomePage termoBusca={termoBusca} categoriaSelecionada={categoriaSelecionada} />} 
          />
          
          {/* Rotas do SubHeader */}
          <Route path="/camara" element={<CamaraPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/editais" element={<EditaisPage />} />
          <Route path="/sobre" element={<SobrePage />} />

          {/* Rotas de Notícias */}
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/noticias/:id" element={<NoticiaDetalhePage />} />
          
          {/* Outras Rotas */}
          <Route path="/avaliacoes" element={<AvaliacoesPage />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  );
}

export default App;

